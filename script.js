document.addEventListener("DOMContentLoaded", loadTasks);

// Event listener for the add task button
document.querySelector("#push").onclick = function () {
  let taskInput = document.querySelector("#newTask input");
  let taskValue = taskInput.value.trim();

  // Validate input
  if (taskValue.length == 0) {
    alert("Please provide input");
  } else {
    addTask(taskValue);
    saveTasks();
  }
  taskInput.value = ""; // Clear input field after adding a task
};

// Function to add a new task to the list
function addTask(taskValue) {
  let taskContainer = document.querySelector("#tasks");
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.innerHTML = `
    <span id="taskname">${taskValue}</span>
    <button class="delete">
      <i class="fa-solid fa-trash-can"></i>
    </button>
  `;

  taskContainer.appendChild(taskDiv);
  
  // Add event listeners for delete and complete actions
  taskDiv.querySelector(".delete").onclick = function () {
    this.parentNode.remove();
    saveTasks(); // Update local storage after deletion
  };

  taskDiv.onclick = function () {
    this.classList.toggle("completed");
    saveTasks(); // Update local storage when task is marked as completed
  };
}

// Function to save tasks to local storage
function saveTasks() {
  let tasks = [];
  document.querySelectorAll(".task").forEach(task => {
    tasks.push({
      text: task.querySelector("#taskname").innerText,
      completed: task.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage on page load
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) taskDiv.classList.add("completed");
    taskDiv.innerHTML = `
      <span id="taskname">${task.text}</span>
      <button class="delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;
    document.querySelector("#tasks").appendChild(taskDiv);

    // Add event listeners for delete and complete actions
    taskDiv.querySelector(".delete").onclick = function () {
      this.parentNode.remove();
      saveTasks(); // Update local storage after deletion
    };

    taskDiv.onclick = function () {
      this.classList.toggle("completed");
      saveTasks(); // Update local storage when task is marked as completed
    };
  });
}