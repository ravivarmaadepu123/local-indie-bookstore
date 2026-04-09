
/* DARK MODE */

const themeButtons = document.querySelectorAll("#themeToggle, #themeToggleMobile");

const setThemeIcons = () => {
  const isDark = document.body.classList.contains("dark-mode");
  themeButtons.forEach((btn) => {
    const icon = btn.querySelector("i");
    if(!icon) return;
    icon.classList.toggle("fa-moon", isDark);
    icon.classList.toggle("fa-sun", !isDark);
  });
};

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
      localStorage.setItem("theme","dark");
    }else{
      localStorage.setItem("theme","light");
    }
    setThemeIcons();
  });
});

/* LOAD SAVED THEME */

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark-mode");
}
setThemeIcons();


/* RTL TOGGLE */

const rtlButtons = document.querySelectorAll("#rtlToggle, #rtlToggleMobile");

rtlButtons.forEach((btn) => btn.addEventListener("click",()=>{

const html=document.documentElement;

html.setAttribute(
"dir",
html.getAttribute("dir")==="ltr"?"rtl":"ltr"
);

}));


/* MOBILE MENU */

const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".nav-menu");
const hamburgerIcon = hamburger ? hamburger.querySelector("i") : null;

if(hamburger && nav){
  const updateHamburger = () => {
    const isOpen = nav.classList.contains("active");
    if(hamburgerIcon){
      hamburgerIcon.classList.toggle("fa-bars", !isOpen);
      hamburgerIcon.classList.toggle("fa-xmark", isOpen);
    }
  };
  updateHamburger();
  hamburger.addEventListener("click",()=>{
    nav.classList.toggle("active");
    updateHamburger();
  });
}

/* ACTIVE NAV LINK */

const navLinks = document.querySelectorAll(".nav-menu a");
if(navLinks.length){
  const currentFile = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if(!href || href === "#") return;
    if(href === currentFile){
      link.classList.add("active");
    }
  });

  if(currentFile === "index.html" || currentFile === "Home page 2.html"){
    const homeTrigger = document.querySelector(".nav-menu > ul > li.dropdown > a");
    if(homeTrigger){
      homeTrigger.classList.add("active");
    }
  }
}
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

