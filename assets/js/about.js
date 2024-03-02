
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
    const currentPath = window.location.pathname;

    whoWe.classList.remove("active");
    strategies.classList.remove("active");
    cooperation.classList.remove("active");
    responsibility.classList.remove("active");

    aboutLink.classList.remove("active");
    strategiesLink.classList.remove("active");
    cooperationLink.classList.remove("active");
    responsibilityLink.classList.remove("active");

    switch (currentPath) {
        case "/about":
        case "/az/about":
        case "/en/about":
        case "/ru/about":
            aboutImage.src = "../assets/img/about/whoWe.png";           // nav'in yanindaki sekil 
            whoWe.classList.add("active");
            aboutLink.classList.add("active");
        break;

        case "/strategies":        // FOR LOCALE (DELETE THIS)
        case "/about/strategies":
        case "/az/about/strategies":
        case "/en/about/strategies":
        case "/ru/about/strategies":
            aboutImage.src = "../assets/img/about/strategies.png";          // nav'in yanindaki sekil 
            strategies.classList.add("active");
            strategiesLink.classList.add("active");
        break;

        case "/cooperation":        // FOR LOCALE (DELETE THIS)
        case "/about/cooperation":
        case "/az/about/cooperation":
        case "/ru/about/cooperation":
        case "/en/about/cooperation":
            aboutImage.src = "../assets/img/about/cooperation.png";         // nav'in yanindaki sekil 
            cooperation.classList.add("active")
            cooperationLink.classList.add("active");
        break;

        case "/responsibility":        // FOR LOCALE (DELETE THIS)
        case "/about/responsibility":
        case "/az/about/responsibility":
        case "/en/about/responsibility":
        case "/ru/about/responsibility":
            aboutImage.src = "../assets/img/about/resp.png";            // nav'in yanindaki sekil 
            responsibility.classList.add("active")
            responsibilityLink.classList.add("active");
        break;
    } 
}

// changeImage();



aboutLink.addEventListener('click', () => {
    history.pushState({}, '', 'about');                     // about nav kecid linkleri
    changeImage();
})
strategiesLink.addEventListener('click', () => {
    history.pushState({}, '', 'strategies');                // about nav kecid linkleri
    changeImage();
})
cooperationLink.addEventListener('click', () => {
    history.pushState({}, '', 'cooperation');               // about nav kecid linkleri
    changeImage();
})
responsibilityLink.addEventListener('click', () => {
    history.pushState({}, '', 'responsibility');                // about nav kecid linkleri
    changeImage();
})