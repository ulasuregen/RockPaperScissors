const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
let lock = false;

const delay = ms => new Promise(res => setTimeout(res, ms));

const itemList = [rock,paper, scissor];

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
        lock = true;

        setTimeout(() => {
            lock = false;
            itemList.forEach((element) => {element.style.opacity = 1;})
        }, 1000);
    })
})

