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



// const portfolioList = document.querySelector(".grid-section-portfolio");
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
function kamalJobs(){

}

// function filterPortfolioCards(event) {
//     const portfolioCards = portfolioList.childNodes;
//     //WHAT THE FUCK IS THE PARAMETER THAT I HAVE TO PASS TO IT
//     portfolioCards.forEach(function () {
//         switch (event.target.className) {
//             case "all-work":
//                 break;
//             case "design":
//                 if(portfolioCards[])
//         }
//     }
// }