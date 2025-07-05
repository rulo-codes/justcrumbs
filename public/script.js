
const burger = document.querySelector("#burger");
const nav = document.querySelector("#navLinks");
const menuDiv = document.querySelectorAll(".menu-placeholder");
const menuCover = document.querySelectorAll('#menu-cover');
const cookies = document.querySelector(".cookie-cover");
const coffee = document.querySelector(".coffee-cover");
const item = document.querySelectorAll(".menu-item");

const navlinks = document.querySelectorAll("#nav-link");

let navOpen = false;
let menuOpen = false;
let cookieOpen = true;
let coffeeOpen = true;
let timer;

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-menu");
  navOpen = !navOpen;
  console.log(navOpen ? "nav open" : "nav closed");
});


navlinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 800 && menuOpen) {
      nav.classList.toggle("nav-menu");
      navOpen = false;
      console.log("link clicked, menu closed");
    }
  });
});

document.body.addEventListener("mousemove", () => {
    if(!cookieOpen && !coffeeOpen){
        cookieOpen = true;
        coffeeOpen = true;
        cookies.classList.remove("hide");
        coffee.classList.remove("hide");
    }
});


menuCover.forEach(div => {

  div.addEventListener("mouseover", () => {
  div.addEventListener('click', () => {
        clearTimeout(timer);
        if(div.classList.contains("cookie-cover")){
          if(cookieOpen){
            cookies.classList.add("hide");
            coffee.classList.remove("hide");
            cookieOpen = false;
          } else {
            div.style.display = "flex";
            cookieOpen = true;
          }

        } else {
        if(!cookieOpen){
            coffee.classList.add("hide");
            cookies.classList.remove("hide");
            cookieOpen = true;
            coffeeOpen = false;
 
          } else {
            div.style.display = "flex";
            cookieOpen = false;
            coffeeOpen = true;
          }
       
        }
     div.addEventListener("transitionend", function handler(){
      div.style.display = "none";
      
          menuDiv.forEach(menu => {
              menu.addEventListener('mouseleave', () => {
                  clearTimeout(timer);
                  timer = setTimeout(() => {
                    cookies.classList.remove("hide");
                    coffee.classList.remove("hide");
                    cookieOpen = true;
                    coffeeOpen = true;          
                  }, 2000);
                  div.style.display = "flex";
                  div.removeEventListener("transitionend", handler);
              });
          })
    });
  
  })


  })


})




function itemSelect(e){
  console.log(e.target.id);
}

item.forEach(li => {
  li.addEventListener("mouseover", itemSelect)
});
