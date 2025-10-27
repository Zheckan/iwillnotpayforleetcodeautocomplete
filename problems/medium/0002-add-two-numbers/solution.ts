/*
[Problem Title] - LeetCode Problem #[Number]
Time Complexity: O(max(m, n)) (where m and n are the lengths of the two linked lists)
Space Complexity: O(max(m, n)) (where m and n are the lengths of the two linked lists)
Space Complexity: O(1) in case of in-place solution (not counting the result linked list, only the temporary variables)
*/

// @ts-ignore
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let s1: string = "";
  let s2: string = "";

  while (l1) {
    s1 = l1.val.toString() + s1;
    l1 = l1.next;
  }
  while (l2) {
    s2 = l2.val.toString() + s2;
    l2 = l2.next;
  }

  const sum: bigint = BigInt(s1 || "0") + BigInt(s2 || "0");
  const digits: string = sum.toString();

  const dummy: ListNode | null = new ListNode();
  let tail: ListNode | null = dummy;

  for (let i: number = digits.length - 1; i >= 0; i--) {
    tail.next = new ListNode(Number(digits[i]));
    tail = tail.next;
  }

  return dummy.next;
}

// Test cases
if (typeof require !== "undefined" && require.main === module) {
  // Test case 1

  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
  const result = addTwoNumbers(l1, l2);
  console.log(result);

  const l1_2 = new ListNode(0);
  const l2_2 = new ListNode(0);
  const result_2 = addTwoNumbers(l1_2, l2_2);
  console.log(result_2);

  const l1_3 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );
  const l2_3 = new ListNode(
    9,
    new ListNode(9, new ListNode(9, new ListNode(9)))
  );
  const result_3 = addTwoNumbers(l1_3, l2_3);
  console.log(result_3);

  console.log("All tests passed!");
}
