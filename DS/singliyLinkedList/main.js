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

    shift() {
        if(!this.head) return undefined

        let currentValue = this.head
        this.head = currentValue.next

        this.length--

        if(this.length === 0) this.tail = null

        return currentValue
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
            console.log(current.val)
            current = current.next
        }
    }
}

let list = new SinglyLinkedList

list.push('hello')
list.push('world')
list.push('!')

list.traverse()