function add(a, b){
    var w = a + b;
    return w
}

var addButton = document.getElementById("addButton")
addButton.addEventListener("click", function(){
var firstAdd=document.getElementById("firstAddN")
var secondAdd=document.getElementById("secondAddN")
var x = add(firstAdd,secondAdd)
var ans = document.getElementById("answer")
ans.textContent = x



});