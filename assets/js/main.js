
/* DARK MODE */

const themeBtn=document.getElementById("themeToggle");
const icon=themeBtn.querySelector("i");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

icon.classList.replace("fa-sun","fa-moon");
localStorage.setItem("theme","dark");

}else{

icon.classList.replace("fa-moon","fa-sun");
localStorage.setItem("theme","light");

}

});

/* LOAD SAVED THEME */

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");
icon.classList.replace("fa-sun","fa-moon");

}


/* RTL TOGGLE */

const rtlBtn=document.getElementById("rtlToggle");

rtlBtn.addEventListener("click",()=>{

const html=document.documentElement;

html.setAttribute(
"dir",
html.getAttribute("dir")==="ltr"?"rtl":"ltr"
);

});


/* MOBILE MENU */

const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{

nav.classList.toggle("active");

});
/* BOOK FILTER */

const filterBtns = document.querySelectorAll(".filter-btn");
const books = document.querySelectorAll(".book-item");

filterBtns.forEach(btn => {

btn.addEventListener("click", () => {

document.querySelector(".filter-btn.active").classList.remove("active");
btn.classList.add("active");

const filter = btn.dataset.filter;

books.forEach(book => {

if(filter === "all" || book.classList.contains(filter)){
book.style.display = "block";
}else{
book.style.display = "none";
}

});

});

});

var swiper = new Swiper(".staff-slider", {

slidesPerView:4,
spaceBetween:25,
loop:true,

navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"
},

breakpoints:{

320:{
slidesPerView:1
},

600:{
slidesPerView:2
},

900:{
slidesPerView:3
},

1200:{
slidesPerView:4
}

}

});
document.querySelectorAll(".bsfaq-question").forEach(button => {

button.addEventListener("click", () => {

const item = button.parentElement;

item.classList.toggle("active");

});

});

