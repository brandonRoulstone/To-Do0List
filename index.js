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
    console.log(newItem)
      
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

            <p for="${checkboxId}" class="checkbox-label" id="checkTxt">${item.name}</p>

            <button data-id="${item.id}" class="btn-remove">Delete</button>

            <div class="checkStatus"></div>

        </div>

        `;
    });

    let txt = document.getElementById("checkTxt");


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
        // "change" fires completion value to true
        checkbox.addEventListener("change", () => {
            //initializes completed value to true

            inputValues[index].completed = checkbox.checked;

            alert("checked : true");

            updateLocalStorage();

            renderTasks();
        });
    });
}

addBtn.addEventListener("click", () => {
    
    if (TodoInput.value !== "") {

        addToDo(TodoInput.value);

        TodoInput.value = "";
    }
});

// Initial rendering of tasks
renderTasks();