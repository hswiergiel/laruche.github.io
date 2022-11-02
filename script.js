// mélanger la liste
const alveoles = document.querySelectorAll("#grid li")
const alveolesInnerHTML = Array.from(alveoles).map(li => li.innerHTML);

function animatedHive() {
    for (i = 0; i < alveoles.length; i++) {
        alveoles[i].animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 1000,
            delay: i * 100,
            fill: "backwards",
        });
    }
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { //parcours le tableau à l'envers
        let j = Math.floor(Math.random() * (i + 1)); //création index random
        [array[i], array[j]] = [array[j], array[i]]; // nouvel index random sur chaque élément du tableau
    };
    for (let i = 1; i <= 16; i++) {
        document.querySelector(`#grid li:nth-child(${i})`).innerHTML = array[i]; // remplace innerHTML des li par celui du tableau mélangé
    };
    animatedHive();
}

shuffle(alveolesInnerHTML);

document.querySelector("#shuffleButton").addEventListener("click", function () {
    shuffle(alveolesInnerHTML);
});

// style du formulaire
let submitionMsg = document.querySelector(".submitionText");

document.querySelector("#submitButton").addEventListener('click', function (event) {
    event.preventDefault();
    submitionMsg.classList.toggle("hiddenmsg");
    document.querySelector(".formPresentation").reset();
});

//alveoles qui se retournent
for (let n = 1; n <= 16; n++) {
    for (let i = 0; i < document.querySelectorAll(`#grid li:nth-child(${n}) .hexagon p a`).length; i++) {
        document.querySelectorAll(`#grid li:nth-child(${n}) .hexagon p a`)[i].style.pointerEvents = "none";
        console.log('yo');
    };
}

for (let n = 1; n <= 16; n++) {
    document.querySelector(`#grid li:nth-child(${n})`).addEventListener('click', function () {
        if (document.querySelector(`#grid li:nth-child(${n}) .hexagon img`).style.opacity === "" ||
            document.querySelector(`#grid li:nth-child(${n}) .hexagon img`).style.opacity === "1") {
            for (let i = 0; i < document.querySelectorAll(`#grid li:nth-child(${n}) .hexagon p a`).length; i++) {
                document.querySelectorAll(`#grid li:nth-child(${n}) .hexagon p a`)[i].style.pointerEvents = "auto";
            };
            document.querySelector(`#grid li:nth-child(${n}) .hexagon img`).animate([
                { opacity: "1" },
                { opacity: "0.1" }
            ], 700);
            document.querySelector(`#grid li:nth-child(${n}) .hexagon img`).style.opacity = "0.1";
            document.querySelector(`#grid li:nth-child(${n}) .hexagon .box`).animate([
                { opacity: "0" },
                { opacity: "0.9" }
            ], 700);
            document.querySelector(`#grid li:nth-child(${n}) .hexagon .box`).style.opacity = "0.9";
        } else {
            for (let i = 0; i < document.querySelectorAll(`#grid li:nth-child(${n}) .hexagon p a`).length; i++) {
                document.querySelectorAll(`#grid li:nth-child(${n}) .hexagon p a`)[i].style.pointerEvents = "none";
            };
            document.querySelector(`#grid li:nth-child(${n}) .hexagon img`).animate([
                { opacity: "0.1" },
                { opacity: "1" }
            ], 700);
            document.querySelector(`#grid li:nth-child(${n}) .hexagon img`).style.opacity = "1";
            document.querySelector(`#grid li:nth-child(${n}) .hexagon .box`).animate([
                { opacity: "0.9" },
                { opacity: "0" }
            ], 700);
            document.querySelector(`#grid li:nth-child(${n}) .hexagon .box`).style.opacity = "0";
        }
    });
    document.querySelector(`#grid li:nth-child(${n})`).addEventListener('mouseenter', function () {
        document.querySelector(`#grid li:nth-child(${n})`).style.cursor = "pointer";
    });
};

for (let n = 1; n <= 16; n++) {
    document.querySelector(`#grid li:nth-child(${n})`).addEventListener('mouseenter', function () {
        document.querySelector(`#grid li:nth-child(${n})`).style.bottom = "5px";
    });
    document.querySelector(`#grid li:nth-child(${n})`).addEventListener('mouseleave', function () {
        document.querySelector(`#grid li:nth-child(${n})`).style.bottom = "0";
    })
}

// menu burger

const closeButton = document.querySelector('.closemenu');
const openButton = document.querySelector('.openmenu');
const menuItems = document.querySelectorAll('.menuitem');

function burgermenu() {
    closeButton.style.display = "none";
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "none";
    }

    openButton.addEventListener('click', function () {
        openButton.style.display = "none";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "block";
        };
        closeButton.style.display = "block";
    });

    closeButton.addEventListener('click', function () {
        openButton.style.display = "block";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "none";
        };
        closeButton.style.display = "none";
    })
};

window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        openButton.style.display = "block";
        burgermenu();
    } else if (window.innerWidth > 768) {
        closeButton.style.display = "none";
        openButton.style.display = "none";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "block";
        };
    };
})

// if (window.innerWidth < 768) {
//     burgermenu();
// } else {
//     closeButton.style.display = "none";
//     openButton.style.display = "none";
//     for (let i = 0; i < menuItems.length; i++) {
//         menuItems[i].style.display = "block";
//     };
// };

if (window.matchMedia('(max-width:768px)').matches) {
    burgermenu();
} else if (window.matchMedia('(min-width:768px)').matches) {
    closeButton.style.display = "none";
    openButton.style.display = "none";
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = "block";
    };
}

// const mediaQuery = windows.matchMedia("(max-width:768px)");

// burgermenu(mediaQuery);
// mediaQuery.addEventListener(burgermenu);
