const burger = document.querySelector(".burger-menu")
const navMenu = document.querySelector(".nav-menu")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

const filters = document.querySelectorAll(".list li")
const items = document.querySelectorAll(".item")
console.log(filters);

filters.forEach(element => {
    element.addEventListener("click", () => {

        filters.forEach(el => el.classList.remove("all"));
        element.classList.add("all");

        const filterName = element.textContent.trim().toLowerCase()

        items.forEach(item => {
            if (filterName === "all" || item.classList.contains(filterName)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        })

    })
    console.log(element);

    console.log(items);
});


