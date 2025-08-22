/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
//Task 1: Filter Incomplete Tasks                                       //First time attempting arrow functions in an assignment - I might have overused them
const incompleteTasks = todos.filter(todo => todo.completed === false); //Use arrow function to check if completed is false and return a new array with only incomplete tasks
console.log("Incomplete Tasks:", incompleteTasks);       // Test output to verify results
//Task 2: Sort Tasks by Priority
const sortedByPriority = todos.sort((a, b) => a.priority - b.priority); //compare priority values (a.priority - b.priority) and return a negative number if a should come before b
console.log("Sorted by Priority:", sortedByPriority);     // Test output to verify results
//Task 3: Mark All Tasks as Completed
const allCompleted = todos.map(todo => ({    //Use map to create a new array of modified objects
    ...todo,                                 //Spread operator copies all existing properties
    completed: true                          //Override the completed property to true
})); 
console.log("All Tasks Completed:", allCompleted);      // Test output to verify results
//Task 4: Combine Filters
const sortedIncompleteTasks = todos.filter(todo => todo.completed === false).sort((a, b) => a.priority - b.priority); //Filter incomplete tasks, then sort by priority
console.log("Sorted Incomplete Tasks:", sortedIncompleteTasks);    // Test output to verify results
//This was my first time using method chaining within a function