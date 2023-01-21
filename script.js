let search = document.getElementById("search");
let button = document.getElementById("btn");
let searchPopup = document.getElementById("search-popup")

search.addEventListener("click",()=>{
    button.classList.toggle("hiddenbtn");
    searchPopup.classList.toggle("hiddenbtn");
    search.classList.toggle("searchbackgroundcolor")
})
