var customers;
var prizes;
var hours;
var students;

var isCountingC = false;
var isCountingP = false;
var isCountingH = false;
var isCountingS = false;

let counterc = 1;
let counterp = 1;
let counterh = 1;
let counters = 1;

var bannerGrid = document.querySelector(".banner-grid");

var skillsHeader = document.querySelector(".skills");

const buttonAll = document.querySelector(".all-work");
const buttonDesign = document.querySelector(".design");
const buttonMusic = document.querySelector(".music");
const buttonVideo = document.querySelector(".video");

/* E V E N T - L I S T E N E R S */

buttonAll.addEventListener('click', showAll);
buttonDesign.addEventListener('click',  showDesign);
buttonMusic.addEventListener('click', showMusic);
buttonVideo.addEventListener('click', showVideo);

/* F U N C T I O N S */
const symbolMap = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function postformat(string) {
    return string.replace(/\d/g, (d) => symbolMap[d]).replace(/,/g, "،");
}

function customerCard() {
    counterc++;
    document.querySelector("#number1").innerHTML = postformat(counterc.toString());
    if (counterc === 299) {
        counterc = 0;
        clearInterval(customers);
        isCountingC = false;
    }
}

function prizesCard() {
    counterp++;
    document.querySelector("#number2").innerHTML = postformat(counterp.toString());
    if (counterp === 45) {
        counterp = 0
        clearInterval(prizes);
        isCountingP = false;
    }
}

function hoursCard() {
    counterh++;
    document.querySelector("#number3").innerHTML = postformat(counterh.toString());
    if (counterh === 99) {
        counterh = 0
        clearInterval(hours);
        isCountingH = false;

    }
}

function studentsCard() {
    counters++;
    document.querySelector("#number4").innerHTML = postformat(counters.toString());
    if (counters === 36) {
        counters = 0
        clearInterval(students);
        isCountingS = false;
    }
}

window.onscroll = function () {

    if (bannerGrid.getBoundingClientRect().top <= 0) {
        // document.getElementsByClassName(".navbar").style.backgroundColor = "red";
        const newNavbar = document.getElementById("navbarid");
        newNavbar.classList.add("new-navbar-style");
        // console.log("heyyy");
    }
    if (bannerGrid.getBoundingClientRect().top > 0) {
        const newNavbar = document.getElementById("navbarid");
        newNavbar.classList.remove("new-navbar-style");
    }
    if (skillsHeader.getBoundingClientRect().top <= 500 && skillsHeader.getBoundingClientRect().top >= 400 && isCountingS === false && isCountingH === false && isCountingP === false && isCountingC === false) {
        console.log('asdasd');

        const firstBar = document.getElementById("first")
        firstBar.classList.add("animation-activation-1");
        const secondBar = document.getElementById("second");
        secondBar.classList.add("animation-activation-2");
        const thirdBar = document.getElementById("third");
        thirdBar.classList.add("animation-activation-3");
        const fourthBar = document.getElementById("fourth");
        fourthBar.classList.add("animation-activation-4");

        const fifthBar = document.getElementById("first-2");
        fifthBar.classList.add("animation-activation-1");
        const sixthBar = document.getElementById("second-2");
        sixthBar.classList.add("animation-activation-2");
        const seventhBar = document.getElementById("third-2");
        seventhBar.classList.add("animation-activation-3");
        const eightBar = document.getElementById("fourth-2");
        eightBar.classList.add("animation-activation-4");

        isCountingC = true;
        isCountingH = true;
        isCountingP = true;
        isCountingS = true;

        customers = setInterval(customerCard, 3);
        prizes = setInterval(prizesCard, 40);
        hours = setInterval(hoursCard, 20);
        students = setInterval(studentsCard, 60);
    }
}

var speed = 150;
function typeWriterGenerator(){
    var i = 0;
    return function typeWriter(txt){
        if( i < txt.length){
            document.getElementById("kamalsname").innerHTML+= txt.charAt(i);
            i++;
            setTimeout(()=>typeWriter(txt),speed);
        }
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve()
            }, txt.length * speed + 500)
        })
    }
}

setTimeout(async ()=>{
    while (true){
        await typeWriterGenerator()("کمال");
        document.getElementById("kamalsname").innerHTML = ''
        await typeWriterGenerator()("یک وب دیزاینر");
        document.getElementById("kamalsname").innerHTML = ''
        await typeWriterGenerator()("یک توسعه دهنده وب");
        document.getElementById("kamalsname").innerHTML = ''
        await typeWriterGenerator()("یک لوگو دیزاینر");
        document.getElementById("kamalsname").innerHTML = ''
    }

}, 1000)

function showAll(){
    document.querySelectorAll(".card-p").forEach(e=>(e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e=>{
        if( e.className.includes("card-p")){
            e.style.display = 'block';
        }
    })
    buttonAll.style.backgroundColor = "#5cbe26";
    buttonDesign.style.backgroundColor = "#666666";
    buttonMusic.style.backgroundColor = "#666666";
    buttonVideo.style.backgroundColor = "#666666";

}

function showDesign(){
    document.querySelectorAll(".card-p").forEach(e=>(e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e=>{
        if( e.className.includes("design-card")){
            e.style.display = 'block';
        }
    })
    buttonDesign.style.backgroundColor = "#5cbe26";
    buttonAll.style.backgroundColor = "#666666";
    buttonMusic.style.backgroundColor = "#666666";
    buttonVideo.style.backgroundColor = "#666666";

}

function showVideo(){
    document.querySelectorAll(".card-p").forEach(e=>(e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e=>{
        if( e.className.includes("video-card")){
            e.style.display = 'block';
        }
    })
    buttonVideo.style.backgroundColor = "#5cbe26";
    buttonDesign.style.backgroundColor = "#666666";
    buttonMusic.style.backgroundColor = "#666666";
    buttonAll.style.backgroundColor = "#666666";
}

function showMusic(){
    document.querySelectorAll(".card-p").forEach(e=>(e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e=>{
        if( e.className.includes("music-card")){
            e.style.display = 'block';
        }
    })
    buttonMusic.style.backgroundColor = "#5cbe26";
    buttonDesign.style.backgroundColor = "#666666";
    buttonAll.style.backgroundColor = "#666666";
    buttonVideo.style.backgroundColor = "#666666";

}


