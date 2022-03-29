document.addEventListener("keydown", (event) => {

    let codeDisplay = document.getElementById("codeDisplay");
    let keyDisplay = document.getElementById("keyDisplay");

    codeDisplay.innerHTML = `${event.code}`;
    keyDisplay.innerHTML = `${event.key}`;
})