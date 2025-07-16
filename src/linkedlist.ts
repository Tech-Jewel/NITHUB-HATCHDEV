class LNode {
	value: number;
	next: LNode | null;

	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	head: LNode | null;

	constructor(initialValue: number) {
		const newNode = new LNode(initialValue);
		this.head = newNode;
	}
}

class SinglyLinkedListNode {
	value: number;
	next: null | SinglyLinkedListNode;

	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	head: SinglyLinkedListNode;
	tail: SinglyLinkedListNode;
	private length: number;

	constructor(value: number) {
		this.head = new SinglyLinkedListNode(value);
        this.tail = this.head;
        this.length = 0;
        
    }
    
    append(value: number) {
        const newNode = new SinglyLinkedListNode(value);
        this.tail.next = newNode;

        this.tail = newNode;
        this.length++;
    }

    prepend(value: number) {
        const newHeadNode = new SinglyLinkedListNode(value);

        newHeadNode.next = this.head;

        this.head = newHeadNode;
        this.length++;
    }

    transverseToIndex(index: number) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next
        }
    }


    insert(value: number) {
        // create a new node
        // Transverse to index
        
    }


}

const ourSinglyLinkedList = new SinglyLinkedList(30);

// ourSinglyLinkedList.append(40)

ourSinglyLinkedList.prepend(20);

console.log(ourSinglyLinkedList);