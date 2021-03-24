// make the box disapear when the user clicks it
var click = document.querySelector(".red-box")

console.log(click)
click.addEventListener("click", function(){
    click.style.visibility="hidden"
})