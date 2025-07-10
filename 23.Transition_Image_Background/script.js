let ImgBox = document.querySelector(".img-box");
let ImgWrap = document.querySelector(".img-wrap");
let leftSpace = ImgBox.offsetLeft;
let originalImg = document.getElementById("original-img")
let line = document.getElementById("line")

originalImg.style.width = ImgBox.offsetWidth + "px";
ImgBox.onmousemove = function (e) {
    let boxWidth = (e.pageX - leftSpace) + "px"
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth
}