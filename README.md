# iwillnotpayforleetcodeautocomplete

Place to store solved LeetCode problems with an organized structure. Since LeetCode doesn't even have autocomplete on the free tier, this repository provides a better development experience with your favorite IDE!

## 📁 Repository Structure

Problems are organized by difficulty level for easy navigation:

```
problems/
├── easy/
│   └── {problem-number}-{problem-name}/
│       ├── README.md
│       └── solution.{ext}
├── medium/
│   └── {problem-number}-{problem-name}/
│       ├── README.md
│       └── solution.{ext}
└── hard/
    └── {problem-number}-{problem-name}/
        ├── README.md
        └── solution.{ext}
```

### Example Structure

```
problems/
├── easy/
│   └── 0001-two-sum/
│       ├── README.md          # Problem description, examples, constraints
│       └── solution.py        # Solution with test cases
├── medium/
│   └── 0003-longest-substring-without-repeating-characters/
│       ├── README.md
│       └── solution.py
└── hard/
    └── (your hard problems here)
```

## 🚀 Quick Start

1. **Browse problems** by difficulty in the `problems/` directory
2. **Open a problem folder** to see the problem description and solution
3. **Run the solution** in your IDE with full autocomplete and debugging support!

## 📝 Adding New Problems

**Quick Start:** See [QUICK_START.md](QUICK_START.md) for a quick reference guide

**Detailed Guide:** See [CONTRIBUTING.md](CONTRIBUTING.md) for comprehensive guidelines on:
- Folder structure and naming conventions
- README template for problem descriptions
- Multiple language support
- Best practices for code and documentation

### Quick Add

```bash
# 1. Create problem directory
mkdir -p problems/{difficulty}/{XXXX-problem-name}

# 2. Copy templates
cp .templates/problem-template/README.md problems/{difficulty}/{XXXX-problem-name}/
cp .templates/problem-template/solution.py problems/{difficulty}/{XXXX-problem-name}/

# 3. Edit files with problem description and solution

# 4. Test your solution
python3 problems/{difficulty}/{XXXX-problem-name}/solution.py

# 5. Commit
git add problems/{difficulty}/{XXXX-problem-name}
git commit -m "Add solution for problem #XXXX: Problem Name"
```

## 💡 Why This Structure?

✅ **Simple & Objective** - Organized by official LeetCode difficulty
✅ **Easy to Navigate** - Find problems by number or browse by difficulty
✅ **Scalable** - Works great from 1 to 1000+ problems
✅ **Multi-language** - Support any programming language
✅ **Self-documenting** - Each problem has its own folder with description
✅ **IDE-friendly** - Use your favorite editor with full features!

## 🎯 Examples

Check out these example problems to see the structure in action:
- [0001-two-sum](problems/easy/0001-two-sum/) - Easy difficulty example
- [0003-longest-substring-without-repeating-characters](problems/medium/0003-longest-substring-without-repeating-characters/) - Medium difficulty example

## 📚 Resources

- [LeetCode](https://leetcode.com/) - Original problem source
- [QUICK_START.md](QUICK_START.md) - Quick reference for adding problems
- [CONTRIBUTING.md](CONTRIBUTING.md) - Detailed contribution guidelines

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to add problems to this repository.

---

**Happy Coding!** 🎉 No more paying for autocomplete!
