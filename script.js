document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="todo-text">${todoText}</span>
        <div class="todo-actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
      todoList.appendChild(li);
      todoInput.value = "";

      const deleteBtn = li.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

      const editBtn = li.querySelector(".edit-btn");
      editBtn.addEventListener("click", () => {
        const todoTextSpan = li.querySelector(".todo-text");
        const currentText = todoTextSpan.textContent;
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.classList.add("edit-input");

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("save-btn");

        li.innerHTML = "";
        li.appendChild(input);
        li.appendChild(saveBtn);

        input.focus();

        saveBtn.addEventListener("click", () => {
          const newText = input.value.trim();
          if (newText !== "") {
            todoTextSpan.textContent = newText;
            li.innerHTML = `
              <span class="todo-text">${newText}</span>
              <div class="todo-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
              </div>
            `;
            addEventListeners(li);
          }
        });
      });

      const todoTextSpan = li.querySelector(".todo-text");
      todoTextSpan.addEventListener("dblclick", () => {
        todoTextSpan.classList.toggle("completed");
      });
    }
  }

  function addEventListeners(li) {
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    const editBtn = li.querySelector(".edit-btn");
    editBtn.addEventListener("click", () => {
      // Edit functionality will be here (same as above)
    });

    const todoTextSpan = li.querySelector(".todo-text");
    todoTextSpan.addEventListener("dblclick", () => {
      todoTextSpan.classList.toggle("completed");
    });
  }

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
  });

  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  });
});
