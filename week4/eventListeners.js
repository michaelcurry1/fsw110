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
    div.style.backgroundColor = 'green'

});

div.addEventListener('mousedown' , function(event) {
    div.style.backgroundColor = 'yellow'
});

div.addEventListener('mouseup' , function(event){
    div.style.backgroundColor = 'blue'
});

div.addEventListener('dblclick' , function (event) {
    div.style.backgroundColor = "red"
});

div.addEventListener('mousemove' ,function(){
    div.style.backgroundColor = 'purple'
});

var motorcycles = ['harley',
                'suzuki',
                'honda',
                'yamaha',
                'indian'
            ]


for(var i = 0; i < motorcycles.length; i++){
    var newName = document.createElement('h2')
newName.textContent = motorcycles[i]
document.body.append(newName)

newName.style.fontSize="20px"
newName.style.fontWeight="lighter"
newName.style.fontFamily="sans-serif"
newName.style.color="cornflowerblue"



newName.classList.add("border")




}

var motorcycles = ['harley',
                'suzuki',
                'honda',
                'yamaha',
                'indian'
            ]


for(var i = 0; i < motorcycles.length; i++){
    var newName = document.createElement('h2')
newName.textContent = motorcycles[i]
document.body.append(newName)

newName.style.fontSize="20px"
newName.style.fontWeight="lighter"
newName.style.fontFamily="sans-serif"
newName.style.color="cornflowerblue"



newName.classList.add("border")




}

var motorcycles = ['harley',
                'suzuki',
                'honda',
                'yamaha',
                'indian'
            ]


for(var i = 0; i < motorcycles.length; i++){
    var newName = document.createElement('h2')
newName.textContent = motorcycles[i]
document.body.append(newName)

newName.style.fontSize="20px"
newName.style.fontWeight="lighter"
newName.style.fontFamily="sans-serif"
newName.style.color="cornflowerblue"



newName.classList.add("border")




}

var motorcycles = ['harley',
                'suzuki',
                'honda',
                'yamaha',
                'indian'
            ]


for(var i = 0; i < motorcycles.length; i++){
    var newName = document.createElement('h2')
newName.textContent = motorcycles[i]
document.body.append(newName)

newName.style.fontSize="20px"
newName.style.fontWeight="lighter"
newName.style.fontFamily="sans-serif"
newName.style.color="cornflowerblue"



newName.classList.add("border")




}