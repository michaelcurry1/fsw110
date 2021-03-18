var div = document.createElement('div');
div.style.height ="200px"
div.style.width ="200px"
div.style.backgroundColor ="white"
document.body.appendChild(div)

// div.addEventListener("click",function(event){
    // event.preventDefault()
    // div.style.backgroundColor = "blue"
// });


window.addEventListener('load' , (event)=> {
    div.style.backgroundColor = "black"
});

div.addEventListener('mouseover' , function(event) {
    div.style.backgroundColor = 'blue'

});

div.addEventListener('mousedown' , function(event) {
    div.style.backgroundColor = 'red'
});

div.addEventListener('mouseup' , function(event){
    div.style.backgroundColor = 'yellow'
});

div.addEventListener('dblclick' , function (event) {
    div.style.backgroundColor = "green"
});

div.addEventListener('wheel' ,function(event){
    div.style.backgroundColor = 'orange'
});

//document.onkeydown = function() {
    //var keyCode = window.event ? window.event.keyCode : event.which;
    //color(keyCode);
//}

//div.addEventListener("keyCode",function(event) {
    //div.style.backgroundColor == "r"== 82;
//})
//function color(keycode){
   // If (keycode === 82)}
   // div.style.backgroundColor = "red";

   document.addEventListener("keydown", function(event) {
    var x = event.key;
    console.log(event.key);
    if (x=="o")
    {
        div.style.backgroundColor = 'orange'
    }
  
    if (x=="r")
    {
        div.style.backgroundColor = 'red'
    }
    if (x=="b")
    {
        div.style.backgroundColor = 'blue'
    }
    if (x=="g")
    {
        div.style.backgroundColor = 'green'
    }

          if (x=="y")
    {
        div.style.backgroundColor = 'yellow'
    }
    if (x=="p")
    {
        div.style.backgroundColor = 'purple'
    }

  })

