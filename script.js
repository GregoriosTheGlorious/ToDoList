const tasks = [];

// FAdd task
function addTask(taskTitle, taskPriority, taskStatus) {
    const task = {
        title: taskTitle,
        priority: taskPriority,
        status: taskStatus,
    };
    tasks.push(task);

    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.className = 'list-group-item';

    const taskText = document.createElement('span');
    taskText.textContent = `${task.title} (Priority: ${task.priority})`;
    if (task.status === 'completed') {
        taskText.style.textDecoration = 'line-through';
    }

    const removeBtn = document.createElement('button');
    removeBtn.className = 'btn btn-danger btn-sm';
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => removeTask(li));

    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn-success btn-sm';
    completeBtn.textContent = 'Mark as Complete';
    completeBtn.addEventListener('click', () => markAsComplete(li, taskText));

    li.appendChild(taskText);
    li.appendChild(removeBtn);
    li.appendChild(completeBtn);

    taskList.appendChild(li);
}

// Remove a task
function removeTask(li) {
    const index = Array.from(li.parentNode.children).indexOf(li);
    tasks.splice(index, 1);
    li.remove();
}

// Mark task as completed
function markAsComplete(li, taskText) {
    const index = Array.from(li.parentNode.children).indexOf(li);
    tasks[index].status = 'completed';
    taskText.style.textDecoration = 'line-through';
}

// Event listener
const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitle = document.getElementById('task-title').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskStatus = document.querySelector('input[name="task-status"]:checked').value;
    addTask(taskTitle, taskPriority, taskStatus);
    taskForm.reset();
});
