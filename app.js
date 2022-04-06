// this should do it
document.addEventListener("keydown", (event) => {
    document.getElementById("keyNumber").innerHTML = `${event.keyCode}`;
    document.getElementById("codeDisplay").innerHTML = `${event.code}`;
    document.getElementById("keyDisplay").innerHTML = `${event.key}`;
    document.getElementById("whichDisplay").innerHTML = `${event.which}`;
});