const symbolMap = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function postFormat(string) {
    return string.replace(/\d/g, (d) => symbolMap[d]).replace(/,/g, "،");
}

cardListContentNumbers = ['299', '45', '99', '36'];
var cardList = [];

function cardListGenerator() {
    for (let i = 0; i < 4; i++) {
        cardList.push({
            intervalRef: null,
            id: `#number${i + 1}`,
            isCounting: false,
            contentNumber: cardListContentNumbers[i],
            counter: 1
        });
        console.log(cardList[i]);
    }
}

cardListGenerator();

function counterCardAnimation(card) {
    card.counter++;
    document.querySelector(`${card.id}`).innerHTML = postFormat(card.counter.toString());
    if (card.counter === card.contentNumber) {
        card.counter = 0;
        clearInterval(card.intervalRef);
        card.isCounting = false;
    }
}

function ChangeColor(target) {
    document.querySelectorAll(".navbar-icon-link").forEach(e => {
        e.classList.remove("go-green");
    })
    document.querySelectorAll(`.i-${target}`).forEach(e => {
        e.classList.add("go-green");
    })
}

const newNavbar = document.getElementById("navbarid");
const bannerGrid = document.querySelector(".banner-grid");
const skillsHeader = document.querySelector(".skills");
const headerIds = ['home', 'about', 'services', 'portfolio', 'blog', 'contact']
var headers = [];

function headersGenerator() {
    for (let i = 0; i < 6; i++) {
        headers.push(document.querySelector(`#${headerIds[i]}`));
        console.log(headers[i]);
    }
}

headersGenerator();

function ifGenerator(header) {
    if (header.getBoundingClientRect().top <= 100 && header.getBoundingClientRect().bottom > 0) {
        ChangeColor(header.id.toString())
    }
}

function navbarTransform() {
    if (bannerGrid.getBoundingClientRect().top <= 0) {
        newNavbar.classList.add("new-navbar-style");
    } else {
        newNavbar.classList.remove("new-navbar-style");
    }
}

function progressBarsActivation() {
    document.querySelectorAll(".progress").forEach(e => {
        const num = e.getAttribute("data-value");
        e.style.width = `${num}%`;
    })
}

function counterCardsSection() {
    if (skillsHeader.getBoundingClientRect().top <= 500
        && skillsHeader.getBoundingClientRect().top >= 400
        && !(cardList.reduce((prev, curr) => {
            return prev || curr.isCounting;
        }, false))) {
        progressBarsActivation();
        cardList.forEach(e => {
            e.isCounting = true;
        })
        timeoutGenerator();
    }
}

var i = 0;
const timeouts = [3, 40, 20, 60];

function timeoutGenerator() {
    for (let cardListElement of cardList) {
        cardListElement.intervalRef = setInterval(() => {
            counterCardAnimation(cardListElement)
        }, timeouts[i++]);
    }
}

window.onscroll = function () {
    headers.forEach(function (element) {
            ifGenerator(element);
        }
    )
    navbarTransform();
    counterCardsSection();
}


function typeWriterGenerator() {
    const speed = 150;
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
    const kamalTitle = ['کمال', 'یک وب دیزاینر', 'یک توسعه دهنده', 'یک لوگو دیزاینر'];
    while (true) {
        for (const title of kamalTitle) {
            await typeWriterGenerator()(title);
            document.getElementById("kamalsname").innerHTML = ''
        }
    }
}, 1000)

const filters = ['design', 'music', 'video']
for (let filter of filters) {
    const btn = document.querySelector(`.${filter}`);
    btn.addEventListener('click', () => {
        portfolioSort(filter)
    });
}

const allWorkBtn = document.querySelector(".all-work");
allWorkBtn.addEventListener('click', () => {
    portfolioSort("card-p")
});

function portfolioSort(filter) {
    document.querySelectorAll(".card-p").forEach(e => (e.style.display = 'none'));
    document.querySelectorAll(".card-p").forEach(e => {
        if (e.className.includes(filter)) {
            e.style.display = 'block';
        }
    })
    document.querySelectorAll(".p-button").forEach(e => {
        e.classList.remove("bg-green");
    })
    if (filter === "card-p") {
        document.querySelector(".all-work").classList.add("bg-green");
    } else {
        document.querySelector(`.${filter}`).classList.add("bg-green");
    }
}

const barsButton = document.querySelector(".bars");
const navbarOnTheRight = document.querySelector(".navbar-full-page");
const innerNavbar = document.querySelector(".navbar-responsive");
barsButton.addEventListener('click', sideNavbar);

function sideNavbar() {
    barsButton.innerHTML = '<i class="fas fa-times"/>';
    barsButton.style.border = '0';
    const navbarOnTheRight = document.querySelector(".navbar-full-page");
    navbarOnTheRight.style.display = "block";
    innerNavbar.classList.remove("navbar-go");
    innerNavbar.classList.add("navbar-show");
}

const closeButton = document.querySelector(".close-navbar");
navbarOnTheRight.addEventListener('click', closeNavbar);
closeButton.addEventListener('click', closeNavbar);

function closeNavbar() {
    innerNavbar.classList.remove("navbar-show");
    innerNavbar.classList.add("navbar-go");
    setTimeout(async () => {
        const navbarOnTheRight = document.querySelector(".navbar-full-page");
        navbarOnTheRight.style.display = "none";
        barsButton.innerHTML = '<i class="fas fa-bars"/>';
    }, 150)
}

innerNavbar.addEventListener('click', doNothing);

function doNothing(e) {
    e.stopPropagation();
}

const submitButton = document.querySelector(".send-button");
submitButton.addEventListener('click', checkValidation);
const inputs = document.querySelectorAll(".input-container input");
const check = document.querySelector(".fa-check");

function checkValidation() {
    inputs.forEach(e => {
        if (e.value === "") {
            document.querySelector(`.${e.name}.input-container .fa-check`).style.display = "none";
            e.classList.remove("input-is-okay", "focus-okay");
            e.classList.add("input-is-empty");
        } else {
            e.classList.remove("input-is-empty");
            e.classList.add("focus-okay", "input-is-okay")
            document.querySelector(`.${e.name}.input-container .fa-check`).style.display = "block";
        }
    })
}