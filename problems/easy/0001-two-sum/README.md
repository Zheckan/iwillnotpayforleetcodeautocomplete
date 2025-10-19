# 1. Two Sum

**Difficulty:** Easy

**Topics:** Array, Hash Table

**Link:** https://leetcode.com/problems/two-sum/

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples

### Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

## Solution Approach

**Hash Map Approach:**
We can solve this problem in a single pass using a hash map (dictionary). As we iterate through the array, for each element, we check if `target - current_element` exists in the hash map. If it does, we found our pair. If not, we add the current element to the hash map.

**Time Complexity:** O(n) - Single pass through the array
**Space Complexity:** O(n) - Hash map storage

## Notes

- This is a classic LeetCode problem and often used in interviews
- The hash map approach is optimal compared to the brute force O(n²) solution
- Be careful with edge cases where the same element might be used twice
