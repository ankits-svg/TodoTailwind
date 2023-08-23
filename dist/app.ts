interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  const tasks: Task[] = [];
  
  function addTask(text: string) {
    const newTask: Task = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    tasks.push(newTask);
    renderTasks();
  }
  
  function toggleTaskCompletion(id: number) {
    const task = tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      renderTasks();
    }
  }
  
  function deleteTask(id: number) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1);
      renderTasks();
    }
  }
  
  function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
  
    tasks.forEach(task => {
      const listItem = document.createElement("li");
      listItem.textContent = task.text;
      listItem.className = task.completed ? "completed" : "";
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleTaskCompletion(task.id));
      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteTask(task.id));
  
      listItem.appendChild(checkbox);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
    });
  }
  
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", () => {
    const taskInput = document.getElementById("task-input") as HTMLInputElement;
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });
  
  // Initial render
  renderTasks();
  