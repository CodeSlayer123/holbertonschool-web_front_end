function changeMode(size, weight, transform, background, color){
    return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
    }
}

function main() {
    let spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = () =>changeMode(12, "normal", "lowercase", "white", "black");
    let btn1, btn2, btn3;
    let body = document.querySelector("body")
    
    document.body.innerHTML += "<p>Welcome Holberton!!</p>";

    btn1 = document.createElement("BUTTON")
    btn1.innerText = "Spooky";
    btn1.addEventListener('click', spooky())
    body.appendChild(btn1);

    btn2 = document.createElement("BUTTON")
    btn2.innerText = "Dark mode";
    btn2.addEventListener('click', darkMode())
    body.appendChild(btn2);

    btn3 = document.createElement("BUTTON")
    btn3.innerText = "Scream mode";
    btn3.addEventListener('click', screamMode())
    body.appendChild(btn3);


}

main();