var newE = document.createElement('h1')
newE.textContent = 'Welcome to my JS site'
document.body.appendChild(newE)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with JavaScrip'
document.body.appendChild(newP)

var newL = document.createElement(li)
newL.textContent = 'cow'
var myList = document.getElementById('my-list')
myList.appendChild(newL)