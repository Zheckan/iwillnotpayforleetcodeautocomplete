/*
21. Merge Two Sorted Lists - LeetCode Problem #21
Time Complexity: O(?)
Space Complexity: O(?)
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Create a dummy node to simplify the logic
  const dummy = new ListNode(0);
  let current = dummy;

  let current1 = list1;
  let current2 = list2;

  // Traverse both lists and attach the smaller node
  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      current.next = current1;
      current1 = current1.next;
    } else {
      current.next = current2;
      current2 = current2.next;
    }
    current = current.next;
  }

  // Attach the remaining nodes from either list
  if (current1 !== null) {
    current.next = current1;
  } else {
    current.next = current2;
  }

  return dummy.next;
}

// Helper function to create a linked list from an array
function createList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array for comparison
function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Helper function to compare arrays
function arraysEqual(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Test cases
if (require.main === module) {
  // Test case 1: list1 = [1,2,4], list2 = [1,3,4]
  const list1_1 = createList([1, 2, 4]);
  const list2_1 = createList([1, 3, 4]);
  const result1 = mergeTwoLists(list1_1, list2_1);
  const expected1 = [1, 1, 2, 3, 4, 4];
  console.assert(arraysEqual(listToArray(result1), expected1), "Test 1 failed");
  console.log("Test 1 passed");

  // Test case 2: list1 = [], list2 = []
  const list1_2 = createList([]);
  const list2_2 = createList([]);
  const result2 = mergeTwoLists(list1_2, list2_2);
  const expected2: number[] = [];
  console.assert(arraysEqual(listToArray(result2), expected2), "Test 2 failed");
  console.log("Test 2 passed");

  // Test case 3: list1 = [], list2 = [0]
  const list1_3 = createList([]);
  const list2_3 = createList([0]);
  const result3 = mergeTwoLists(list1_3, list2_3);
  const expected3 = [0];
  console.assert(arraysEqual(listToArray(result3), expected3), "Test 3 failed");
  console.log("Test 3 passed");

  console.log("All tests passed!");
}
