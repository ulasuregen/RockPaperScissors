const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const rockw = document.querySelector("#rockw");
const paperw = document.querySelector("#paperw");
const scissorw = document.querySelector("#scissorw");

const playerText = document.querySelector("#playerScore");
const webText    = document.querySelector("#webScore");

const background = document.querySelector(".background-circle");

let userScore = 0;
let webScore  = 0;

let choose;
let choosew = Math.floor(Math.random() * 3);
let lock = false;

const itemList = [rock,paper, scissor];
const itemListw = [rockw,paperw, scissorw];

background.addEventListener("transitionend", () => {
    background.classList.remove("win");
    background.classList.remove("lose");
    background.classList.remove("draw");
})

itemList.forEach(element => {
    element.addEventListener("mouseover", () => {
        itemList.forEach(element1 => {
            if(element1 !== element && !lock) element1.style.opacity = "0.3";
        })
    })
}); 


itemList.forEach(element => {
    element.addEventListener("mouseout", () => {
        itemList.forEach(element1 => {
            if(!lock) element1.style.opacity = "1";
        })
    })
}); 

itemList.forEach(element => {
    element.addEventListener("click", () => {
        if(!lock) {
            lock = true;
            choose = itemList.indexOf(element);
            webChoose();
        }
    })
})


webChoose = function(){
    let index = 1;
    let interval = linespace(0,0.5,10).concat(linespace(0.5, 1, 3));
    interval = interval.map(num =>3*(num**2) - 2*(num ** 3));

    interval.forEach( second => {
        setTimeout(() => {
            chooseRandom();
            if(index++ >= interval.length) {
                lock = false;
                itemList.forEach(item => item.style.opacity = 1);
                roundEnd();
            };
        }, second * 1000);  
    })
}


// Choose random index based on itemList
chooseRandom = function(){
    undisplay(itemListw[choosew]);

    let c = Math.floor(Math.random() * (itemListw.length-1)) + 1;
    choosew = c == choosew ? 0 : c;
    
    display(itemListw[choosew]);
}

//Just to display element
display = function(element){
    element.classList.add("display");
}

//undisplay the image
undisplay = function(element){
    element.classList.remove("display");
}



//linearly spaced numbers between start and end (included both)
linespace = function(start, end, count){
    const step = (end - start) / (count - 1);
    return Array.from({length:count}, (_, i) => start + i*step);
}


winOrLose = function(){
    if(choose == choosew) return 0; //Draw


    // 0 = rock   // 1 = paper // 2 scissor
    
    //rock case
    if(choose == 0 & choosew == 1) return -1;
    if(choose == 0 & choosew == 2) return 1;

    //paper case
    if(choose == 1 & choosew == 0) return 1;
    if(choose == 1 & choosew == 2) return -1;

    //scissor case
    if(choose == 2 & choosew == 0) return -1;
    if(choose == 2 & choosew == 1) return 1;
}   


roundEnd = function(){
    const result = winOrLose();
    if(result < 0) {
        webText.innerHTML = ++webScore;
        background.classList.add("lose");
    }else if(result > 0){
        playerText.innerHTML = ++userScore;
        background.classList.add("win");
    }else{
        background.classList.add("draw");
    }

    resetScores();
}


function resetScores(){
    if(userScore == 3 || webScore == 3) {
        lock = true;
        setTimeout(() => {
            userScore = 0;
            webScore = 0;
            webText.innerHTML = webScore;
            playerText.innerHTML = userScore;
            lock = false;
        }, 1000);
    }
}