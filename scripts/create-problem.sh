#!/usr/bin/env bash
set -euo pipefail

usage() {
    cat <<USAGE
Usage: $0 [-l language] [-t topics] [-u url] <difficulty> <problem-number> <problem-title>

Create a new problem folder from templates.

Arguments:
  difficulty       Problem difficulty: easy, medium, or hard.
  problem-number   LeetCode problem number (e.g., 1, 42, 1234).
  problem-title    Problem title in quotes (e.g., "Two Sum").

Options:
  -l language      Solution language to use (default: ts). Choices are read
                   from available templates.
  -t topics        Comma-separated list of topics to pre-fill.
  -u url           LeetCode problem URL to pre-fill.
  -h               Show this help message.

Examples:
  $0 easy 1 "Two Sum"
  $0 -l py -t "Hash Table,Array" medium 3 "Longest Substring Without Repeating Characters"
USAGE
}

die() {
    echo "Error: $*" >&2
    exit 1
}

normalize_topics() {
    local input="$1"
    if [[ -z "$input" ]]; then
        printf 'Topic1, Topic2, Topic3'
        return
    fi

    local IFS=','
    read -ra parts <<< "$input"
    local trimmed_parts=()
    local part trimmed
    for part in "${parts[@]}"; do
        trimmed=$(printf '%s' "$part" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')
        if [[ -n "$trimmed" ]]; then
            trimmed_parts+=("$trimmed")
        fi
    done

    if [[ ${#trimmed_parts[@]} -eq 0 ]]; then
        printf 'Topic1, Topic2, Topic3'
        return
    fi

    local joined="${trimmed_parts[0]}"
    for part in "${trimmed_parts[@]:1}"; do
        joined+=", $part"
    done

    printf '%s' "$joined"
}

TEMPLATES_DIR=".templates/problem-template"
LANG_TEMPLATE="solution"
PROBLEM_TEMPLATE="README.md"
DEFAULT_LANG="ts"

available_languages=()
for template in "$TEMPLATES_DIR"/${LANG_TEMPLATE}.*; do
    [[ -f "$template" ]] || continue
    lang_ext="${template##*.}"
    available_languages+=("$lang_ext")
done

if [[ ${#available_languages[@]} -eq 0 ]]; then
    die "No solution templates found in $TEMPLATES_DIR"
fi

language=""
topics=""
url=""

while getopts ":l:t:u:h" opt; do
    case "$opt" in
        l)
            language="${OPTARG,,}"
            ;;
        t)
            topics="${OPTARG}"
            ;;
        u)
            url="${OPTARG}"
            ;;
        h)
            usage
            exit 0
            ;;
        :)
            die "Option -$OPTARG requires an argument."
            ;;
        \?)
            die "Invalid option: -$OPTARG"
            ;;
    esac
done
shift $((OPTIND - 1))

if [[ $# -lt 3 ]]; then
    usage
    exit 1
fi

if [[ -z "$language" ]]; then
    if [[ -t 0 ]]; then
        echo "Available languages: ${available_languages[*]}"
        read -r -p "Choose language [${DEFAULT_LANG}]: " language_input || language_input=""
        language="${language_input,,}"
    fi
    if [[ -z "$language" ]]; then
        language="$DEFAULT_LANG"
    fi
fi

difficulty="${1,,}"
problem_number="$2"
shift 2
title="$*"

case "$difficulty" in
    easy|medium|hard) ;;
    *) die "Unsupported difficulty: $difficulty" ;;
esac

if ! [[ "$problem_number" =~ ^[0-9]+$ ]]; then
    die "Problem number must be numeric."
fi

padded_number=$(printf "%04d" "$problem_number")
slug=$(echo "$title" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -e 's/[+]/ plus /g' \
          -e 's/[^a-z0-9]/-/g' \
          -e 's/--\+/-/g' \
          -e 's/^-//' \
          -e 's/-$//')

if [[ -z "$slug" ]]; then
    die "Could not derive slug from title: $title"
fi

if [[ -z "$url" ]]; then
    url="https://leetcode.com/problems/$slug/"
fi

language_template_path="$TEMPLATES_DIR/${LANG_TEMPLATE}.${language}"
problem_template_path="$TEMPLATES_DIR/$PROBLEM_TEMPLATE"

if [[ ! -f "$language_template_path" ]]; then
    die "Template not found for language '$language': $language_template_path"
fi

if [[ ! -f "$problem_template_path" ]]; then
    die "Problem template not found: $problem_template_path"
fi

target_dir="problems/$difficulty/${padded_number}-${slug}"

if [[ -d "$target_dir" ]]; then
    die "Target directory already exists: $target_dir"
fi

mkdir -p "$target_dir"

number_title_heading="# $problem_number. $title"
difficulty_capitalized="${difficulty^}"
topics_formatted=$(normalize_topics "$topics")

python3 - "$problem_template_path" "$target_dir/README.md" \
    "$number_title_heading" \
    "$difficulty_capitalized" \
    "$topics_formatted" \
    "$url" <<'PY'
import sys
from pathlib import Path

if len(sys.argv) != 7:
    sys.stderr.write("Expected 6 arguments for template population\n")
    sys.exit(1)

template_path, output_path, heading, difficulty, topics, url = sys.argv[1:7]
content = Path(template_path).read_text(encoding="utf-8")
replacements = {
    "# [Problem Number]. [Problem Title]": heading,
    "**Difficulty:** [Easy/Medium/Hard]": f"**Difficulty:** {difficulty}",
    "**Topics:** [Topic1, Topic2, Topic3]": f"**Topics:** {topics}",
    "**Link:** [LeetCode problem URL]": f"**Link:** {url}",
}
for src, dst in replacements.items():
    content = content.replace(src, dst)
Path(output_path).write_text(content, encoding="utf-8")
PY

cp "$language_template_path" "$target_dir/${LANG_TEMPLATE}.${language}"

echo "Created $target_dir"
echo "Copied templates: README.md and ${LANG_TEMPLATE}.${language}"

echo "Next steps:"
echo "  - Fill in $target_dir/README.md with problem details"
echo "  - Implement the solution in $target_dir/${LANG_TEMPLATE}.${language}"
echo "  - Add tests within the solution file"
