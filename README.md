## Big O Time Complexity
| Big O Complexity | Recommendation | Data Type | 
| --- | --- | --- | 
| O(log n) , O(1) | Best | | 
| O(n) | Better | Iterate through a loop once | 
| O(n log n) | Bad | | 
| O(n^2) | Worse (Avoid) | Loop inside a loop | 
| O(2^n), O(n!) | Worst (Must Avoid) | |

## Time Complexity Vs. Space Complexity
| | Time Complexity | Space Complexity | 
| --- | --- | --- |
| Data Structure | Can be Optimized | Mostly Bad | 
| Algorithms | Mostly Bad | Can be Optimized |


### Factors for Space Complexity
- **Heap** : Memory used by variables
- **Stack** : Tracks of all the function calls

### Important Data Structures
| DS | Behavior | Big O | Good For | 
| --- | --- | --- | --- | 
| Arrays or List | Stores items sequentially with auto assigned index. Hence must traverse sequentially | lookup: O(1), push: O(1), insert: O(n), delete: O(n)| 
| Stack | LIFO - Can always access the last item. No random access. Less operations compared to hashmap, linkedlist | lookup: O(n), pop: O(1), push: O(1), peek: O(1) | 
| Queues | FIFO - Can always access the first item, No random access | lookup: O(n), enqueue: O(1), dequeue: O(1), peek: O(1) |
| Linked Lists | Stores items sequentially, with one item linking to another, hence this has best of both Arrays and Hashmap. Bi directional linked list is useful for reverse search, since it stores the previous element in addition to next | prepend: O(1), append: O(1), lookup: O(n), insert: O(n), delete: O(n)|
| Trees | | | 
| Tries | | |
| Graphs | | |
| Hash Tables or Objects | Stores items each with a key | lookup: O(1), search: O(1), insert: O(1), delete: O(1) | 


### Important Algorithms
| Algos | Usage | Good For | 
| --- | --- | --- |
| Sorting | | |
| Dynamic Programming | | | 
| Breadth First Search | | |
| Depth First Search | | |
| Recursion | | |


## Details of Data Structures





## References
- Big O Cheatsheet - https://www.bigocheatsheet.com/
- Data Structures and Algorithms - Free Tutorial - https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/
- JS Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#examples
- 
