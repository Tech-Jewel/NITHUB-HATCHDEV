/*
function sum(n: number): number {
    if (n < 1) {
        return 0;
    } 

        return n + sum(n - 1);

}

console.log(sum(-20));


function factorial(x: number): number{
    if (x <= 1) {
        return 1;
    }

    return x * factorial(x - 1);
}
console.log(factorial(5));

function fibonacci(y: number): number {
    if (y < 1) {
        return 0;
    } else if (y === 1) {
        return 1;
    }

    return fibonacci(y - 1) + fibonacci(y - 2);
}
console.log(fibonacci(5));



// BINARY SEARCH TREES
class BSTNode {
	val: number
	left: BSTNode | null
    right: BSTNode | null
    
    constructor( val: number,
        left: BSTNode | null,
        right: BSTNode | null
    ) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class BST{
    root: BSTNode | null

    constructor(root: BSTNode | null) {
        this.root = root
    }

    addNode(val: number) {
        let head = this.root
        const node = new BSTNode(val)

        
    }


    search() {
        let head = this.root;
        if (head === null) return null;
        while (head) {
            if (head.val > val) {
                head = head.right
            } else if(head.val < val) {
                head = head.left
            }
        }
    }
}

search

*/

/*
class TreeNode <T>{
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null,
    ) {
        this.val = val;
        this.left = left;
        this.right = right;

    }

    
}

*/