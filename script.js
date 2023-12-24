var timer ;
var rn = 0;
var score = 0 ;
var panelbtm = document.querySelector(".panelbottom")

function createbubble() {
    var clutter = " ";
    for (var i = 1; i <= 198; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".panelbottom").innerHTML = clutter;
    panelbtm.style.flexDirection = "row";
    panelbtm.style.gap = "0px";
}
function runtimer() {
    timer = 60;
    document.querySelector("#timer").textContent = 60;
    document.querySelector("#incscore").textContent = 0;
    var runtime = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(runtime);
            document.querySelector(".panelbottom ").innerHTML = `<h1>Game Over</h1>
            <h2>Score : ${score}</h2>
            <button class="play">Play Again</button>`;
            playAgain();
        panelbtm.style.flexDirection = "column";
        panelbtm.style.gap = "15px";
        }
    }, 1000);
}

function getNewHit() {
    rn = Math.floor(Math.random() * 10)
    document.querySelector("#newhit").textContent = rn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#incscore").textContent = score;
}

document.querySelector(".panelbottom").addEventListener("click", function (details) {
    var check = (Number(details.target.textContent))
    if (check === rn) { //rn is the random number saved in getNewHit function
        increaseScore();
        createbubble();
        getNewHit();
    }
})

document.querySelector(".panelbottom button").addEventListener("click", function () {
    createbubble();
    runtimer();
    getNewHit();
})

function playAgain(){
    document.querySelector(".play").addEventListener("click", function(){
        score = 0;
        createbubble();
        runtimer();
        getNewHit();
    })
}
