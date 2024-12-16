const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");
const deleteButton = document.querySelector("delete-button");
let allTodos = [];
getTodos();
function getTodos() {
  todoListUL.innerHTML = "";
  allTodos.forEach((E, I) => {
    let todoItem = creatElement(E, I);
    todoListUL.append(todoItem);
  });
}
function creatElement(todoT, todoI) {
  let todoLI = document.createElement("li");
  let todoID = "todo-" + todoI;
  todoLI.className = "todo";
  todoLI.innerHTML = `  
            <input type="checkbox" id="${todoID}" />
            <label class="custom-checkbox" for="${todoID}">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="transparent"
              >
                <path
                  d="m421-276 297-297-83-84-214 214-102-102-83 84 185 185Zm59 230q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Zm0-126q130 0 219-89t89-219q0-130-89-219t-219-89q-130 0-219 89t-89 219q0 130 89 219t219 89Zm0-308Z"
                />
              </svg>
            </label>
            <lebel for="${todoID}" class="todo-text">
             ${todoT.name}
            </lebel>
            <button  onclick = "Deteletet(${todoT.id})" class="delete-button">
              <svg
                fill="var( --secondary-color)"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00ffc4"
              >
                <path
                  d="M269-86q-53 0-89.5-36.5T143-212v-497H80v-126h257v-63h284v63h259v126h-63v497q0 53-36.5 89.5T691-86H269Zm422-623H269v497h422v-497ZM342-281h103v-360H342v360Zm173 0h103v-360H515v360ZM269-709v497-497Z"
                />
            </svg> </button>`;
  return todoLI;
}
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});
function addTodo() {
  let todoText = todoInput.value.trim();

  let obj = allTodos.at(-1);

  if (todoText.length > 0 && todoInput.value != "") {
    allTodos.push({ name: todoText, id: obj == undefined ? 1 : obj.id + 1 });
    todoInput.value = "";
    getTodos();
  } else {
    alert("Writ anything please");
  }
}
function Deteletet(idx) {
  allTodos = allTodos.filter((E) => {
    return E.id != idx;
  });
  getTodos();
}
