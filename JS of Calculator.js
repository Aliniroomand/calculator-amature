// there is 4 parts of js codes
// 1 -- display box and "C" key
// 2 -- "AC" key
// 3 -- " = " sign and calculating 
// 4 -- keys 



// 1 -- display box and "C" key 
let displayBox=document.querySelector(".display");


let clear=document.querySelector(".clear-last");
clear.addEventListener("click",clearLast);
function clearLast(){
    let text=displayBox.innerText;
    text.length === 1?
        displayBox.innerText=0 :
        displayBox.innerText=text.substring(0,(text.length-1))
    }


// 2 -- "AC" key
let allClear=document.querySelector(".all-clear");
allClear.addEventListener("click",allClearing);
function allClearing(){
    displayBox.innerText = 0
}



// 3 -- " = " sign and calculating 
let calculate=document.querySelector(".calculate");
calculate.addEventListener("click",calculating);
function calculating(){
    let result=displayBox.innerText;
    displayBox.innerText= eval(result);
}



// 4 -- keys 
let list=document.querySelectorAll(".show-display");
list.forEach(item => {
item.addEventListener("click",showDisplay)
});

function showDisplay(item){
    const x=item.target.innerText;
    if (displayBox.innerHTML == 0){
        return displayBox.innerHTML=x;
    }{return displayBox.innerHTML+=x}
}

