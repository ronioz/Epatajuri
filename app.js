const ul = document.querySelector(".con .mainUl");

var cnt = 0;

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
    fs.writeFile('database.json',JSON.stringify(database),finished);
    i++;
    if(i == 10){
        localStorage.clear();
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn").addEventListener('click',addData);
});