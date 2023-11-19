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


// for BG animation
particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#000000"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#002046","opacity":1,"width":1.763753266952075},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":239.76023976023976,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;