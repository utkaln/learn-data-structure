## Big O Time Complexity

| Big O Complexity | Recommendation     | Data Type                   |
| ---------------- | ------------------ | --------------------------- |
| O(log n) , O(1)  | Best               |                             |
| O(n)             | Better             | Iterate through a loop once |
| O(n log n)       | Bad                |                             |
| O(n^2)           | Worse (Avoid)      | Loop inside a loop          |
| O(2^n), O(n!)    | Worst (Must Avoid) |                             |

## Time Complexity Vs. Space Complexity

|                | Time Complexity  | Space Complexity |
| -------------- | ---------------- | ---------------- |
| Data Structure | Can be Optimized | Mostly Bad       |
| Algorithms     | Mostly Bad       | Can be Optimized |

### Factors for Space Complexity

- **Heap** : Memory used by variables
- **Stack** : Tracks of all the function calls

### Important Data Structures

| DS                     | Behavior                                                                                                                                                                                                                       | Big O                                                                 | Good For |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | -------- |
| Arrays or List         | Stores items sequentially with auto assigned index. Hence must traverse sequentially                                                                                                                                           | lookup: O(1), push: O(1), insert: O(n), delete: O(n)                  |
| Stack                  | LIFO - Can always access the last item. No random access. Less operations compared to hashmap, linkedlist                                                                                                                      | lookup: O(n), pop: O(1), push: O(1), peek: O(1)                       |
| Queues                 | FIFO - Can always access the first item, No random access                                                                                                                                                                      | lookup: O(n), enqueue: O(1), dequeue: O(1), peek: O(1)                |
| Linked Lists           | Stores items sequentially, with one item linking to another, hence this has best of both Arrays and Hashmap. Bi directional linked list is useful for reverse search, since it stores the previous element in addition to next | prepend: O(1), append: O(1), lookup: O(n), insert: O(n), delete: O(n) |
| Trees                  | Type of linked list, that has one root and can have one or more nodes afterwards                                                                                                                                               | lookup: O(log n), insert: O(log n), delete: O(log n)                  |
| Tries                  |                                                                                                                                                                                                                                |                                                                       |
| Graphs                 |                                                                                                                                                                                                                                |                                                                       |
| Hash Tables or Objects | Stores items each with a key                                                                                                                                                                                                   | lookup: O(1), search: O(1), insert: O(1), delete: O(1)                |

#### Important Tree Structures

##### Binary Tree

- Each node must have 0 or 2 children (subnodes)
- The attributes of a binary tree node is : value | left node | right node
- The key advantage of using Binary tree is that with every layer the nodes doublem so if a search can be done to prevent going to further down, it reduces time complexity
- Binary Search has Big O of O(log n)
- **Perfect Binary Tree** : Has exactly two nodes coming out of each node. With every level doubling in node count compared to previous node. Number of nodes in a level is : `2^L -1`
- **Full Binary Tree** : Has 0 or two nodes as children from each parent node

##### Binary Search Tree (BST)

- Subset of binary tree. Hence it allows a maximum of 2 child nodes
- Additionally the right node has always greater value than the parent node and the left node always has the lower value than the parent node
- One problem with BST implementation is if data keeps adding to one side only, it eventually acts like a linked list. Thus look up becomes traversing through each node. This makes search more like O(n) and not desired O(log n)

### Important Algorithms

| Algos                | Usage | Good For |
| -------------------- | ----- | -------- |
| Sorting              |       |          |
| Dynamic Programming  |       |          |
| Breadth First Search |       |          |
| Depth First Search   |       |          |
| Recursion            |       |          |

## Details of Data Structures

## References

- Big O Cheatsheet - https://www.bigocheatsheet.com/
- Data Structures and Algorithms - Free Tutorial - https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/
- JS Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples
