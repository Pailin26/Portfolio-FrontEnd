// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const themeToggle = document.querySelector(".theme-toggle");
const lightpic = document.querySelector("#main_lightimg")
const darkpic = document.querySelector("#main_darkimg")

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})


// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');

  if(document.body.classList.contains('dark-theme-variables')) {
    darkpic.style.display = "block";
    lightpic.style.display = "none";
    console.log("DarkMode")
    theme = "DARK" ;

  }else{
    lightpic.style.display = "block";
    darkpic.style.display = "none";
    console.log("LightMode")
    theme = "LIGHT" ;
  }

  // save localStorage

  localStorage.setItem("PageTheme",JSON.stringify(theme));




})

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if(GetTheme === "DARK"){
  themeToggle.querySelector('span:nth-child(1)').classList.toggle('visible');
  themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
  document.body.classList = ('dark-theme-variables');
  console.log(GetTheme);
}else{
  console.log(GetTheme);
}



