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

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
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

    insert(index, val) {
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)

        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        newNode.next = prevNode.next
        prevNode.next = newNode

        this.length++
        return true
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        if(index === this.length - 1) return this.pop()
        if(index === 0) return this.shift()

        let prevNode = this.get(index-1)
        let removed = prevNode.next

        prevNode.next = removed.next

        this.length--

        return removed
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node

        let next,
            prev = null

        for(let i=0; i<this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return this
    }
}

let list = new SinglyLinkedList

list.push(1)
list.push(2)
list.push(3)
list.push(5)

list.traverse()
console.log('-------------------------------------')

list.reverse()

list.traverse()