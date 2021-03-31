

/* The form must have at least 2 inputs (ex: title, description).
On submit, the form should clear inputs and the user’s text should show up in the list below the form.
Each of the items listed out should also display a delete button that removes that item from the list when clicked.
Site must be fully styled and responsive.*/

var submit=document.toDoList
//alert(submit.name)
submit.addEventListener("submit",function(e){
    e.preventDefault()
    //alert(submit.fullName.value)
    var fullName = document.createElement('h2')
    fullName.textContent=submit.fullName.value
    document.body.appendChild(fullName) 

    var email = document.createElement('h2')
    email.textContent=submit.email.value
    document.body.appendChild(email)

    var title = document.createElement('h2')
    title.textContent=submit.title.value
    document.body.appendChild(title)

    var description = document.createElement('h2')
    description.textContent=submit.description.value
    document.body.appendChild(description)


    var deleteButton = document.createElement('button')
    deleteButton.textContent="delete"
    document.body.appendChild(deleteButton)

//style

fullName.style.color="red"
email.style.color="blue"
title.style.color="green"
description.style.color="purple"
toDoList.style.fontSize="50px"

    deleteButton.addEventListener("click",function(e){
    e.preventDefault()

    document.body.removeChild(fullName)
    document.body.removeChild(email)
    document.body.removeChild(description)
    document.body.removeChild(title)

    document.body.removeChild(deleteButton)    
    })
})
    

    
