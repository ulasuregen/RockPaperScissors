const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const rockw = document.querySelector("#rockw");
const paperw = document.querySelector("#paperw");
const scissorw = document.querySelector("#scissorw");

let choose;
let choosew = Math.floor(Math.random() * 3);
let lock = false;

const itemList = [rock,paper, scissor];
const itemListw = [rockw,paperw, scissorw];

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
            console.log(choose);

            setTimeout(() => {
                lock = false;
                itemList.forEach((element) => {element.style.opacity = 1;})
            }, 1000);
        }
    })
})


chooseRandom = function(itemList, index){
    let c = Math.floor(Math.random() * (itemList.length-1)) + 1;
    return c == index ? 0 : c;
}

