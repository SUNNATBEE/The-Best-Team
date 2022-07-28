let elopen = document.querySelectorAll(".directors-inner-list__top")
let close = document.querySelectorAll(".open-close")
let elremove = document.querySelectorAll(".open-close-bottom")
let elFather = document.querySelectorAll(".directors-inner-list__bottom")

close.forEach(element => {
    element.addEventListener("click", function(){
        elopen.forEach(elm => {
            elm.classList.remove("open")
        })

        element.parentElement.classList.add("open")

        elFather.forEach(elm => {
            elm.classList.remove("open")
        })
    })
});

elremove.forEach(closewindow => {
    closewindow.addEventListener("click", function(){
        elopen.forEach(elm => {
            elm.classList.remove("open")
        })
        closewindow.parentElement.classList.add("open")

        elopen.forEach(elm => {
            elm.classList.remove("open")
        })
    })
});
console.log(elopen)
console.log(elFather)