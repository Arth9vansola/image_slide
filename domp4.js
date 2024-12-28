// var elem1 = document.querySelector("#elem1")
// var elimg = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function (dets) {
//     elimg.style.left = dets.x + "px"
//     elimg.style.top = dets.y + "px"
// })
// elem1.addEventListener("mouseenter", function (dets) {
//     elimg.style.opacity = 1

// })
// elem1.addEventListener("mouseleave", function (dets) {
//     elimg.style.opacity = 0

// })

var elem = document.querySelectorAll(".elem")
elem.forEach(function (val) {
   
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove", function (dets) {
        val.childNodes[3].style.left = dets.x+"px"
    })
})