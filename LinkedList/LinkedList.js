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
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    };
    
    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length = this.length + 1;
    };

    prepend(value) {
        const newNode = {
            value: value,
            next: this.head
        };
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

    insert(index, value) {
        if(index >= this.length) {
            this.append(value);
        }
        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

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
            this.head = newHead;
            this.length--;
            return; 
        }
        if(index >= this.length) {
            return;
        }
        const leaderNode = this.traverseToIndex(index - 1)
        const toRemove = leaderNode.next;
        leaderNode.next = toRemove.next;
        this.length--;
    }

}

let myLL = new LinkedList(10);
myLL.append(5);
myLL.append(3);
myLL.prepend(1);
myLL.insert(3, 99);
myLL.remove(3);
console.log(myLL.printList());
console.log(myLL.length);