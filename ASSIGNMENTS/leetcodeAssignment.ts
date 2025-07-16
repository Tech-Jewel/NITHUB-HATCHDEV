
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val ?? 0;
		this.left = left ?? null;
		this.right = right ?? null;
	}
}

// Leetcode 100 - Same tree
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	// Case 1: Both nodes are null
	if (!p && !q) return true;

	// Case 2: One of them is null, or values don't match
	if (!p || !q || p.val !== q.val) return false;

	// Case 3: Recur on left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    

    // Leetcode 543 - Diameter of a binary tree
function diameterOfBinaryTree(root: TreeNode | null): number {
	let diameter = 0;

	function depth(node: TreeNode | null): number {
		if (!node) return 0;

		const left = depth(node.left);
		const right = depth(node.right);

		// Update the diameter if the path through this node is longer
		diameter = Math.max(diameter, left + right);

		// Return height of subtree rooted at this node
		return Math.max(left, right) + 1;
	}

	depth(root);
	return diameter;
}




