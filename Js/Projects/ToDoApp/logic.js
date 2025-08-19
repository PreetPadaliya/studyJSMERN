// const addBtn = document.getElementById("addBtn");
// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", addTask);

// function addTask(){
//     const taskText = taskInput.value.trim();
//     if(taskText === ""){
//         alert("Please enter a task");
//         return;
//     }
//         const li = document.createElement("li");
//         const span = document.createElement("span");
//         span.textContent = taskText; 
//         span.addEventListener("click", () => {
//             li.classList.toggle("completed");
//         });

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Del";
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.addEventListener("click", () => {
//         li.remove();
//     });

//     li.appendChild(span);
//     li.appendChild(deleteBtn);
//     taskList.appendChild(li);

//     taskInput.value = "";
// }

const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load tasks when page refreshes
window.addEventListener("load", loadTasks);

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Del";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Save to localStorage
  saveTasks();

  taskInput.value = "";
}

// Save all tasks to localStorage
function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    // remove "Del" text from li
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Del";
    deleteBtn.addEventListener("click", () => {
      li.remove();
      saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}
