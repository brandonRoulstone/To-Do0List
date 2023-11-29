const TodoInput = document.getElementById("display");
const addBtn = document.getElementById("addTodos");
const sortTodos = document.getElementById("sortTodos");
let taskStorage = document.getElementById("taskRoot");
let date = new Date();


const inputValues = [
    {
        id: 1,
        name: TodoInput.value,
        createdDate: date,
        completed: false
    }
];

const userStorage = JSON.stringify(inputValues);

localStorage.setItem("TodoKey", (userStorage));

const parsedData = JSON.parse(localStorage.getItem("TodoKey"));

console.log(parsedData);


let newFilteredArr = [];


function addToDo(newValue){
    let newitem= newFilteredArr.push(parsedData);

    for(let x of inputValues){
        console.log(x)
        x.name = newValue;
        x.createdDate.getDay();
        x.completed = false;
    }
    //Returns undef for now
    inputValues.map(i => {
        console.log(i);
        taskStorage.innerHTML = `
        <div class="tab">
        <input type="checkbox" />
        <h4 class="li-name">${i.name}</h4>
        <button class="btn-remove">x</button>
        </div>
        `;
    });

    console.log(newitem);
}

let removebtn = document.getElementById("btn-remove");


addBtn.addEventListener("click", () => addToDo(TodoInput.value));


