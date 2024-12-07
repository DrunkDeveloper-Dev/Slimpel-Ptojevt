// Function to add a new todo item
function addTodo() {
    const input = document.getElementById("todoInput"); // Get the input element
    const list = document.getElementById("todoList"); // Get the todo list

    // Check if the input is not empty
    if (input.value.trim()) {
        const li = document.createElement("li"); // Create a new list item
        li.textContent = input.value; // Set the text of the list item

        // Add a delete button to each item
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            list.removeChild(li); // Remove the list item on click
        };

        li.appendChild(deleteBtn); // Add the delete button to the list item
        list.appendChild(li); // Add the list item to the list

        input.value = ""; // Clear the input field
    } else {
        alert("Please enter a task!"); // Alert if input is empty
    }
}
