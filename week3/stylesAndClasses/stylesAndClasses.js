var motorcycles = ['harley',
                'suzuki',
                'honda',
                'yamaha',
                'indian'
            ]
var motorcycleList = document.getElementById("motorcycle")
console.log(motorcycleList)
for(var i = 0; i < motorcycles.length; i++){
    var newName = document.createElement('h2')
newName.textContent = motorcycles[i]
motorcycleList.append(newName)

newName.style.fontSize="20px"
newName.style.fontWeight="lighter"
newName.style.fontFamily="sans-serif"
newName.style.color="cornflowerblue"



newName.classList.add("border")




}
//for (let i = 0; i < 10; i ++) {
    //const ele = document.createElement("h2");
    //ele.innerHTML = "motorcycle";
   // document.body.appendChild(ele);
//}
//var newName = documen.createElement('h2')
//newMame.textContent = motorcycles[i]
//motorcycleList.append(newName)