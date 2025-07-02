let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt => {
    evt.preventDefault();
    // scrollContainer.scrollLeft += evt.deltaY;
    // scrollContainer.style.scrollBehavior = "auto";
    scrollContainer.scrollBy({ left: evt.deltaX || evt.deltaY, behavior: "auto" });
}));

nextBtn.addEventListener("click", () => {
    // scrollContainer.style.scrollBehavior = "smooth";
    // scrollContainer.scrollLeft += 900;
    scrollContainer.scrollBy({ left: 900, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
    // scrollContainer.style.scrollBehavior = "smooth";
    // scrollContainer.scrollLeft -= 900;
    scrollContainer.scrollBy({ left: -900, behavior: "smooth" });
    console.log("dipencet back");
})
