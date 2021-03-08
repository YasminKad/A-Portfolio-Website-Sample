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

const barsButton = document.querySelector(".bars");

const closeButton = document.querySelector(".close-navbar");

const homeButton = document.querySelector(".i-home");
const aboutButton = document.querySelector(".i-about");
const servicesButton = document.querySelector(".i-services");
const portfolioButton = document.querySelector(".i-portfolio");
const blogButton = document.querySelector(".i-blog");
const contactButton = document.querySelector(".i-contact");

var homeHeader = document.querySelector("#home");
var aboutHeader = document.querySelector("#about");
var servicesHeader = document.querySelector("#services");
var portfolioHeader = document.querySelector("#portfolio");
var blogHeader = document.querySelector("#blog");
var contactHeader = document.querySelector("#contact");

const navbarOnTheRight = document.querySelector(".navbar-full-page");

/* E V E N T - L I S T E N E R S */

buttonAll.addEventListener('click', showAll);
buttonDesign.addEventListener('click', showDesign);
buttonMusic.addEventListener('click', showMusic);
buttonVideo.addEventListener('click', showVideo);

barsButton.addEventListener('click', sideNavbar);

closeButton.addEventListener('click', closeNavbar);

aboutButton.addEventListener('click', changeColorAbout);
homeButton.addEventListener('click', changeColorHome);
portfolioButton.addEventListener('click', changeColorPortfolio);
servicesButton.addEventListener('click', changeColorServices);
blogButton.addEventListener('click', changeColorBlog);
contactButton.addEventListener('click', changeColorContact);

navbarOnTheRight.addEventListener('click', closeNavbar);

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

    if (homeHeader.getBoundingClientRect().top <= 100 && homeHeader.getBoundingClientRect().bottom > 0) {
        changeColorHome();
    }
    if (aboutHeader.getBoundingClientRect().top <= 100 && aboutHeader.getBoundingClientRect().bottom > 0) {
        changeColorAbout();
    }
    if (servicesHeader.getBoundingClientRect().top <= 100 && servicesHeader.getBoundingClientRect().bottom > 0) {
        changeColorServices();
    }
    if (portfolioHeader.getBoundingClientRect().top <= 100 && portfolioHeader.getBoundingClientRect().bottom > 0) {
        changeColorPortfolio();
    }
    if (blogHeader.getBoundingClientRect().top <= 100 && blogHeader.getBoundingClientRect().bottom > 0) {
        changeColorBlog();
    }
    if (contactHeader.getBoundingClientRect().top <= 100 && contactHeader.getBoundingClientRect().bottom > 0) {
        changeColorContact();
    }
    if (bannerGrid.getBoundingClientRect().top <= 0) {
        const newNavbar = document.getElementById("navbarid");
        newNavbar.classList.add("new-navbar-style");
    }
    if (bannerGrid.getBoundingClientRect().top > 0) {
        const newNavbar = document.getElementById("navbarid");
        newNavbar.classList.remove("new-navbar-style");
    }
    if (skillsHeader.getBoundingClientRect().top <= 500 && skillsHeader.getBoundingClientRect().top >= 400 && isCountingS === false && isCountingH === false && isCountingP === false && isCountingC === false) {

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

function typeWriterGenerator() {
    var i = 0;
    return function typeWriter(txt) {
        if (i < txt.length) {
            document.getElementById("kamalsname").innerHTML += txt.charAt(i);
            i++;
            setTimeout(() => typeWriter(txt), speed);
        }
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, txt.length * speed + 500)
        })
    }
}

