let $ = document;
const userInput = $.getElementById("input");
const addBtn = $.getElementById("add");
const tasks = $.querySelector(".tasks");
const important = $.querySelector(".important");
const plusBtn = $.getElementById("plus-icon");
const mobileInputShow = $.getElementById("mobile-input-show");
const mobileInput = $.getElementById("input-mobile-mode");
const mobileAddBtn = $.getElementById("add-mobile-mode");

userInput.focus();

function enterHandler(event){
    if(event.keyCode === 13){
        addTodo();
    }
}

function addTodo(event){
    tasks.children[1].style.display = "none";
    tasks.insertAdjacentHTML("beforeend",`<div class="todo">
                    <div>
                        <i class='bx bx-star' ></i>
                        <p class="todo-p">${userInput.value}</p>
                    </div>
                    <div>
                        <i class='bx bx-check-circle' ></i>
                        <i class='bx bxs-trash-alt'></i>
                    </div>
                </div>`)
    userInput.value = "";  
    hasTodoInImportant();
    hasTodoInTasks();  
}

function plusHandler(event){
    plusBtn.style.display = "none";
    mobileInputShow.style.display = "flex";
    // addTodo(event);
    mobileAddBtn.addEventListener("click",event=>{
        tasks.children[1].style.display = "none";
        tasks.insertAdjacentHTML("beforeend",`<div class="todo">
                        <div>
                            <i class='bx bx-star' ></i>
                            <p class="todo-p">${mobileInput.value}</p>
                        </div>
                        <div>
                            <i class='bx bx-check-circle' ></i>
                            <i class='bx bxs-trash-alt'></i>
                        </div>
                    </div>`)
        mobileInput.value = ""; 

        hasTodoInImportant();
        hasTodoInTasks();  
    });
    // changTodoStatus(event);
    // plusBtn.style.display = "block";
    // mobileInputShow.style.display = "none"; 
}

function changTodoStatus(event){
    starStatus(event);
    checkStatus(event);
    trashStatus(event);
    hasTodoInImportant();
    hasTodoInTasks();
}

function starStatus(event){
    if(event.target.className ==="bx bx-star"){
        event.target.parentElement.parentElement.remove();
        // important.children[1].style.display ="none" ;
        important.insertAdjacentHTML("beforeend",`<div class="todo">
                    <div>
                        <i class='bx bxs-star' ></i>
                        <p class="todo-p">${event.target.nextElementSibling.innerText}</p>
                    </div>
                    <div>
                        <i class='bx bx-check-circle' ></i>
                        <i class='bx bxs-trash-alt'></i>
                    </div>
                </div>`)
    }else if(event.target.className ==="bx bxs-star"){
        event.target.parentElement.parentElement.remove();
        tasks.insertAdjacentHTML("beforeend",`<div class="todo">
                    <div>
                        <i class='bx bx-star' ></i>
                        <p class="todo-p">${event.target.nextElementSibling.innerText}</p>
                    </div>
                    <div>
                        <i class='bx bx-check-circle' ></i>
                        <i class='bx bxs-trash-alt'></i>
                    </div>
                </div>`)
    }
}

function checkStatus(event){
    if(event.target.className === "bx bx-check-circle"){
        event.target.className = "bx bxs-check-circle";
        event.target.parentElement.parentElement.className += " check-todo";
    }else if(event.target.className === "bx bxs-check-circle"){
        event.target.className = "bx bx-check-circle";
        event.target.parentElement.parentElement.className = "todo";
    }
}

function trashStatus(event){
    if(event.target.className === "bx bxs-trash-alt"){
        event.target.parentElement.parentElement.remove();
    }
}

function hasTodoInImportant(){
    if(important.children[2]){
        important.children[1].style.display = "none";
    }else{
        important.children[1].style.display = "block";
    }
}

function hasTodoInTasks(){
    if(tasks.children[2]){
        tasks.children[1].style.display= "none";
    }else{
        tasks.children[1].style.display="block";
    }
}


addBtn.addEventListener("click",addTodo);
tasks.addEventListener("click",changTodoStatus);
important.addEventListener("click",changTodoStatus);
plusBtn.addEventListener("click",plusHandler);

document.body.addEventListener("keydown",enterHandler);


