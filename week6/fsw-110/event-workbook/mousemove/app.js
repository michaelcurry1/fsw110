var mouse1 = document.querySelector(".red-box")

mouse1.addEventListener("mousemove",function(e){

mouse1.textContent = "x"+ e.clientX + "y"+ e.clientY
});