setTimeout(async () => {
    while (true) {
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

function showAll() {
    document.querySelectorAll(".card-p").forEach(e => (e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e => {
        if (e.className.includes("card-p")) {
            e.style.display = 'block';
        }
    })
    buttonAll.style.backgroundColor = "#5cbe26";
    buttonDesign.style.backgroundColor = "#666666";
    buttonMusic.style.backgroundColor = "#666666";
    buttonVideo.style.backgroundColor = "#666666";

}

function showDesign() {
    document.querySelectorAll(".card-p").forEach(e => (e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e => {
        if (e.className.includes("design-card")) {
            e.style.display = 'block';
        }
    })
    buttonDesign.style.backgroundColor = "#5cbe26";
    buttonAll.style.backgroundColor = "#666666";
    buttonMusic.style.backgroundColor = "#666666";
    buttonVideo.style.backgroundColor = "#666666";

}

function showVideo() {
    document.querySelectorAll(".card-p").forEach(e => (e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e => {
        if (e.className.includes("video-card")) {
            e.style.display = 'block';
        }
    })
    buttonVideo.style.backgroundColor = "#5cbe26";
    buttonDesign.style.backgroundColor = "#666666";
    buttonMusic.style.backgroundColor = "#666666";
    buttonAll.style.backgroundColor = "#666666";
}

function showMusic() {
    document.querySelectorAll(".card-p").forEach(e => (e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e => {
        if (e.className.includes("music-card")) {
            e.style.display = 'block';
        }
    })
    buttonMusic.style.backgroundColor = "#5cbe26";
    buttonDesign.style.backgroundColor = "#666666";
    buttonAll.style.backgroundColor = "#666666";
    buttonVideo.style.backgroundColor = "#666666";

}

function sideNavbar() {
    barsButton.innerHTML = '<i class="fas fa-times"/>';
    const navbarOnTheRight = document.querySelector(".navbar-full-page");
    navbarOnTheRight.style.display = "block";
    const innerNavbar = document.querySelector(".navbar-responsive");
    innerNavbar.classList.add("navbar-width-change");
}

function changeColorAbout() {
    aboutButton.classList.add("go-green");
    servicesButton.classList.remove("go-green")
    portfolioButton.classList.remove("go-green")
    blogButton.classList.remove("go-green")
    contactButton.classList.remove("go-green")
    homeButton.classList.remove("go-green")

}

function changeColorServices() {
    aboutButton.classList.remove("go-green")
    servicesButton.classList.add("go-green");
    portfolioButton.classList.remove("go-green")
    blogButton.classList.remove("go-green")
    contactButton.classList.remove("go-green")
    homeButton.classList.remove("go-green")

}

function changeColorHome() {
    aboutButton.classList.remove("go-green")
    servicesButton.classList.remove("go-green")
    portfolioButton.classList.remove("go-green")
    blogButton.classList.remove("go-green")
    contactButton.classList.remove("go-green")
    homeButton.classList.add("go-green");

}

function changeColorContact() {
    aboutButton.classList.remove("go-green")
    servicesButton.classList.remove("go-green")
    portfolioButton.classList.remove("go-green")
    blogButton.classList.remove("go-green")
    contactButton.classList.add("go-green");
    homeButton.classList.remove("go-green")

}

function changeColorBlog() {
    aboutButton.classList.remove("go-green")
    servicesButton.classList.remove("go-green")
    portfolioButton.classList.remove("go-green")
    blogButton.classList.add("go-green");
    contactButton.classList.remove("go-green")
    homeButton.classList.remove("go-green")

}

function changeColorPortfolio() {
    aboutButton.classList.remove("go-green")
    servicesButton.classList.remove("go-green")
    portfolioButton.classList.add("go-green");
    blogButton.classList.remove("go-green")
    contactButton.classList.remove("go-green")
    homeButton.classList.remove("go-green")

}

function closeNavbar() {
    const navbarOnTheRight = document.querySelector(".navbar-full-page");
    navbarOnTheRight.style.display = "none";
    setTimeout(async () => {
        const innerNavbar = document.querySelector(".navbar-responsive");
        innerNavbar.classList.remove("navbar-width-change");
    }, 700)

    const innerNavbar = document.querySelector(".navbar-responsive");
    // innerNavbar.classList.remove("navbar-width-change");
    // barsButton.innerHTML = '<i class="fas fa-bars"/>';

}

