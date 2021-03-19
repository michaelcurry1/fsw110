function add(a, b){
    var w = a + b;
    return w
}

var addButton = document.getElementById("addButton")
addButton.addEventListener("click", function(){
var firstAdd = Number(document.getElementById("firstAddN").value);
var secondAdd = Number(document.getElementById("secondAddN").value);
var x = add(firstAdd,secondAdd)
var ans = document.getElementById("answer")
ans.textContent = x

});

function sub(a, b){
    var w = a - b;
    return w
}

var subButton = document.getElementById("subButton")
subButton.addEventListener("click", function(){
var firstsub = Number(document.getElementById("firstSubN").value);
var secondsub = Number(document.getElementById("secondSubN").value);
var x = sub(firstsub,secondsub)
var ans = document.getElementById("answer")
ans.textContent = x

});

function mul(a, b){
    var w = a * b;
    return w
}

var mulButton = document.getElementById("mulButton")
mulButton.addEventListener("click", function(){
var firstMul = Number(document.getElementById("firstMulN").value);
var secondMul = Number(document.getElementById("secondMulN").value);
var x = mul(firstMul,secondMul)
var ans = document.getElementById("answer")
ans.textContent = x

});

