
var input = document.getElementById("todoInput")
var ulParent = document.getElementById("ulParent")



function addTodo() {
    if (!input.value) {
        alert("Enter Todo Values")
        return
    }
    var liElement = document.createElement("li")

    var liTxt = document.createTextNode(input.value)
    liElement.appendChild(liTxt)

    liElement.className = "list-group-item d-flex align-item-center justify-content-between mt-2 mb-2"

    var div = document.createElement("div")
    var deleteBtn = document.createElement("deletebtn")
    var editBtn = document.createElement("editBtn")
    editBtn.innerHTML = "EDIT"
    ///SET ONCLICK EVENT
    editBtn.setAttribute("onclick", "editTodo(this)")
    deleteBtn.innerHTML = "DELETE"
    ///SET ONCLICK EVENT
    deleteBtn.setAttribute("onclick", "deleteTodo(this)")
    editBtn.className = "btn btn-info"
    deleteBtn.className = "btn btn-danger"
    div.appendChild(editBtn)
    div.appendChild(deleteBtn)

    liElement.appendChild(div)

    //append listing
    ulParent.appendChild(liElement)

    input.value = ""

}
function editTodo(el) {
    console.log("editTodo()", el.parentNode.parentNode.
        firstChild.nodeValue)
    var li = el.parentNode.parentNode

    var placeHolder = li.firstChild.nodeValue
    var editValue = prompt("Edit Todo", placeHolder);

    // console.log("editValue", editValue)

    li.firstChild.nodeValue = editValue

}

function deleteTodo(elem) {

    elem.parentNode.parentNode.remove()
}

function deleteAll(){
    ulParent.innerHTML = ""
}
