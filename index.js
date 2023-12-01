// const TodoInput = document.getElementById("display");
// const addBtn = document.getElementById("addTodos");
// const sortTodos = document.getElementById("sortTodos");
// let taskStorage = document.getElementById("taskRoot");
// let date = new Date();

// function generateUniqueId() {
//     let newId = 1;
//     if (inputValues.length >= 0) {
//         newId = inputValues[inputValues.length - 1].id + 1;
//     }
//     return newId;
// }

// let newList = [];


// const inputValues = [
//     {
//         id: 1,
//         name: TodoInput.value,
//         createdDate: date,
//         completed: Boolean
//     }
// ];


// const userStorage = JSON.stringify(inputValues);

// localStorage.setItem("TodoKey", (userStorage));

// const parsedData = JSON.parse(localStorage.getItem("TodoKey"));

// console.log(parsedData);


// // let newFilteredArr = [];


// function addToDo(newValue){
//     // let newitem= newFilteredArr.push(parsedData);

//     for(let x of inputValues){
//         x.id = x.id >= 0 ? x.id + 1 : console.log("err"); 
//         x.name = newValue;
//         x.createdDate.getDay();
//         x.completed = false;
//         console.log(x);

//     }
//     //Returns task
//     inputValues.map((i, rIndex) => {
//         // console.log(i);
//         taskStorage.innerHTML += `
//         <div class="tab">
//         <input type="checkbox" id="checked"/>
//         <h4 class="li-name" id="todoTxt">${i.name}</h4>
//         <button data-value="${() => filtereIndex()}" id="btnRemove" class="btn-remove">x</button>
//         </div>
//         `;
//     });

//     let txt = document.getElementById("todoTxt");

//     let checkbox = document.getElementById("checked");

//     // Checks out todo item   
//     checkbox.addEventListener("click", (e) => {
        
//         txt.style.textDecoration = "line-through";

//         for (let z of inputValues){
//             z.completed = true;

//             if(z.completed !== true){
                
//                 z.completed = false;

//                 txt.style.textDecoration = "none";

//                 console.log(z.completed);

//             } else if (z.completed === true) {

//                 console.log("is completed : " + z.completed);
                
//                 checkbox.addEventListener("click", () => {

//                     txt.style.textDecoration = "none";

//                     z.completed = false;

//                     console.log("is removed from checked list");

//                });

//             }
//         }
//     });

//     const removebtn = document.querySelector("[data-value]");

//     function filtereIndex(){

//         removebtn.addEventListener("click", () => {

//             // inputValues.filter(w => w.name !== w.name);

//             inputValues.filter(rIndex => {

//                 rIndex.id !== rIndex.id;
                
//                 taskStorage.innerHTML = `<div ${filtereIndex()}></div>`;

//             });

//             console.log(inputValues.filter(rIndex => {rIndex.id !== rIndex.id}))
//         });
//     }
//     filtereIndex();
// }

// addBtn.addEventListener("click", () => addToDo(TodoInput.value));



const TodoInput = document.getElementById("display");
const addBtn = document.getElementById("addTodos");
const taskStorage = document.getElementById("taskRoot");
let date = new Date();

let inputValues = JSON.parse(localStorage.getItem("TodoKey")) || [];

function generateUniqueId() {

    let newId = 1;

    if (inputValues.length > 0) {

        newId = inputValues[inputValues.length - 1].id + 1;

    }
    return newId;
}

function updateLocalStorage() {
    localStorage.setItem("TodoKey", JSON.stringify(inputValues));
}

function addToDo(newValue) {
    const newItem = {
        id: generateUniqueId(),
        name: newValue,
        createdDate: date,
        completed: false
    };

    inputValues.push(newItem);
      
    updateLocalStorage();

    renderTasks();
}

function renderTasks() {

    taskStorage.innerHTML = "";

    inputValues.forEach((item, index) => {

        const checkedStatus = item.completed ? "checked" : "";

        const checkboxId = `checked-${item.id}`; // Unique ID for each checkbox

        taskStorage.innerHTML += `

        <div class="tab">

            <input type="checkbox" id="${checkboxId}" ${checkedStatus}/>

            <label for="${checkboxId}" class="checkbox-label">${item.name}</label>

            <button data-id="${item.id}" class="btn-remove">x</button>

        </div>

        `;
    });

    // Add event listeners after rendering
    const rmvBtn = document.querySelectorAll(".btn-remove");
    
    rmvBtn.forEach((btn) => {

        btn.addEventListener("click", (e) => {

            const itemId = parseInt(e.target.getAttribute("data-id"));

            inputValues = inputValues.filter((item) => item.id !== itemId);

            updateLocalStorage();

            renderTasks();
        });
    });

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((checkbox, index) => {

        checkbox.addEventListener("change", () => {

            inputValues[index].completed = checkbox.checked;

            updateLocalStorage();

            renderTasks();
        });
    });
}

addBtn.addEventListener("click", () => {
    
    if (TodoInput.value !== "") {

        addToDo(TodoInput.value);

        TodoInput.value = ""; // Clear input field after adding
    }
});

// Initial rendering of tasks
renderTasks();