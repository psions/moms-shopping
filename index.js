const addForm = document.addItem
const stuff = document.addItem.title
const list = document.getElementById("list")
const deleteBut = document.querySelectorAll(".del")
const editBut = document.querySelectorAll(".edit")
const input = document.getElementById("input")



addForm.addEventListener("submit", (event) => {
    event.preventDefault()
    var listItem = document.createElement("li")
    var listDiv = document.createElement("div")
    var listEdit = document.createElement("button")
    var listDelete = document.createElement("button")


    listDiv.textContent = stuff.value
    listEdit.textContent = "edit"
    listDelete.className = "del"
    listDelete.textContent = "x"
    listDelete.addEventListener("click", deleteParent)

    list.append(listItem)
    listItem.appendChild(listDiv)
    listItem.appendChild(listEdit)
    listItem.appendChild(listDelete)



    stuff.value = ""
    
})

for (i = 0; i < deleteBut.length; i++){
deleteBut[i].addEventListener("click", deleteParent)

}


function editParent(){
    let editBut = prompt("edit")
    this.parentNode.firstChild.textContent = editBut
    if (button.textContent == "edit"){
        const span = li.firstElementChild;
        const input = document.createElement("input")
        input.type = "text"
        input.value = span.textContent
        li.insertBefore(input, span)
    }
}

function deleteParent(){
    let thisBut = event.currentTarget
    thisBut.parentNode.remove();
    for( i = 0; i < list.children.length; i++){
        listEdit[i].addEventListener("click", editParent)
        this.addEventListener("click", deleteParent)
    }
}
