const textInput = document.getElementById(".name-input");
const output = document.getElementById(".name-output");

textInput.addEventListener("input", (event) => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue || "Anonymous";
});