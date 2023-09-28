const todolist=[{
    name:'',
    dueDate:''
}];
function addTodo() {
    if(todolist=='')
    {
       exit(0); 
    }
    else
    {
    const inputElement=document.querySelector('.js-name-input');
    const name = inputElement.value;
    const inputElementDueDate= document.querySelector('.js-due-date-input');
    const dueDate= inputElementDueDate.value;
    todolist.push({
        name: name,
        dueDate: dueDate
      });
      inputElement.value='';
    console.log(todolist.name);
    renderTodoList();
    }
}

function renderTodoList(){
    let todolistHTML='';

    for(let i=0; i< todolist.length; i++)
    {
        const todoo = todolist[i];
        const name=todoo.name;
        const duedate=todoo.dueDate;
        const html = `<div class="js-name">${name}</div><div class="js-duedate">${duedate}</div> <button onclick="todolist.splice(${i},1);renderTodoList();">Delete</button>`;
        todolistHTML += html;
    }
        document.querySelector('.js-todo-list').innerHTML=todolistHTML;
}