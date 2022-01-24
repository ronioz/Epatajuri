const ul = document.querySelector(".con .mainUl");

var i = 0;
var j = 0;

let database = [];
let text = localStorage.getItem("databaseList");
if ( localStorage.length !== 0 ) {
    let obj = JSON.parse(text);
    let length = obj.length;
    for ( j = 0; j < length; j++ ) {
        database.push(obj[j]);
        ul.innerHTML += j + 1 + ". " + obj[j].date + "<br>";
    }
}

i = j;

const addData = (ev) =>{
    if (i === 0) {
        document.getElementById("ttP").style.display = "none";
    }
    if (i === 10) {
        return;
    }
    const finished = (error) =>{
        console.error(error)
        return;
    }
    ev.preventDefault();
    let data = {
        date : document.getElementById("mainInput").value,
    }
    database.push(data);
    localStorage.setItem("databaseList" , JSON.stringify(database));
    i++;
    ul.innerHTML += i + ". " + document.getElementById("mainInput").value + "<br>";
    if(i == 10){
        document.getElementById("ttP").style.display = "block";
    }
}

function TTP () {
    database = [];
    localStorage.clear();
    i = 0;
    ul.innerHTML = " ";
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn").addEventListener('click',addData);
});