
const vacancy__openMore = document.querySelectorAll(".vacancy__openMore");
const vacancy__closeMore = document.querySelectorAll(".vacancy__closeMore");

const vacancy = document.querySelectorAll("#vacanciesPage .vacancy");


vacancy__openMore.forEach((item, ind) => {
    item.addEventListener("click", () => {
        vacancy[ind].classList.add("more");
    })
})

vacancy__closeMore.forEach((item, ind) => {
    item.addEventListener("click", () => {
        vacancy[ind].classList.remove("more");
    })
})

