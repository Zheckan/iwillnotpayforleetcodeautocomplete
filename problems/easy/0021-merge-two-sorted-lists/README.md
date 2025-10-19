# 21. Merge Two Sorted Lists

**Difficulty:** Easy

**Topics:** Linked List, Recursion

**Link:** https://leetcode.com/problems/merge-two-sorted-lists/

## Problem Description

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

## Examples

Example 1:
```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```
Example 2:
```
Input: list1 = [], list2 = []
Output: []
```
Example 3:
```
Input: list1 = [], list2 = [0]
Output: [0]
```

## Constraints
```
    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.
```


## Solution Approach

**Two-Pointer Approach:**
We use two pointers to traverse both lists simultaneously. We compare the values of the current nodes and attach the smaller node to the result list. We move the pointer of the list with the smaller value forward. We continue this process until we reach the end of one of the lists. Then, we attach the remaining nodes of the other list to the result list.

**Time Complexity:** O(n + m) - where n is the length of list1 and m is the length of list2
**Space Complexity:** O(1) - we only use a few pointers

## Notes

- This is a classic two-pointer problem
- The key insight is maintaining a pointer for each list
- Alternative: Use a recursive approach
