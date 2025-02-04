const toggle_btn = document.querySelector(".nav-toggle-btn");
const navMenu = document.querySelector(".nav-ul-items");

toggle_btn.addEventListener("click", ()=>{
    navMenu.classList.toggle("active")
})