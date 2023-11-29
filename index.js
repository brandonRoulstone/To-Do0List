const TodoInput = document.getElementById("display");
const addBtn = document.getElementById("addTodos");
const sortTodos = document.getElementById("sortTodos");
let taskStorage = document.getElementById("taskRoot");
let date = new Date();

// const storage = JSON.stringify(myProducts);

// localStorage.setItem("testJson", storage);

// // Retrieving the products from localStorage
// const products = JSON.parse(localStorage.getItem("testJson"));

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
    let newitem= newFilteredArr.push(inputValues);

    for(let x of inputValues){
        x.name = newValue.value;
        x.createdDate.getDay();
        x.completed = false;
    }
//Returns undef for now
    inputValues.map(settedItem => {
        taskStorage.innerHTML = `
        
        `
    });
    console.log(newitem)
}

addBtn.addEventListener("click", addToDo);


