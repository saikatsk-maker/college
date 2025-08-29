const now = new Date();
const formattedDate = now.toDateString(); 
const dateElement = document.getElementById("currentDate");
dateElement.textContent = formattedDate;


let time = document.getElementById("current-time");
setInterval(()=>{
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
  },1000)