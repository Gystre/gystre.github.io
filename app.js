const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    //toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        //animate links
        navLinks.forEach((link, i) => {
            if(link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.3}s`;
            }
        });

        //burger animation
        burger.classList.toggle("toggle");
    });
}

navSlide();

$(document).ready(function(){      
    setInterval(function(){
        document.getElementById("date").innerHTML = new Date();;
    } , 100);
});

