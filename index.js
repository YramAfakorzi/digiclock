const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotmenuBtn.addEventListener("click", ()=> {
    dotMenu.classList.toggle("active");
});


document.addEventListener("click", (e)=> {
    if(e.target.id !== "active-menu"){
        dotMenu.classList.toggle("active");
    } 
});


const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", ()=> {
    formatSwitchBtn.classList.toggle("active");

    let formatValue = formatSwitchBtn.getAttribute("data-format");

    if (formatValue === "12"){
        formatSwitchBtn.setAttribute("data-format", "24");
    }
    else{
        formatSwitchBtn.setAttribute("data-format", "12");
    }


   
});


const Hour = document.getElementById("hours");
const Minute = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
const Ampm = document.getElementById("ampms");

function updateClock(){
    let date = new Date();
    var h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "Am";

   
    //let hr = h;
    if (h > 11){
       //h -=12;
        ampm="Pm"
    }
    
    let formatValue = formatSwitchBtn.getAttribute("data-format");

    if(formatValue === "12"){
       h-=12;
    }

    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;

    Hour.innerHTML = h;
    Minute.innerHTML = m;
    Seconds.innerText = s;
    Ampm.innerText = ampm
    setTimeout(()=>updateClock(), 1000);
}

updateClock();


const Month = document.getElementById("months");
const Day = document.getElementById("days");
const Daynumber = document.getElementById("daynumbers");
const Year = document.getElementById("years");

function updateCalender(){
    let date = new Date();
    let mo = date.toLocaleString("default",{month: "short"});
    let d = date.getDate();
    let y = date.getFullYear();
    let dn= date.toLocaleString("default", {"weekday": "long"});

     d = d < 10? "0" + d: d;

    Month.innerHTML = mo;
    Day.innerHTML = d;
    Daynumber.innerText = dn;
    Year.innerHTML = y;
    setTimeout(()=>updateCalender(), 1000);
}

updateCalender();











