class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Insert function
function insert(head: ListNode, val: number): ListNode {
  let temp: ListNode = head;
  while (temp.next !== null) temp = temp.next;

  temp.next = new ListNode(val);

  return head;
}

// Delete function
function deleteNode(head: ListNode, val: number): ListNode {
  let temp: ListNode = head;
  while (temp.next !== null && temp.next.val !== val) temp = temp.next;

  if (temp.next !== null) temp.next = temp.next.next;

  return head;
}

function reverseList(head: ListNode): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    // Save the next node
    const next: ListNode | null = current.next;

    // Reverse the pointer, from forward to backward
    current.next = prev;
    prev = current;

    // Move the pointer to the next node
    current = next;
  }
  return prev as ListNode | null;
}
