document.addEventListener("keydown", (event) => {

    let codeDisplay = document.getElementById("codeDisplay");

    codeDisplay.innerHTML = `${event.code}`;
})