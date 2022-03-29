document.addEventListener("keydown", (event) => {

    let codeDisplay = document.getElementById("codeDisplay");
    let keyDisplay = document.getElementById("keyDisplay");
    let whichDisplay = document.getElementById("whichDisplay");

    codeDisplay.innerHTML = `${event.code}`;
    keyDisplay.innerHTML = `${event.key}`;
    whichDisplay.innerHTML = `${event.which}`;
    
})