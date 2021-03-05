var newE = document.createElement('h1')
newE.textContent = 'Welcome to my JS site'
document.body.appendChild(newE)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with JavaScript'
document.body.appendChild(newP)

var newOl = document.createElement("ol")
document.body.appendChild(newOl)
var li = document.createElement("li")
li.textContent = "cow"
newOl.appendChild(li)