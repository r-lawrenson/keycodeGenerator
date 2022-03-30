document.addEventListener("keydown", (event) => {

    let keyNumber = document.getElementById("keyNumber");
    let codeDisplay = document.getElementById("codeDisplay");
    let keyDisplay = document.getElementById("keyDisplay");
    let whichDisplay = document.getElementById("whichDisplay");

    keyNumber.innerHTML = `${event.keyCode}`;
    codeDisplay.innerHTML = `${event.code}`;
    keyDisplay.innerHTML = `${event.key}`;
    whichDisplay.innerHTML = `${event.which}`;

})