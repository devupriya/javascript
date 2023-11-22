const todoarray = [];

function addtodo() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    todoarray.push(name);
    console.log(todoarray)
}


for (let i = 0; i < todoarray.length; i++) {
    console.log(todoarray[i])
}

document.querySelector(".js-todo-list").innerHTML = todoarray