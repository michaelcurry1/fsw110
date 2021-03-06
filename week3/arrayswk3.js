var newE = document.createElement('h1')
newE.textContent = 'Hello World'
document.body.appendChild(newE)

for (let i = 0; i < 10; i ++) {
    const ele = document.createElement("h1");
    ele.innerHTML = "Hello world";
    document.body.appendChild(ele);
}

const array = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']
array.forEach(function(item) {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);
  });
