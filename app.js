const ul = document.querySelector(".con .mainUl");

var cnt = 0;

let database = [];

const addData = (ev) =>{
    ev.preventDefault();
    let data = {
        date : document.getElementById("mainInput").value,
    }
    database.push(data);
    localStorage.setItem('databaseList',JSON.stringify(database));
    i++;
}
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn").addEventListener('click',addData);
});