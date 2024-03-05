let currentPage = document.getElementById("about-page").dataset.currentpage;
console.log(currentPage);

const aboutImage = document.querySelector('.about__headSection--image img');

const whoWe = document.getElementById("whoWe");
const strategies = document.getElementById("strategies");
const cooperation = document.getElementById("cooperation");
const responsibility = document.getElementById("responsibility");

const aboutLink = document.getElementById("about_nav-about");
const strategiesLink = document.getElementById("about_nav-strategies");
const cooperationLink = document.getElementById("about_nav-cooperation");
const responsibilityLink = document.getElementById("about_nav-responsibility");


function changeImage () {

    whoWe.classList.remove("active");
    strategies.classList.remove("active");
    cooperation.classList.remove("active");
    responsibility.classList.remove("active");

    aboutLink.classList.remove("active");
    strategiesLink.classList.remove("active");
    cooperationLink.classList.remove("active");
    responsibilityLink.classList.remove("active");

    switch (currentPage) {
        case "who_us":
            aboutImage.src = "../assets/img/about/whoWe.png";           // nav'in yanindaki sekil 
            whoWe.classList.add("active");
            aboutLink.classList.add("active");
        break;

        case "strategies":        // FOR SLUG 
            aboutImage.src = "../assets/img/about/strategies.png";          // nav'in yanindaki sekil 
            strategies.classList.add("active");
            strategiesLink.classList.add("active");
        break;

        case "for_corporation":        // FOR SLUG 
            aboutImage.src = "../assets/img/about/cooperation.png";         // nav'in yanindaki sekil 
            cooperation.classList.add("active")
            cooperationLink.classList.add("active");
        break;

        case "responsibilty":        // FOR SLUG 
            aboutImage.src = "../assets/img/about/resp.png";            // nav'in yanindaki sekil 
            responsibility.classList.add("active")
            responsibilityLink.classList.add("active");
        break;
    } 
}

changeImage();



aboutLink.addEventListener('click', () => {
    currentPage = "who_us";                         // about nav slug
    changeImage();
})
strategiesLink.addEventListener('click', () => {
    currentPage = "strategies"                 // about nav slug
    changeImage();
})
cooperationLink.addEventListener('click', () => {
    currentPage = "for_corporation";               // about nav slug
    changeImage();
})
responsibilityLink.addEventListener('click', () => {
    currentPage = "responsibilty";                // about nav slug
    changeImage();
})