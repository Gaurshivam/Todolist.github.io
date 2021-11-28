const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
// Event
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',daleteCheck);


//function
function addTodo(event) {
  //Prevent form Sumbitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //button mark
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // to append list
  todoList.appendChild(todoDiv);
  //clear value
  todoInput.value ="";
}

function daleteCheck(e){
  const item = e.target;
  //Delete
  if(item.classList[0]==="trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }
  // check
  if(item.classList[0]==="complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  
}

