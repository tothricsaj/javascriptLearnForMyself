class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.next = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    traverse() {
        let current = this.head
        while(current) {
            console.log(current)
            current = current.next
        }
    }
}

let list = new SinglyLinkedList

console.log(list.push('hello'))
console.log(list.push('world'))