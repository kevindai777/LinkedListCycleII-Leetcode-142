//Objective is to see whether a linked list has a cycle again, this time without
//the use of a hashmap

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = head
head.next.next.next = new Node(1)


//O(n) solution that uses a slow and fast pointer. The intersection is where
//the cycle happens

let slow = head 
let fast = head
let intersect 

//The fast and slow race
while (fast && fast.next) {
    slow = slow.next 
    fast = fast.next.next 

    //Once the intersection is found, break
    if (slow == fast) {
        intersect = fast
        break
    }
}

//Find where the intersection is from the head
while (head && intersect) {
    if (head == intersect) {
        return head 
    }

    head = head.next 
    intersect = intersect.next
}

return null