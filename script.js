let search = document.getElementById("search");
let button = document.getElementById("btn");
let searchPopup = document.getElementById("search-popup")

search.addEventListener("click",()=>{
    button.classList.toggle("hiddenbtn");
    searchPopup.classList.toggle("hiddenbtn");
    search.classList.toggle("searchbackgroundcolor")
})

// let toggleLeft = document.getElementsByClassName("toggleclass")[0];
// let hamburger = document.getElementById("hamburger")
// hamburger.addEventListener("click",()=>{
//     toggleLeft.style.left="0"
// })
// toggleLeft.addEventListener("mouseleave",()=>{
//     toggleLeft.style.left="-230px"
// })
