const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const resize_images = document.querySelector(".resizable-image");

    resize_images.addEventListener("click", () => {
        // var new_image = document.createElement("img");
        // new_image.position = "absolute";
        // new_image.src = `${resize_images.src}`;
        // document.body.appendChild(new_image);
    });

    //toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        //animate links
        navLinks.forEach((link, i) => {
            if(link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.24}s`;
            }
        });

        //burger animation
        burger.classList.toggle("toggle");
    });
}

navSlide();


$(document).ready(function(){      
    setInterval(function(){
        document.getElementById("date").innerHTML = new Date();
    } , 100);
    
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav-bar").style.top = "0";
        } else {
            document.getElementById("nav-bar").style.top = "-75px";
        }
        prevScrollpos = currentScrollPos;
    }
});

