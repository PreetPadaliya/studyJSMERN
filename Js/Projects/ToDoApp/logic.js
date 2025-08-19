const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Please enter a task");
        return;
    }
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText; 
        span.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
    

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Del";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}





// const addBtn = document.getElementById("addBtn");
// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", addTask);

// function addTask() {
//   const taskText = taskInput.value.trim();
//   if (taskText === "") {
//     alert("Please enter a task!");
//     return;
//   }

//   // Create a new list item
//   const li = document.createElement("li");

//   // Task text
//   const span = document.createElement("span");
//   span.textContent = taskText;

//   // Toggle "completed" when clicked
//   span.addEventListener("click", () => {
//     li.classList.toggle("completed");
//   });

//   // Delete button
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "X";
//   deleteBtn.classList.add("delete-btn");
//   deleteBtn.addEventListener("click", () => {
//     taskList.removeChild(li);
//   });

//   li.appendChild(span);
//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   // Clear input
//   taskInput.value = "";
// }
