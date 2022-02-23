const todos =[
    {title:"Todo 1",description : "make a game wit js"},
    {title:"Todo 2",description : "developed an application by react"},
    {title:"Todo 3",description : "exactly,you have to leran redux"},
    
]

let todoListEl = document.getElementById("todolist")


function todoList(){
    setTimeout(()=>{
        let todoItems = ""
        todos.forEach(item=>{
            todoItems += `
            <li>
            <b>${item.title}</b>
            <p>${item.description}</p>
            </li>`

        })
        todoListEl.innerHTML = todoItems;

    },1000)
}

function newTodo(todo, callback) {
    setTimeout(() => {
        todos.push(todo)
        callback();

    },2000)

}

newTodo({title:"todo 4", description:"learn Djongo for backend"},todoList)

