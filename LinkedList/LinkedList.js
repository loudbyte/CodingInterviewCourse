class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    };
    
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length = this.length + 1;
    };

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head,
            prev: null
        };
        this.head.prev = newNode;
        this.head = newNode;
        this.length = this.length + 1;
    };

    printList() {
        const array = [];
        var current = this.head;
        while(current !== null) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    };

    printListBack() {
        const array = [];
        var current = this.tail;
        while(current !== null) {
            array.push(current.value);
            current = current.prev;
        }
        return array;
    };

    insert(index, value) {
        if(index >= this.length) {
            this.append(value);
            return;
        }
        if(index === 0) {
            this.prepend(value);
            return;
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        holdingPointer.prev = newNode;
        newNode.prev = leader;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

    };

    traverseToIndex(index) {
        //check parameter
        let counter = 0;
        var currentNode = this.head;
        while(counter !== index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    remove(index) {
        if(index === 0) {
            const newHead = this.head.next;
            newHead.prev = null;
            this.head = newHead;
            this.length--;
            return; 
        }
        if(index >= this.length) {
            return;
        }
        const leaderNode = this.traverseToIndex(index - 1);
        const toRemove = leaderNode.next;
        const nextNode = toRemove.next;
        nextNode.prev = leaderNode;
        leaderNode.next = nextNode;
        this.length--;
    }

}

let myLL = new LinkedList(10);
myLL.append(5);
myLL.append(3);
myLL.prepend(1);
myLL.insert(3, 99);
myLL.remove(1);
console.log(myLL.printList());
console.log(myLL.printListBack());
console.log(myLL.length);