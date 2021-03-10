var newE = document.createElement('h1')
newE.textContent = 'Hello World'
document.body.appendChild(newE)

for (let i = 0; i < 10; i ++) {
    const ele = document.createElement("h1");
    ele.innerHTML = "Hello world";
    document.body.appendChild(ele);
}

const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']

  
  for (let i = 0; i < names.length; i ++) {
    const ele = document.createElement("h1");
    ele.innerHTML = names[i];
    document.body.appendChild(ele);
  }
