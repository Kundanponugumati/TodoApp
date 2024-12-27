
let todoApp = {
    tasks: [],
    addTask(task) {
        this.tasks.push({
            text: task,
            completed: false
        });
        this.renderTasks();
    },
    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTasks();
    },
    removeCompletedTask() {
        this.tasks = this.tasks.filter((task) => !task.completed); // reassign filtered tasks
        this.renderTasks();
    },
    renderTasks() {
        let taskList = document.getElementById("taskList");
        taskList.innerHTML = ""; // clear previous tasks

        this.tasks.forEach((task, index) => {
            let li = document.createElement('li'); // declare li
            li.textContent = task.text;
            li.onclick = () => this.toggleTask(index);

            if (task.completed) {
                li.classList.add('completed');
            }

            taskList.appendChild(li);
        });
    }
};

document.getElementById("addTask").onclick = () => {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim(); // Trim spaces for clean input
    if (taskValue) {
        todoApp.addTask(taskValue);
        taskInput.value = ""; // Reset input field
    }
};