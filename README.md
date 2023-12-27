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
| Graphs                 | Data is stored in nodes with connection with other nodes in one to many way. Graphs are superset of Trees. And Trees are superset of Linked Lists. Graphs are good for managing relationship between data. Cons: Scaling is hard.                                                                                                     |                                                                       |
| Hash Tables or Objects | Stores items each with a key                                                                                                                                                                                                                                                                                                          | lookup: O(1), search: O(1), insert: O(1), delete: O(1)                |

## Algorithms

| Algos                | Usage                                                                      | Good For | Data Structures Used       |
| -------------------- | -------------------------------------------------------------------------- | -------- | -------------------------- |
| Sorting              |                                                                            |          | Arrays, Trees              |
| Dynamic Programming  |                                                                            |          | Hash Tables                |
| Breadth First Search |                                                                            |          | Graphs, Trees              |
| Depth First Search   |                                                                            |          | Graphs, Trees              |
| Recursion            | More than an algorithm, this is a concept when a function refers to itself |          | Trees, Dynamic programming |

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

### Algorithms

#### Recursion

- Must have a conditional return on when to terminate execution
- Must return the function statement, so the return value can be bubbled to outside
- Example:
  ```js
  let someCounter = 0;
  function recursionFun() {
    if (someCounter > 10) {
      return "Answer Value";
    }
    return recursionFun();
  }
  ```
- Recursion provides a clean code compared to iteration, however in many cases the time complexity is `O(2^n)` which is terrible in time complexity, so be considerate of it since an iteration mostly would cost only
- Recursion adds extra stack hence the space complexity increases
- Recursion is more useful with Dynamic programming, or traversing through tree structure where the loop call is unknown
- Recursion helps in Divide and Conquer strategy

#### Sorting

##### Bubble Sort

- One of the most basic soring form, that iteratively keeps pushing the largest value to one end
- It is one of the most low efficiency sorting algorithms
- **Time Complexity** : `O(n^2)`

##### Selection Sort

- Picks the absolute minmum value by comparing through the items, then chooses the next minmum
- **Time Complexity** : `O(n^2)`

##### Insertion Sort

- Useful when it is almost sorted or small dataset. In this case which is Best case the time complexity is `O(n)`
- **Time Complexity** : `O(n^2)` (Average case)

##### Merge Sort

- Divides the elements by 2 with every iteration, until only two nodes left to compare. Then compare at the unit level and then merge them back to form a reverse of a binary tree
- Merge Sort turns out to the one of the most efficient algorithms for sorting
- **Time Complexity** : `O(n log n)`

##### Quick Sort

- Another type of advanced merge that is as good as Merge Sort. It starts with a random pivot point from the input and started instead of diving from the middle
- **Time Complexity** : `O(n log n)`
- Quick sort has a better space complexity compared to that of Merge sort
- Quick sort is fastest of all choices in most cases, however it's worst case can be `O(n^2)`. This is dependent on choosing pivot point

#### Sort Preferences:

| Sort Type      | Prefer When                                                                                                                      | Time Complexity (Best / Average / Worst) |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Insert Sort    | Small Dataset OR Data is nearly sorted                                                                                           | O(n) / O(n^2) / O(n^2)                   |
| Bubble Sort    | No where                                                                                                                         | O(n) / O(n^2) / O(n^2)                   |
| Selection Sort | No where                                                                                                                         | O(n^2)                                   |
| Merge Sort     | Most preferred if memory is not a concern, fast, consistent                                                                      | O(n log n)                               |
| Quick Sort     | Most popular, since it has advantage on space complexity compared to Merge Sort, however the worst time complexity can be O(n^2) | O(n log n) / O(n log n) / O(n^2)         |

## References

- Big O Cheatsheet - https://www.bigocheatsheet.com/
- Data Structures and Algorithms - Free Tutorial - https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/
- JS Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples
- Visualization of Data Structure - https://visualgo.net
- AVL Tree Animation - https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
- Black-Red Tree Animation - https://www.cs.usfca.edu/~galles/visualization/RedB
- Example of commercial graph DB - neo4j
- Visualization of Sorting algorithms - https://www.toptal.com/developers/sorting-algorithms
- Info about Heap sort - https://brilliant.org/wiki/heap-sort/
