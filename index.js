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
        completed: Boolean
    }
];

const userStorage = JSON.stringify(inputValues);

localStorage.setItem("TodoKey", (userStorage));

const parsedData = JSON.parse(localStorage.getItem("TodoKey"));

console.log(parsedData);


// let newFilteredArr = [];


function addToDo(newValue){
    // let newitem= newFilteredArr.push(parsedData);

    for(let x of inputValues){
        console.log(x);
        x.name = newValue;
        x.createdDate.getDay();
        x.completed = false;
    }
    //Returns task
    inputValues.map(i => {
        console.log(i);
        taskStorage.innerHTML += `
        <div class="tab">
        <input type="checkbox" id="checked"/>
        <h4 class="li-name" id="todoTxt">${i.name}</h4>
        <button class="btn-remove">x</button>
        </div>
        `;
    });

    let txt = document.getElementById("todoTxt");

    let checkbox = document.getElementById("checked");

    // Checks out todo item   
    checkbox.addEventListener("click", (e) => {
        
        txt.style.textDecoration = "line-through";

        for (let z of inputValues){
            z.completed = true;

            if(z.completed !== true){
                
                z.completed = false;

                txt.style.textDecoration = "none";

                console.log(z.completed);

            } else if (z.completed === true) {

                console.log("is completed : " + z.completed);
                
                checkbox.addEventListener("click", () => {

                    txt.style.textDecoration = "none";

                    z.completed = false;

                    console.log("is removed from checked list");

               });

            }
        }
    });
}

// let removebtn = document.getElementById("btn-remove");

// removebtn.addEventListener("click", () => {
//     inputValues.filter(item => item.name !== item.name)
// })

addBtn.addEventListener("click", () => addToDo(TodoInput.value));


