# iwillnotpayforleetcodeautocomplete

Place to store solved LeetCode problems with an organized structure. Since LeetCode doesn't even have autocomplete on the free tier, and this is bs

## Table of Contents

- [iwillnotpayforleetcodeautocomplete](#iwillnotpayforleetcodeautocomplete)
  - [Table of Contents](#table-of-contents)
  - [Quick parse of a problem](#quick-parse-of-a-problem)
    - [Requirements](#requirements)

## Quick parse of a problem

```bash
scripts/create-problem.sh "Two Sum"
```

### Requirements

- `bun` installed and run `scripts/create-problem.sh` script in your PATH.
- Ollama is required to parse the problem. If you not as lazy as me, you can write normal parse without using AI to do it.
- BTW do not forget to create a .env file from .env.example, and set the OLLAMA_MODEL and OLLAMA_ENDPOINT.

```bash
cp .env.example .env
```

This will parse info from LeetCode and create a new problem folder with description in README.md and the initial code from leetcode.com.
