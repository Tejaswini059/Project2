// Dummy data for tasks and messages (you should use a server in a real project)
let tasks = [];
let messages = [];

function createTask() {
    const title = document.getElementById("task-title").value;
    const assignee = document.getElementById("task-assignee").value;

    if (title && assignee) {
        tasks.push({ title, assignee });
        document.getElementById("task-title").value = "";
        document.getElementById("task-assignee").value = "";
        displayTasks();
    }
}

function sendMessage() {
    const message = document.getElementById("message-input").value;

    if (message) {
        messages.push(message);
        document.getElementById("message-input").value = "";
        displayMessages();
    }
}

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    
    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.textContent = `Task: ${task.title}, Assignee: ${task.assignee}`;
        taskList.appendChild(listItem);
    });
}

function displayMessages() {
    const messageFeed = document.getElementById("message-feed");
    messageFeed.innerHTML = "";
    
    messages.forEach(message => {
        const messageItem = document.createElement("div");
        messageItem.textContent = message;
        messageFeed.appendChild(messageItem);
    });
}

// Initial display
displayTasks();
displayMessages();
