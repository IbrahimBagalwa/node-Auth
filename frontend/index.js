const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
    navToggle.addEventListener("click", ()=>{

        // if the nav is closed, open it
        const visibility = nav.getAttribute("data-visible");
        if(visibility === "false"){
            nav.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);
        }
        // if the nav is open, close it
        else {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
        // console.log(visibility)
    });
