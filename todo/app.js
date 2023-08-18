// variables 

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('add-task-container');
const inputTask = document.getElementById('input-task');

// event listener for add button

addTask.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML= '<i class="fa fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let delButton = document.createElement("button");
    delButton.innerHTML= '<i class="fa fa-trash-alt"></i>';
    delButton.classList.add('delTask');
    task.appendChild(delButton);

    if(inputTask.value === ""){
        alert('Please enter a task');
    }else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";   

    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration = "line-through";
    })

    delButton.addEventListener('click', function(e){
        let target = e.target;

        target.parentElement.remove();
    })
})