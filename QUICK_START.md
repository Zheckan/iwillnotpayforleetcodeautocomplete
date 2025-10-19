# Quick Reference Guide

## Adding a New Problem

### 1. Create Problem Directory

```bash
# For an easy problem
mkdir -p problems/easy/XXXX-problem-name

# For a medium problem  
mkdir -p problems/medium/XXXX-problem-name

# For a hard problem
mkdir -p problems/hard/XXXX-problem-name
```

### 2. Copy Templates

```bash
# Copy the README template
cp .templates/problem-template/README.md problems/{difficulty}/{XXXX-problem-name}/

# Copy your preferred language template
cp .templates/problem-template/solution.py problems/{difficulty}/{XXXX-problem-name}/
# or
cp .templates/problem-template/solution.js problems/{difficulty}/{XXXX-problem-name}/
# or
cp .templates/problem-template/solution.java problems/{difficulty}/{XXXX-problem-name}/
# or
cp .templates/problem-template/solution.cpp problems/{difficulty}/{XXXX-problem-name}/
```

### 3. Fill in the Templates

- Edit `README.md` with problem description from LeetCode
- Edit `solution.{ext}` with your code
- Add test cases to verify your solution

### 4. Test Your Solution

```bash
# For Python
python3 problems/{difficulty}/{XXXX-problem-name}/solution.py

# For JavaScript (with Node.js)
node problems/{difficulty}/{XXXX-problem-name}/solution.js

# For Java
javac problems/{difficulty}/{XXXX-problem-name}/solution.java
java -cp problems/{difficulty}/{XXXX-problem-name} Solution

# For C++
g++ problems/{difficulty}/{XXXX-problem-name}/solution.cpp -o /tmp/solution
/tmp/solution
```

### 5. Commit Your Solution

```bash
git add problems/{difficulty}/{XXXX-problem-name}
git commit -m "Add solution for problem #XXXX: Problem Name"
git push
```

## Naming Examples

| LeetCode Problem | Directory Name |
|-----------------|----------------|
| 1. Two Sum | `0001-two-sum` |
| 42. Trapping Rain Water | `0042-trapping-rain-water` |
| 146. LRU Cache | `0146-lru-cache` |
| 2035. Partition Array Into Two Arrays to Minimize Sum Difference | `2035-partition-array-into-two-arrays-to-minimize-sum-difference` |

## Directory Structure at a Glance

```
problems/
├── easy/          # Difficulty: Easy
├── medium/        # Difficulty: Medium  
└── hard/          # Difficulty: Hard

Each problem folder:
├── README.md      # Problem description, examples, constraints
└── solution.{ext} # Your solution in any language
```

## Supported Languages

| Language | File Extension | Template Available |
|----------|---------------|-------------------|
| Python | `.py` | ✅ |
| JavaScript | `.js` | ✅ |
| Java | `.java` | ✅ |
| C++ | `.cpp` | ✅ |
| TypeScript | `.ts` | Add your own |
| Go | `.go` | Add your own |
| Rust | `.rs` | Add your own |
| C# | `.cs` | Add your own |

## Tips

- **Zero-pad problem numbers**: Use `0001` not `1`
- **Kebab-case names**: `two-sum` not `TwoSum` or `two_sum`
- **Test before committing**: Always verify your solution works
- **Include complexity**: Document time and space complexity
- **Multiple solutions**: Use descriptive suffixes like `solution-dp.py`, `solution-optimized.py`

## Getting Problem Info from LeetCode

1. Go to the LeetCode problem page
2. Copy the problem number (e.g., 1, 42, 146)
3. Copy the problem title (e.g., "Two Sum")
4. Convert to kebab-case: "Two Sum" → "two-sum"
5. Format: `{number:04d}-{kebab-case-name}`

## Examples in This Repository

Check these for reference:
- [`problems/easy/0001-two-sum/`](problems/easy/0001-two-sum/) - Basic example
- [`problems/medium/0003-longest-substring-without-repeating-characters/`](problems/medium/0003-longest-substring-without-repeating-characters/) - Medium complexity

---

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)
