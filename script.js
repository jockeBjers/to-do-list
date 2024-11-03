const buttons = document.querySelectorAll('.clicky');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle("blue");
    });
});

const input = document.querySelector(".summary-list");
const additionalInput = document.querySelector(".details-list")
const button = document.querySelector(".btn-list");
const ul = document.querySelector(".ul-list");

function addItem() {
    const mainText = input.value;
    const additionalText = additionalInput.value;

    if (mainText) {
        const li = document.createElement("li");

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn")
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", () => {
            li.remove();
        })

        if (additionalText) {
            const details = document.createElement("details");
            const summary = document.createElement("summary");

            summary.textContent = mainText;

            details.appendChild(summary);

            const extraContent = document.createElement("div");
            extraContent.textContent = additionalText;
            extraContent.classList.add("detail-text")
            details.appendChild(extraContent);
            li.appendChild(details);
            summary.appendChild(deleteBtn);

        } else {
            li.textContent = mainText;
            li.classList.add("li-text");
            li.appendChild(deleteBtn);
        }

        ul.appendChild(li);
        input.value = "";
        additionalInput.value = "";
    }
}    

button.addEventListener("click", addItem);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addItem();
    }
});

/* Reset all */
const resetBtn = document.querySelector(".remove-btn");

resetBtn.addEventListener("click", () => {
    while (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
});
