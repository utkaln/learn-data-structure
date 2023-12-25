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

### Data Structures Key Attributes

| DS                     | Behavior                                                                                                                                                                                                                                                                                                                              | Big O                                                                 | Good For                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------- |
| Arrays or List         | Stores items sequentially with auto assigned index. Hence must traverse sequentially                                                                                                                                                                                                                                                  | lookup: O(1), push: O(1), insert: O(n), delete: O(n)                  |
| Stack                  | LIFO - Can always access the last item. No random access. Less operations compared to hashmap, linkedlist                                                                                                                                                                                                                             | lookup: O(n), pop: O(1), push: O(1), peek: O(1)                       |
| Queues                 | FIFO - Can always access the first item, No random access                                                                                                                                                                                                                                                                             | lookup: O(n), enqueue: O(1), dequeue: O(1), peek: O(1)                |
| Linked Lists           | Stores items sequentially, with one item linking to another, hence this has best of both Arrays and Hashmap. Bi directional linked list is useful for reverse search, since it stores the previous element in addition to next                                                                                                        | prepend: O(1), append: O(1), lookup: O(n), insert: O(n), delete: O(n) |
| Trees                  | Type of linked list, that has one root and can have one or more nodes afterwards. Binary Search Tree (BST), AVL, Black-Red are different types of other implementation of Binary Trees. Binary Heap is a tree structure that is another variant where it always keeps either the highest number to the upper part and lower to bottom | lookup: O(log n), insert: O(log n), delete: O(log n)                  | Binary Heaps are good for Priority Queues |
| Tries                  | Allows multiple children node in contrast with binary which only allows two. Helps in dictionary or auto complete search. Due to prefixes it saves on space hence has better advantage in space complexity                                                                                                                            | lookup O(length of word)                                              |
| Graphs                 | Data is stored in nodes with connection with other nodes in one to many way. Graphs are superset of Trees. And Trees are superset of Linked Lists                                                                                                                                                                                     |                                                                       |
| Hash Tables or Objects | Stores items each with a key                                                                                                                                                                                                                                                                                                          | lookup: O(1), search: O(1), insert: O(1), delete: O(1)                |

## Algorithms

| Algos                | Usage | Good For |
| -------------------- | ----- | -------- |
| Sorting              |       |          |
| Dynamic Programming  |       |          |
| Breadth First Search |       |          |
| Depth First Search   |       |          |
| Recursion            |       |          |

## Details of Data Structures

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
- **Key Attributes** : Better Search than O(n), Ordered data, Flexible size. Cons: There is no O(1) operation

##### AVL Tree

- Type of Binary tree that self balances
- Self balancing helps in faster look up, since it reduces further hierarchy
- However this takes O(n) extra space

##### Red-Black Trees

- Type of Binary Tree that self balances, similar to that of AVL tree
- Key difference is it performs better for add, remove tasks compared to AVL trees

##### Binary Heaps

- Type of Binary tree, where the highest value always stays at the root and follows a descending order of values down the nodes
- Node allocation first starts left then to right
- Better lookup
- Used for Priority queue and finding maximum or minimum from the data
- **Key Attributes** : Better Search than O(n), Priority ordered data, Flexible Size, Fast Insert. Cons: slow lookup

#### Important Graph Structures

- **Directed**:
- **Undirected**:
- **Weighted**: Find faster paths
- **Unweighted**:
- **Cyclic**:
- **Uncyclic**:

## References

- Big O Cheatsheet - https://www.bigocheatsheet.com/
- Data Structures and Algorithms - Free Tutorial - https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/
- JS Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples
- AVL Tree Animation - https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
- Black-Red Tree Animation - https://www.cs.usfca.edu/~galles/visualization/RedB
