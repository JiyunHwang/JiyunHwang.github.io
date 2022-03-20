const todoListCon = document.querySelector('#todoListCon');
const todoInputCon = document.querySelector('#todoInputCon');
const todoItemsCon = document.querySelector('#todoItemsCon');

function addTodoItem(){
    const todoItem = todoInputCon.querySelector('input[name="new_item"]').value;
    todoInputCon.querySelector('input[name="new_item"]').value = '';
    const createdItem = createTodoItem();
    createdItem.querySelector('.item_name').innerText = todoItem;
    todoItemsCon.appendChild(createdItem);
    saveTodoItems();
}

function deleteTodoItem(e){
    const clickedBtn = e.target;
    const targetItem = clickedBtn.parentElement;
    targetItem.remove();
    saveTodoItems();
}

function createTodoItem(){
    const todoItem = document.createElement('div');
    const todoCheck = document.createElement('input');
    const todoName = document.createElement('div');
    const todoDeleteBtn = document.createElement('button');
    
    todoItem.classList.add('todoItem');
    todoCheck.setAttribute('type', 'checkbox');
    todoName.classList.add('item_name')
    todoDeleteBtn.classList.add('delete_item');
    todoItem.appendChild(todoCheck);
    todoItem.appendChild(todoName);
    todoItem.appendChild(todoDeleteBtn);

    todoDeleteBtn.addEventListener("click", deleteTodoItem);

    return todoItem;
}

function setTodoItems(){
    const todoItems = localStorage.getItem('todoLists');
    const todoArr = todoItems.split(',');

    for(let i=0; i<todoArr.length; i++){
        const createdItem = createTodoItem();
        createdItem.querySelector('.item_name').innerText = todoArr[i];
        todoItemsCon.appendChild(createdItem);
    }
}

function saveTodoItems(){
    const todoItems = todoItemsCon.getElementsByClassName('todoItem');
    let todoArr = [];
    for( let i=0; i<todoItems.length; i++ ){
        var todoText = todoItems[i].querySelector('.item_name').innerText;
        todoArr.push(todoText);
    }
    localStorage.setItem('todoLists', todoArr.join(','));
}

if( localStorage.getItem('todoLists') ){
    setTodoItems();
}

todoInputCon.querySelector('button').addEventListener('click', addTodoItem);