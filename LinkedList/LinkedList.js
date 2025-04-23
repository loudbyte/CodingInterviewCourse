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
        var current = this.head;
        var previuos = null;
        for(var i = 0; i < this.length; i++) {
            if(i > this.length) {
                return;
            }
            if(index === 0) {
                this.prepend(value);
                return;
            }
            if(i === index) {
                var newNode = {
                    value: value,
                    next: null
                }
                newNode.next = current;
                previuos.next = newNode;
                this.length = this.length + 1;  
                return;        
            } else {
                previuos = current;
                current = current.next;
            }
        }

    };

}

let myLL = new LinkedList(10);
myLL.append(5);
myLL.append(3);
myLL.prepend(1);
myLL.insert(4, 99);
console.log(myLL.printList());
console.log(myLL.length);