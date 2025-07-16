var LNode = /** @class */ (function () {
    function LNode(value) {
        this.value = value;
        this.next = null;
    }
    return LNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(initialValue) {
        var newNode = new LNode(initialValue);
        this.head = newNode;
    }
    return LinkedList;
}());
var SinglyLinkedListNode = /** @class */ (function () {
    function SinglyLinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    return SinglyLinkedListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList(value) {
        this.head = new SinglyLinkedListNode(value);
        this.tail = this.head;
        this.length = 0;
    }
    SinglyLinkedList.prototype.append = function (value) {
        var newNode = new SinglyLinkedListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };
    SinglyLinkedList.prototype.prepend = function (value) {
        var newHeadNode = new SinglyLinkedListNode(value);
        newHeadNode.next = this.head;
        this.head = newHeadNode;
    };
    return SinglyLinkedList;
}());
var ourSinglyLinkedList = new SinglyLinkedList(30);
// ourSinglyLinkedList.append(40)
ourSinglyLinkedList.prepend(20);
console.log(ourSinglyLinkedList);
