//document elements

const light = document.querySelector(".fa-sun");
const screen = document.querySelector(".container");
const title = document.querySelector(".title");
const home = document.querySelector(".about");
const description = document.querySelector(".shop");
const footer = document.getElementById("contact");
const cart = document.querySelector(".top-cart");
const heart = document.querySelector(".top-heart");
const contact = document.querySelector(".contact-us");
const input = document.getElementById("input");
const search = document.querySelector(".search-button");
const searchIcon = document.querySelector(".search-icon");
const fav = document.getElementById("favourite");
const fav2 = document.getElementById("favourite2");
const black = document.getElementById("black")
const black2 = document.getElementById("black2")
const white = document.getElementById("white")
const white2 = document.getElementById("white2")
const blackp = document.getElementById("product1")
const whitep2 = document.getElementById("product2")
const blackp2 = document.getElementById("product10")
const whitep = document.getElementById("product20")

// color variations for keyboards

    white.addEventListener("click", ()=>{
        blackp.style = "display:none;"
        whitep2.style = "display:block;"
        white.style ="border-color: #3623FF;"
        black.style="border-color:#2D2C2C;"
    });
    white2.addEventListener("click", ()=>{
        blackp2.style = "display:none;"
        whitep.style = "display:block;"
        white2.style ="border-color: #3623FF;"
        black2.style="border-color:#2D2C2C;"
    });
    black.addEventListener("click", ()=>{
        whitep2.style = "display:none;"
        blackp.style = "display:block;"
        black.style ="border-color: #3623FF;"
        white.style="border-color:#white;"
    });
    black2.addEventListener("click", ()=>{
        whitep.style = "display:none;"
        blackp2.style = "display:block;"
        black2.style ="border-color: #3623FF;"
        white2.style="border-color:#white;"
    });

//lightmode

    light.addEventListener("click", ()=>{
    light.style="color:#3623FF"
    screen.style="background-color:white; color:black"
    title.style="color:black"
    home.style="color:black"
    description.style="color:black"
    footer.style="background-color:#B8B4C4"
    cart.style="color:black"
    heart.style="color:black"
    contact.style="color:black"
    input.style="background-color:white; color:black; border-color:black"
    search.style="background-color:white; color:black; border-color:black"
    searchIcon.style="color:black"

    });

    favourite = ()=>{
        fav.addEventListener("click", ()=>{
            fav.style="background-color:#3623FF; color: white;"
        });
    }

    favourite2 = ()=>{
        fav2.addEventListener("click", ()=>{
            fav2.style="background-color:#3623FF; color: white;"
        });
    }

    unfavourite = ()=>{
        fav.addEventListener("click", ()=>{
            fav.style="background-color:#B8B4C4; color:black;"
        });
    }

    unfavourite2 =()=>{
    fav2.addEventListener("click", ()=>{
        fav2.style="background-color:#B8B4C4; color:black;"
    });
    }

    favourite()
    favourite2()

var typingEffect = new Typed(".multitext",{
    strings: ["Play comfortable", "Play faster", "Play better"],
        loop : false,
        typeSpeed : 50,
        backSpeed : 50,
        backDelay : 1500,
  });