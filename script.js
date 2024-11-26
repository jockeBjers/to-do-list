
const input = document.querySelector(".summary-list");
const button = document.querySelector(".btn-list");
const ul = document.querySelector(".ul-list");

function addItem() {
    const mainText = input.value;

    if (mainText !== '') {
        const li = document.createElement("li");

        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.textContent = mainText;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "X";

        const additionalInputDiv = document.createElement("div");
        additionalInputDiv.classList.add("additional-input-container");

        const additionalInput = document.createElement("input");
        additionalInput.type = "text";
        additionalInput.placeholder = "Additional info";
        additionalInput.classList.add("detail-input");

        const addDetailBtn = document.createElement("button");
        addDetailBtn.textContent = "+";
        addDetailBtn.classList.add("btn-list");



        additionalInputDiv.appendChild(additionalInput);
        additionalInputDiv.appendChild(addDetailBtn);

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        details.appendChild(summary);
        details.appendChild(additionalInputDiv);

        addDetailBtn.addEventListener("click", () => {
            if (additionalInput.value) {
                const extraDetail = document.createElement("div");
                extraDetail.textContent = additionalInput.value;
                extraDetail.classList.add("detail-text");

                const detailDeleteBtn = document.createElement("button");
                detailDeleteBtn.classList.add("delete-btn");
                detailDeleteBtn.textContent = "X";

                detailDeleteBtn.addEventListener("click", () => {
                    extraDetail.remove();
                });

                extraDetail.appendChild(detailDeleteBtn);
                details.appendChild(extraDetail);

                additionalInput.value = "";
            }
        });

        li.appendChild(details);
        summary.appendChild(deleteBtn);

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

/* Reset all */
const resetBtn = document.querySelector(".remove-btn");

resetBtn.addEventListener("click", () => {
    while (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
});
