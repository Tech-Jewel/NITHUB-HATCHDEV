const newNode: Node<T> = new Node<T>(data);

class Node<T> {
    value: T;
    next: T | null = null;

    constructor(value: T) {
        this.value = value;

    }

}

class Queue<T>{
    front: T | null = null;
    rear: T | null = null;

    

}