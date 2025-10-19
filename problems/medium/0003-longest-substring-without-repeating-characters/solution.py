"""
Longest Substring Without Repeating Characters - LeetCode Problem #3
Time Complexity: O(n)
Space Complexity: O(min(m, n)) where m is charset size
"""


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        """
        Find the length of the longest substring without repeating characters.
        
        Args:
            s: Input string
            
        Returns:
            Length of the longest substring without repeating characters
        """
        # Set to store characters in current window
        char_set = set()
        left = 0
        max_length = 0
        
        # Expand window with right pointer
        for right in range(len(s)):
            # If character is duplicate, shrink window from left
            while s[right] in char_set:
                char_set.remove(s[left])
                left += 1
            
            # Add current character to set
            char_set.add(s[right])
            
            # Update max length
            max_length = max(max_length, right - left + 1)
        
        return max_length


# Test cases
if __name__ == "__main__":
    solution = Solution()
    
    # Test case 1
    assert solution.lengthOfLongestSubstring("abcabcbb") == 3
    print("Test 1 passed: 'abcabcbb' -> 3")
    
    # Test case 2
    assert solution.lengthOfLongestSubstring("bbbbb") == 1
    print("Test 2 passed: 'bbbbb' -> 1")
    
    # Test case 3
    assert solution.lengthOfLongestSubstring("pwwkew") == 3
    print("Test 3 passed: 'pwwkew' -> 3")
    
    # Test case 4 - edge case
    assert solution.lengthOfLongestSubstring("") == 0
    print("Test 4 passed: '' -> 0")
    
    # Test case 5
    assert solution.lengthOfLongestSubstring("dvdf") == 3
    print("Test 5 passed: 'dvdf' -> 3")
    
    print("\nAll tests passed!")
