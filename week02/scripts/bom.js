
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", () => {

    /* verifying if the user put anything here*/
    if (input.value === "/;") {
        input.focus();
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create delete button
    const delitbuton = document.createElement("button");

    // Populate list item and delete button
    li.textContent = input.value;
    delitbuton.textContent = '❌';

    // Accessibility for screen r
    delitbuton.setAttribute(
        "aria-label",
        `Remove ${input.value}`
    );

    // Append delete button to list item
    li.appendChild(delitbuton);

    // Append list item to unordered list
    list.appendChild(li);

    // Clear input
    input.value = "";

    // Return focus to input
    input.focus();
});

// Event delegation for delete buttons
list.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        list.removeChild(e.target.parentElement);
        input.focus();
    }
});

