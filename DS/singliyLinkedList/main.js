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

    unshift(val) {
        let newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
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

    get(index) {

        if(index < 0 || index >= this.length) return null

        let counter = 0
        let current = this.head

        while(counter !== index) {
            current = current.next
            counter++
        }

        return current
    }

    set(index, val) {
        let foundNode = this.get(index)

        if(foundNode) {
            foundNode.val = val
            return true
        }

        return false
    }
}

let list = new SinglyLinkedList

list.push('hello')
list.push('world')
list.push('!')
list.push('$')
list.push('<3')

console.log(list.get(3).val)