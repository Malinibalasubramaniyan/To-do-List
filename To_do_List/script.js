document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add");
    const inputField = document.getElementById("input-field");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function() {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            inputField.value = "";  // Clear the input field
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = taskText;

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        const removeButton = document.createElement("button");
        removeButton.className = "btn btn-danger";
        removeButton.innerHTML = '<i class="bi bi-trash"></i>'; 
        removeButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }
});



