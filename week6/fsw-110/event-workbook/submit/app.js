// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
 /*/var submit = document.getElementById("submit-me")
var name1 = document.getElementById("name")
var age1 = document.getElementById("age")

object.onsubmit = function(e){myScript};
"e.preventDefault()"
object.addEventListener("submit", myScript);*/

var submit=document.submitMe
//alert(submit.name)
submit.addEventListener("submit",function(e){
    e.preventDefault()
    alert(submit.name.value+" "+ submit.age.value)
    submit.name.value = ""
    submit.age.value = ""
})