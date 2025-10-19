"""
Two Sum - LeetCode Problem #1
Time Complexity: O(n)
Space Complexity: O(n)
"""

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Find two numbers in the array that add up to the target.
        
        Args:
            nums: List of integers
            target: Target sum
            
        Returns:
            List containing indices of the two numbers
        """
        # Dictionary to store number -> index mapping
        num_map = {}
        
        # Iterate through the array
        for i, num in enumerate(nums):
            # Calculate the complement
            complement = target - num
            
            # Check if complement exists in our map
            if complement in num_map:
                return [num_map[complement], i]
            
            # Add current number to map
            num_map[num] = i
        
        # Should never reach here given problem constraints
        return []


# Test cases
if __name__ == "__main__":
    solution = Solution()
    
    # Test case 1
    assert solution.twoSum([2, 7, 11, 15], 9) == [0, 1]
    print("Test 1 passed")
    
    # Test case 2
    assert solution.twoSum([3, 2, 4], 6) == [1, 2]
    print("Test 2 passed")
    
    # Test case 3
    assert solution.twoSum([3, 3], 6) == [0, 1]
    print("Test 3 passed")
    
    print("All tests passed!")
