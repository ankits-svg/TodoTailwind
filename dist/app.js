var tasks = [];
function addTask(text) {
    var newTask = {
        id: tasks.length + 1,
        text: text,
        completed: false,
    };
    tasks.push(newTask);
    renderTasks();
}
function toggleTaskCompletion(id) {
    var task = tasks.find(function (task) { return task.id === id; });
    if (task) {
        task.completed = !task.completed;
        renderTasks();
    }
}
function deleteTask(id) {
    var taskIndex = tasks.findIndex(function (task) { return task.id === id; });
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}
function renderTasks() {
    var taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    tasks.forEach(function (task) {
        var listItem = document.createElement("li");
        listItem.textContent = task.text;
        listItem.className = task.completed ? "completed" : "";
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function () { return toggleTaskCompletion(task.id); });
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () { return deleteTask(task.id); });
        listItem.appendChild(checkbox);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", function () {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});
// Initial render
renderTasks();
