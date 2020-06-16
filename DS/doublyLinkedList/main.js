class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)

        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
        return this

    }

    pop() {
        if(!this.head) return undefined
        let poppedNode = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
        }

        this.length--
        return poppedNode
    }
}

let dll = new DoublyLinkedList()

console.log(dll.push(3))

dll.push(4)
dll.push(5)

console.log(dll)
console.log(dll.pop().val)
console.log(dll)