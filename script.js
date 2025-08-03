const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const itemList = [rock,paper, scissor];

itemList.forEach(element => {
    element.addEventListener("mouseover", () => {
        itemList.forEach(element1 => {
            if(element1 !== element) element1.style.opacity = "0.3";
        })
    })
}); 


itemList.forEach(element => {
    element.addEventListener("mouseout", () => {
        itemList.forEach(element1 => {
            element1.style.opacity = "1";
        })
    })
}); 