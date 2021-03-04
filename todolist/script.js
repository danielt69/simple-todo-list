(() => {
    // window.setInterval(() => {
    //     location.reload();
    // }, 5000)

    document.querySelector(".addNew").addEventListener("click", (e) => {
        if (isInputValid()) {
            addNewTask();
        }
    });
    document
        .querySelector(".list .new .inputWrapper input")
        .addEventListener("keydown", (e) => {
            if (e.key === "Enter" && isInputValid()) {
                addNewTask();
            }
        });

    let isInputValid = () => {
        return document.querySelector(".list .new .inputWrapper input").value;
    }

    let addNewTask = () => {
        let taskName = document.querySelector(".list .new .inputWrapper input").value;
        let listHtml = `<li>
                    <div>
                        <input type="checkbox" name="done">
                        <span class="name">${taskName}</span>
                        <button type="button" class="delete">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </li>`;
        document.querySelector('.list ol').insertAdjacentHTML('beforeend', listHtml);
        // add checkbox event listeners
        let lastInput = Array.from(
            document.querySelectorAll(".list ol input")
        ).pop();
        lastInput.addEventListener("change", (e) => {
            updateTodoState();
        });
        // add delete event listener
        let lastDeleteButton = Array.from(
            document.querySelectorAll(".list ol button")
        ).pop();
        lastDeleteButton.addEventListener("click", (e) => {
            e.target.closest('li').remove()
            updateTodoState();
        });
        // reset input value
        document.querySelector(".list .new .inputWrapper input").value = "";

        updateTodoState();
    };

    let updateTodoState = () => {
        let allCheckboxes = document
            .querySelectorAll(".list ol input[type='checkbox']")
            .length.toString();
        let checked = document
            .querySelectorAll(".list ol input[type='checkbox']:checked")
            .length.toString();
        document.querySelector("h2 .doneTasks").textContent = checked;
        document.querySelector("h2 .outOf").textContent = allCheckboxes;
    }

})()
