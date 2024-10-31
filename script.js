function turnBlue() {
    this.classList.toggle("blue");
}

const container = document.querySelector(".todo-div");
const input = document.querySelector(".todo-list");
const button = document.querySelector(".btn-list");
const ul = document.querySelector(".ul-list");

function addItem() {
    const text = input.value.trim();
    if (text) {
        const li = document.createElement("li");
        li.textContent = text;
        li.classList.add("todo-text");
        ul.appendChild(li);
        input.value = ""; 
    }
}

button.addEventListener("click", addItem);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});