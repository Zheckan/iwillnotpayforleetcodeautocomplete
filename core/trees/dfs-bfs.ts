class Tree {
  current: number;
  left: Tree | null;
  right: Tree | null;

  constructor(val?: number, left?: Tree | null, right?: Tree | null) {
    this.current = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function dfs(tree: Tree | null, value: number) {
  if (tree === null) return;
  if (tree.current === value) return tree;
  if (tree.current < value) return dfs(tree.right!, value);
  if (tree.current > value) return dfs(tree.left!, value);
  return null;
}

function bfs(tree: Tree | null, value: number) {
  const queue: (Tree | null)[] = [tree];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === null || current === undefined) continue;
    if (current.current === value) return current;
    if (current.current < value) queue.push(current.right);
    if (current.current > value) queue.push(current.left);
  }
  return null;
}

// Test cases
const tree = new Tree(
  5,
  new Tree(3, new Tree(2), new Tree(4)),
  new Tree(7, new Tree(6), new Tree(8))
);
console.log(bfs(tree, 5));
console.log(bfs(tree, 3));
console.log(bfs(tree, 7));

console.log(dfs(tree, 5));
console.log(dfs(tree, 3));
console.log(dfs(tree, 7));

// Will not find number
console.log(bfs(tree, 9));
console.log(dfs(tree, 9));
