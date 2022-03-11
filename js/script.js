//letiables
let
    char = document.getElementById('char'),
    block = document.getElementById('block'),
    scour = document.getElementById('score'),
    game = document.getElementById('game'),
    x,
    d = new Date(),
    elem = document.documentElement;

//Reload
function reload() {
    location.reload();
}

// Get Current Year
document.getElementById("addCurrentYear").innerHTML = d.getFullYear();

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
//Setting Box
function displaySettings() {
    document.getElementById('settingBox').style.display = 'block';
}
//Restart
function restartGameLala() {
    document.getElementById('otherBtnGame').style.display = 'block';
    window.location.reload();
}
//Stop
function stopGameLala() {
    if (block.classList != "animateBlock") {
        totalSeconds = 0;
        clearInterval(timerletiable);
        block.style.display = 'none';
        block.classList.remove("animateBlock1");
        block.classList.remove("animateBlock2");
        block.classList.remove("animateBlock3");
        block.classList.remove("animateBlock4");
        block.classList.remove("animateBlock5");
        block.classList.remove("animateBlock6");
        char.classList.remove("animate");
        scour.innerText = "Your Score: 0";
        char.src = 'png/Char_Lala.png';
        block.src = 'png/Block_Dog.png';
        game.style = 'background-image: url("gif/BK_Stop.gif")';

    }
}
//Start
function startGameLala() {
    char.src = 'gif/Char_Lala_M.gif';
    block.src = 'gif/Block_Dog.gif';
    char.style.display = 'block';
    block.style.display = 'block';
    game.style = 'background-image: url("gif/BK_Run.gif")';
    block.classList.add("animateBlock1");
    totalSeconds = 0;
    timerletiable = setInterval(countUpTimer, 1000);
    countUpTimer();
}


function displaySettingsClose() {
    document.getElementById('settingBox').style.display = 'none';
}
//Jump
function jump() {
    if (char.classList != "animate") {
        char.classList.add("animate");
    }
    setTimeout(function() {
        char.classList.remove("animate");
    }, 500);
}

//The End
let checkDead = setInterval(function() {
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
        document.getElementById('otherBtnGame').style.display = 'none';
        totalSeconds = 0;
        clearInterval(timerletiable);
        block.style.display = 'none';
        char.style.display = 'none';
        scour.innerText = "Your Score is " + x;
        game.style = 'background-image: url("gif/G_Over_Lala_Run.gif")';
        setTimeout(() => {
            game.style = 'background-image: url("gif/BK_Stop.gif")';
            document.getElementById('otherBtnGame').style.display = 'block';
        }, 10000)
    }
}, 10);

//Scour
var timerletiable;
var totalSeconds;

function countUpTimer() {
    ++totalSeconds;
    x = totalSeconds + 1;
    document.getElementById('score').innerHTML = "Your Score: " + x;
}

//Check Scour
let checkScour = setInterval(function() {
    if (x >= 10) {
        block.classList.remove("animateBlock1");
        block.classList.add("animateBlock2");
    };
    if (x >= 20) {
        block.classList.remove("animateBlock2");
        block.classList.add("animateBlock3");
    };
    if (x >= 30) {
        block.classList.remove("animateBlock3");
        block.classList.add("animateBlock4");
    };
    if (x >= 40) {
        block.classList.remove("animateBlock4");
        block.classList.add("animateBlock5");
    };
    if (x >= 60) {
        block.classList.remove("animateBlock5");
        block.classList.add("animateBlock6");
    };
    if (x == 100) {
        totalSeconds = 0;
        clearInterval(timerletiable);
        block.style.display = 'none';
        char.style.display = 'none';
        scour.innerText = "Your Win!";
        game.style = 'background-image: url("gif/Win_Lala_Run.gif")';
        document.getElementById('otherBtnGame').style.display = 'none';
    }
}, 1)