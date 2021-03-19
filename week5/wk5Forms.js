var password1 = document.getElementById("passwd1");
var password2 = document.getElementById("passwd2");

function confirmPassword(){
    if (password1.value != password2.value){
    password2.setCustomValidity("Password doesn't match")
}else{
    password2.setCustonValidity("Account Created")
}
}
password1.addEventListener("change", validatePassword);
password2.addEventListener("keyUp", validatePassword);