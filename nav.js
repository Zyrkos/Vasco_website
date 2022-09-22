const toggleButton = document.getElementsByClassName('toggle-button') [0]
const navbarLinks = document.getElementsByClassName('navbar-links') [0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    
})



/*window.addEventListener("scroll", function(){
    let header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
}*/