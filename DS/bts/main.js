class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)

        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {

                if(value === current.value) return undefined

                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    contains(value) {
        if(this.root === null) return false
        
        let current = this.root,
            found = false

        while(current && !found) {
            if(value < current.value) {
                current = current.left
            } else if(value > current.value) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    find(value) {
        if(this.root === null) return null
        
        let current = this.root,
            found = false

        while(current && !found) {
            if(value < current.value) {
                current = current.left
            } else if(value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        return current
    }

    BFS() {
        let node = this.root,
            data = [],
            queue = []
        
        queue.push(node)

        while(queue.length) {
            node = queue.shift()
            data.push(node.value)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }

        return data
    }

    DFSPreOrdert() {
        var data = []
        function traversal(node) {
            data.push(node.value)
            if(node.left) traversal(node.left)
            if(node.right) traversal(node.right)
        }

        traversal(this.root)
        return data


    }

    DFSPostOrdert() {
        var data = []
        function traversal(node) {
            if(node.left) traversal(node.left)
            if(node.right) traversal(node.right)
            data.push(node.value)
        }
        traversal(this.root)
        return data
    }
}

            //      33
            //    32  42
            //   9      45
            //  2

// [33, 32, 42, 9, 45, 2] BFS
// [33, 32, 9,2, 42, 45]

let tree = new BST()

tree.insert(33)
tree.insert(42)
tree.insert(32)
tree.insert(9)
tree.insert(2)
tree.insert(45)

console.log(tree)


console.log(tree.contains(20))
console.log(tree.find(9))

console.log(tree.BFS())

console.log(tree.DFSPostOrdert())