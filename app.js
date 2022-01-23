const ul = document.querySelector(".con .mainUl");

var i = 0;

let database = [];

const addData = (ev) =>{
    const finished = (error) =>{
        console.error(error)
        return;
    }

    ev.preventDefault();
    let data = {
        date : document.getElementById("mainInput").value,
    }
    database.push(data);
    localStorage.setItem('databaseList' , JSON.stringify(database));
    i++;
    ul.innerHTML += i + ". " + document.getElementById("mainInput").value + "<br>";
    if(i == 10){
        database = [];
        localStorage.clear();
        i = 0;
        ul.innerHTML = "";
    }
}

function myFunc = (ev) =>{
    
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("bttn").addEventListener('click',myFunc);
})

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn").addEventListener('click',addData);
});