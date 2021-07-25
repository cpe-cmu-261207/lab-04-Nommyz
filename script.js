/* Your code here */
let todo = { todoList: [], finishList: [] }

const enterTodoList = (ev) => {
  if (ev.key === "Enter") addTodoList();
}

const loadFromStorage = () => {
  if (localStorage.todo) {
    todo = JSON.parse(localStorage.todo)
  }
  document.getElementById("todoList").innerHTML = ""
  document.getElementById("finishList").innerHTML = ""
  let lastTodoList
  let lastFinishList
  for (let x in todo.todoList) {
    lastTodoList = loadTodoList(todo.todoList[x], x)
  }
  for (let x in todo.finishList) {
    lastFinishList = loadFinishList(todo.finishList[x])
  }
  return { lastFinishList, lastTodoList }
}

const saveToStorage = () => {
  localStorage.todo = JSON.stringify(todo)
}

const addTodoList = () => {
  const input = document.querySelector("input")
  if (input.value === "") {
    alert("Task cannot be empty")
    return
  }
  todo.todoList.push(input.value)
  input.value = ""
  loadTodoList(todo.todoList[todo.todoList.length - 1], todo.todoList.length - 1)
  saveToStorage()
  const temp = loadFromStorage()
  temp.lastTodoList.classList.add()

  temp.lastTodoList.classList.remove()

}
const clearlist = () => {
  localStorage.clear()
  location.reload()
}

const loadTodoList = (input, index) => {
  const todoList = document.createElement("div")
  const title = document.createElement("div")
  const p = document.createElement("p")
  const button = document.createElement("div")
  const donebtn = document.createElement("button")
  const deletebtn = document.createElement("button")
  todoList.classList.add("flex")
  todoList.classList.add("space-x-2")
  todoList.classList.add("justify-between")
  todoList.classList.add("h-auto")
  todoList.classList.add("px-4")
  todoList.classList.add("py-2")
  todoList.classList.add("duration-500")
  todoList.classList.add("border-opacity-0")
  todoList.classList.add("border-2")
  todoList.classList.add("rounded-lg")
  todoList.classList.add("border-black")
  todoList.classList.add("bg-white")
  todoList.classList.add("relative")
  todoList.classList.add("z-0")
  todoList.classList.add("shadow-md")
  title.classList.add("self-center")
  title.classList.add("w-4/5")
  p.classList.add("text-xl")
  p.classList.add("truncate")
  title.classList.add("h-auto")
  button.classList.add("flex")
  button.classList.add("space-x-2")
  button.classList.add("self-end")
  donebtn.classList.add("text-white")
  donebtn.classList.add("bg-green-600")
  donebtn.classList.add("rounded-xl")
  donebtn.classList.add("p-2")
  donebtn.classList.add("invisible")
  donebtn.classList.add("opacity-0")
  donebtn.classList.add("shadow-md")
  deletebtn.classList.add("text-white")
  deletebtn.classList.add("bg-red-600")
  deletebtn.classList.add("rounded-xl")
  deletebtn.classList.add("p-2")
  deletebtn.classList.add("invisible")
  deletebtn.classList.add("shadow-md")
  donebtn.innerHTML = "Done"
  deletebtn.innerHTML = "Delete"
  donebtn.addEventListener("click", () => {

    todoList.remove()
    todo.todoList.splice(index, 1)
    todo.finishList.push(input)
    saveToStorage()
    const temp = loadFromStorage()
    temp.lastFinishList.classList.remove()
  })
  deletebtn.addEventListener("click", () => {
      todoList.remove()
      todo.todoList.splice(index, 1)
      saveToStorage()
      loadFromStorage()
    })
  todoList.addEventListener("mouseenter", () => {

    donebtn.classList.replace("invisible", "visible")
    deletebtn.classList.replace("invisible", "visible")
    donebtn.classList.remove("opacity-0")
    deletebtn.classList.remove("opacity-0")
    todoList.classList.add("sm:scale-110")
    todoList.classList.remove("border-opacity-0")
    p.classList.remove("truncate")
    p.classList.add("break-all")
  })
  todoList.addEventListener("mouseleave", () => {

    donebtn.classList.replace("visible", "invisible")
    deletebtn.classList.replace("visible", "invisible")
    donebtn.classList.add("opacity-0")
    deletebtn.classList.add("opacity-0")
    todoList.classList.remove("sm:scale-110")
    todoList.classList.add("border-opacity-0")
    p.classList.add("truncate")
    p.classList.remove("break-all")
  })
  p.innerHTML = input
  title.append(p)
  button.append(donebtn)
  button.append(deletebtn)
  todoList.append(title)
  todoList.append(button)
  document.getElementById("todoList").prepend(todoList)
  return todoList
}

const loadFinishList = (input) => {
  const finishList = document.getElementById("finishList")
  const newItem = document.createElement("div")
  const title = document.createElement("div")
  newItem.classList.add("flex")
  newItem.classList.add("justify-between")
  newItem.classList.add("px-4")
  newItem.classList.add("py-2")
  newItem.classList.add("border-opacity-0")
  newItem.classList.add("border-2")
  newItem.classList.add("rounded-lg")
  newItem.classList.add("border-red-500")
  newItem.classList.add("bg-white")
  newItem.classList.add("relative")
  newItem.classList.add("z-0")
  newItem.classList.add("shadow-md")
  title.classList.add("w-full")
  title.classList.add("text-xl")
  title.classList.add("self-center")
  title.classList.add("truncate")
  title.classList.add("break-all")


  title.innerHTML = input
  title.style.textDecoration = "line-through"
  newItem.append(title)
  finishList.prepend(newItem)
  return newItem
}
loadFromStorage()