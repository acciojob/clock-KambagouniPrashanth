//your JS code here. If required.
//your JS code here. If required.
const p=document.getElementById("timer")

let today=new Date();
// const arr=[]
// arr.push(today.getDate())
let day=today.getDate();
let month=today.getMonth();
let year=today.getFullYear()
let hour=today.getHours();
let minute=today.getMinutes()
let second=today.getSeconds();


p.innerText=day+"/"+month+"/"+year+" ,"+hour+":"+minute+":"+second;



