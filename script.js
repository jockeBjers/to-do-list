const buttons = document.querySelectorAll('.clicky');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle("blue");
    });
});

const container = document.querySelector(".todo-div");
const input = document.querySelector(".todo-list");
const button = document.querySelector(".btn-list");
const ul = document.querySelector(".ul-list");

function addItem() {
    const text = input.value;
    if (text == '') {
        alert("No empty messages!")
    } else {
        const li = document.createElement("li");
        li.textContent = text;
        li.classList.add("todo-text");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn")
        deleteBtn.textContent = "X";

           deleteBtn.addEventListener("click", () => {
            li.remove();
           }) 

        li.appendChild(deleteBtn);
        ul.appendChild(li);
        input.value = '';
    }
}

/* add item event */
button.addEventListener("click", addItem);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});

/* Reset all */
const resetBtn = document.querySelector(".remove-btn");

resetBtn.addEventListener("click", () => {
    input.value = '';
    while (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
});
