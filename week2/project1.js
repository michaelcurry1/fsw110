var html = '<ul>\
              <li>\
                <a href="#">link</a>\
              </li>\
              <li>\
                <a href="#">link</a>\
              </li>\
              <li>\
                <a href="#">link</a>\
              </li>\
            </ul>';

document.getElementById('nav').innerHTML = html;

var drums = document.createElement("H1");  
var learnDrums = document.createTextNode("Lets learn Drums"); 
drums.appendChild(learnDrums); 
 
document.body.appendChild(drums); 

var drums1 = document.createElement("p");
var learnDrums1 = document.createTextNode("paragraph about drums");  
drums1.appendChild(learnDrums1); 
 
document.body.appendChild(drums1); 

var drums2 = ['DW', 'Pearl', 'Ludwiq', 'Slingerland'];
var list = document.createElement('ul');
drum.forEach(function (drum) {
	var li = document.createElement('li');
	li.textContent = drum;
	list.appendChild(li);
});

document.getElementsByTagName('body').onload = function() {KeepFoot()};
var element = document.getElementById('container');
var height = element.offsetHeight;

function KeepFoot() {
    if (height < screen.height) {
        document.getElementById("footer").style.position = "fixed";
        document.getElementById("footer").style.bottom = "0";
        document.getElementById("footer").style.left = "0";
        document.getElementById("footer").style.right = "0";
    }
}
