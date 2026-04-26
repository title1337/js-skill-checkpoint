// Question #2: User Task List

const userTaskList = [
  { id: 1, task: 'Buy groceries' },
  { id: 2, task: 'Finish homework' },
  { id: 3, task: 'Call mom' },
  { id: 4, task: 'Wash dishes' },
];

userTaskList.push({ id: 5, task: 'Walk the dog' }); // Add a new task to the list
userTaskList[3].task = 'Go to the gym'; // Update the task description
userTaskList.pop;
console.log(userTaskList[3]);
