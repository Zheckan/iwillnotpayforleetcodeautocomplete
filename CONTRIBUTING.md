# Contributing Guide

## Repository Structure

This repository stores LeetCode problem solutions in an organized manner. The structure is designed to be simple, consistent, and easy to navigate.

### Folder Structure

```
problems/
├── easy/
│   └── {problem-number}-{problem-name}/
│       ├── README.md
│       ├── solution.{ext}
│       └── [additional files]
├── medium/
│   └── {problem-number}-{problem-name}/
│       ├── README.md
│       ├── solution.{ext}
│       └── [additional files]
└── hard/
    └── {problem-number}-{problem-name}/
        ├── README.md
        ├── solution.{ext}
        └── [additional files]
```

### Directory Naming Convention

Each problem should be stored in a directory following this pattern:
```
{problem-number}-{problem-name}
```

**Example:**
- `0001-two-sum` for problem #1 "Two Sum"
- `0042-trapping-rain-water` for problem #42 "Trapping Rain Water"
- `1234-replace-the-substring` for problem #1234

**Rules:**
- Always use 4-digit problem numbers with leading zeros (e.g., `0001`, `0042`, `1234`)
- Problem names should be in lowercase with hyphens separating words
- Use the exact problem name from LeetCode, converted to kebab-case

### File Naming Convention

Each problem directory must contain at least:

1. **README.md** - Contains the problem description, constraints, and examples
2. **solution.{ext}** - The solution code in your chosen language

**Supported languages and extensions:**
- Python: `solution.py`
- JavaScript: `solution.js`
- TypeScript: `solution.ts`
- Java: `solution.java`
- C++: `solution.cpp`
- C#: `solution.cs`
- Go: `solution.go`
- Rust: `solution.rs`
- Ruby: `solution.rb`
- Swift: `solution.swift`
- Kotlin: `solution.kt`

**Multiple Solutions:**
If you have multiple approaches, use descriptive names:
- `solution-brute-force.py`
- `solution-optimized.py`
- `solution-dp.py`

### README.md Template

Each problem's README.md should follow this template:

```markdown
# [Problem Number]. [Problem Title]

**Difficulty:** [Easy/Medium/Hard]

**Topics:** [Array, Hash Table, Dynamic Programming, etc.]

**Link:** [LeetCode problem URL]

## Problem Description

[Copy the problem description from LeetCode]

## Examples

### Example 1:
\```
Input: [example input]
Output: [example output]
Explanation: [explanation if provided]
\```

### Example 2:
[Additional examples...]

## Constraints

- [Constraint 1]
- [Constraint 2]
- ...

## Solution Approach

[Brief description of the approach used]

**Time Complexity:** O(?)
**Space Complexity:** O(?)

## Notes

[Optional: Any additional notes, edge cases, or learnings]
```

## How to Add a New Problem

1. **Determine the difficulty level** (Easy, Medium, or Hard)

2. **Create the problem directory:**
   ```bash
   mkdir -p problems/{difficulty}/{XXXX-problem-name}
   cd problems/{difficulty}/{XXXX-problem-name}
   ```

3. **Create README.md** using the template above

4. **Add your solution** in your preferred language(s)

5. **Commit with a descriptive message:**
   ```bash
   git add problems/{difficulty}/{XXXX-problem-name}
   git commit -m "Add solution for problem #XXXX: Problem Name"
   ```

## Best Practices

1. **Code Quality:**
   - Write clean, readable code
   - Add comments for complex logic
   - Follow the language's style guide

2. **Documentation:**
   - Always include time and space complexity
   - Explain the approach in the README
   - Document any trade-offs or alternative solutions

3. **Testing:**
   - Test your solution with the provided examples
   - Consider edge cases
   - Include test cases in comments if helpful

4. **Organization:**
   - One problem per directory
   - Keep related files together
   - Use consistent naming

## Why This Structure?

### Advantages:

1. **Difficulty-based organization** - Easy to find problems by difficulty level
2. **Unique identification** - Problem numbers ensure no conflicts
3. **Self-documenting** - Directory names include problem names for easy browsing
4. **Scalable** - Works well from 1 to 1000+ problems
5. **Lexicographic sorting** - Problems naturally sort by number (thanks to zero-padding)
6. **Multi-language support** - Easy to add solutions in different languages
7. **IDE-friendly** - Works well with code editors and file explorers

### Alternative Structures Considered:

- **By Topic** (Array, Tree, Graph, etc.): Problems often fit multiple topics, making organization ambiguous
- **By Company** (Google, Amazon, etc.): Company tags change over time
- **By Pattern** (Sliding Window, Two Pointers, etc.): Subjective and may not be clear for beginners
- **Flat structure**: Difficult to navigate with many problems

The difficulty-first structure is the most objective and aligns with how LeetCode naturally categorizes problems.

## Example

See the example problems in this repository:
- `problems/easy/0001-two-sum/` - A simple example with Python solution
- `problems/medium/0003-longest-substring-without-repeating-characters/` - Medium difficulty example

## Questions?

If you have suggestions for improving this structure or organization, please open an issue for discussion!
