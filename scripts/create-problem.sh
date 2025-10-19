#!/usr/bin/env bash
set -euo pipefail

usage() {
    cat <<USAGE
Usage: $0 [-l language] <difficulty> <problem-number> <problem-title>

Create a new problem folder from templates.

Arguments:
  difficulty       Problem difficulty: easy, medium, or hard.
  problem-number   LeetCode problem number (e.g., 1, 42, 1234).
  problem-title    Problem title in quotes (e.g., "Two Sum").

Options:
  -l language      Solution language to use (default: ts). Choices are read
                   from available templates.
  -h               Show this help message.

Examples:
  $0 easy 1 "Two Sum"
  $0 -l py medium 3 "Longest Substring Without Repeating Characters"
USAGE
}

die() {
    echo "Error: $*" >&2
    exit 1
}

TEMPLATES_DIR=".templates/problem-template"
LANG_TEMPLATE="solution"
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
lang_flag_set=false

while getopts ":l:h" opt; do
    case "$opt" in
        l)
            language="${OPTARG,,}"
            lang_flag_set=true
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
    | sed -e 's/[^a-z0-9\+]/-/g' -e 's/--\+/-/g' -e 's/^-//' -e 's/-$//')

if [[ -z "$slug" ]]; then
    die "Could not derive slug from title: $title"
fi

language_template_path="$TEMPLATES_DIR/${LANG_TEMPLATE}.${language}"

if [[ ! -f "$language_template_path" ]]; then
    die "Template not found for language '$language': $language_template_path"
fi

target_dir="problems/$difficulty/${padded_number}-${slug}"

if [[ -d "$target_dir" ]]; then
    die "Target directory already exists: $target_dir"
fi

mkdir -p "$target_dir"

cp "$TEMPLATES_DIR/README.md" "$target_dir/README.md"
cp "$language_template_path" "$target_dir/${LANG_TEMPLATE}.${language}"

echo "Created $target_dir" 
echo "Copied templates: README.md and ${LANG_TEMPLATE}.${language}"

echo "Next steps:"
echo "  - Fill in $target_dir/README.md with problem details"
echo "  - Implement the solution in $target_dir/${LANG_TEMPLATE}.${language}"
echo "  - Add tests within the solution file"
