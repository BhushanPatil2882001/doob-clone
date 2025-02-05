// ====================== NAVBAR ====================== //
const toggle_btn = document.querySelector(".nav-toggle-btn");
const navMenu = document.querySelector(".nav-ul-items");

toggle_btn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ====================== WHITE THEME ====================== //
const body = document.body;
const theme_toggle = document.querySelector(".nav-theme-btn");
const theme_icon = theme_toggle.querySelector("i")
const dark_elements = document.querySelectorAll(".dark, .light");
const logo = document.querySelector(".logo");


theme_toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
});


theme_toggle.addEventListener("click", () => {
    dark_elements.forEach((element) => {
        // theme icon change
        theme_icon.classList.contains("ri-sun-line") ? theme_icon.classList.replace("ri-sun-line", "ri-moon-line") : theme_icon.classList.replace("ri-moon-line", "ri-sun-line")

        // change classes of dark to light and vice verse
        element.classList.contains("dark") ? element.classList.replace("dark", "light") : element.classList.replace("light", "dark")

        // logo change
        logo.classList.contains("light") ? logo.firstElementChild.setAttribute("src", "./assets/images/header/logo-dark.png") : logo.firstElementChild.setAttribute("src", "./assets/images/header/logo.png")

    });
});





// ====================== ABOUT SECTION ====================== //
const about_nav = document.querySelector(".about-nav-top")
const about_info = document.querySelector(".about-info")
const btn1 = about_nav.children[0]
const btn2 = about_nav.children[1]
const btn3 = about_nav.children[2]

btn1.addEventListener("click", ()=>{
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    about_info.children[0].innerText = "YOU CAN CHECKOUT REPORTING AND DEVELOPMENT TABS Lorem ipsum dolorit. Quibusdam ipsa,ta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo."
    about_info.children[1].innerText = "Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo."
})

btn2.addEventListener("click", ()=>{
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    about_info.children[0].innerText = "psa,ta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.psa,ta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo."
    about_info.children[1].innerText = "This is good website right?"
})

btn3.addEventListener("click", ()=>{
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    about_info.children[0].innerText = "Lorem ipsum dolorit. Quibusdam ipsa,ta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.psa,ta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo."
    about_info.children[1].innerText = "Thank you for checking it out!"
})



