var elRotationBtns = document.querySelectorAll(".item__button");

elRotationBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.parentElement.classList.toggle("item__wrapper--active");
    })
})