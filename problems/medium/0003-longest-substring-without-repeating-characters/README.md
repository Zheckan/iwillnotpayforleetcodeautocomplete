# 3. Longest Substring Without Repeating Characters

**Difficulty:** Medium

**Topics:** Hash Table, String, Sliding Window

**Link:** https://leetcode.com/problems/longest-substring-without-repeating-characters/

## Problem Description

Given a string `s`, find the length of the longest substring without repeating characters.

## Examples

### Example 1:
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Constraints

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

## Solution Approach

**Sliding Window with Hash Set:**
We use a sliding window approach with two pointers (left and right). We expand the window by moving the right pointer and add characters to a set. When we encounter a duplicate character, we shrink the window from the left until the duplicate is removed. We keep track of the maximum window size seen.

**Time Complexity:** O(n) - Each character is visited at most twice (once by right pointer, once by left pointer)
**Space Complexity:** O(min(m, n)) - where m is the size of the character set

## Notes

- This is a classic sliding window problem
- The key insight is maintaining a window with unique characters
- Alternative: Use a hash map to store character positions for optimization
