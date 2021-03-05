var nav1 = document.createElement("nav")
document.body.appendChild(nav1)
var a1 = document.createElement("a")
a1.href = "https://www.mockplus.com/blog/post/bootstrap-navbar-template"
a1.textContent = 'link '
var a2 = document.createElement("a")
a2.href = "https://colorlib.com/wp/bootstrap-navbar/"
a2.textContent = 'link '
var a3 = document.createElement("a")
a3.href = "https://designmodo.com/bootstrap-navbar/"
a3.textContent = 'link '
nav1.append(a1, a2, a3)

var h1 = document.createElement("h1")
document.body.appendChild(h1)
h1.textContent = 'Welcome to my JS 1st site'

var p1 = document.createElement("p")
document.body.appendChild(p1)
p1.textContent = 'This is my paragraph'

var newOl = document.createElement("ol")
document.body.appendChild(newOl)
var li = document.createElement("li")
li.textContent = "cow"
newOl.appendChild(li)

var li1 = document.createElement("li")
li1.textContent = "cat"
newOl.appendChild(li1)

var li2 = document.createElement("li")
li2.textContent = "dog"
newOl.appendChild(li2)

var footer1 = document.createElement("footer")
document.body.appendChild(footer1)
footer1.textContent = 'This is the footer'