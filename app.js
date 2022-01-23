const ul = document.querySelector(".con .mainUl");


let database = [];

const addData = (ev) =>{
    ev.preventDefault();
    let data = {
        date : document.getElementById("mainInput").value,
    }
    database.push(data);
    document.forms[0].reset();
    localStorage.setItem('databaseList',JSON.stringify(database));
}
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("btn").addEventListener('click',addData);
});