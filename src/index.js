document.addEventListener("DOMContentLoaded", () => {
  // Select form and task list
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Listen for form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Get task input value
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Ignore empty input

    // Create task item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => taskItem.remove());

    // Append elements
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
  });
});