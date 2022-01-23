const ul = document.querySelector(".con .mainUl");

let i = 1;

let database = [];

function bruh() {
    var inputValue = document.getElementById("mainInput").value;
    var li = document.createElement("LI");
    var text1 = document.createTextNode(i + ". " + inputValue);
    li.appendChild(text1);
    ul.appendChild(li);
    i++;
}

console.log("ZANGISANGISANGIAGNAI");