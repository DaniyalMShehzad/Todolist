
var list = document.getElementById('list')


function addingtodo(){
    var todo_list = document.getElementById("todo-list")


    var li = document.createElement('li')
    var li_Text = document.createTextNode(todo_list.value)
    li.appendChild(li_Text)



    var delBtn =document.createElement("button")
    var delText =document.createTextNode("Delete")
    delBtn.appendChild(delText);

    delBtn.setAttribute('class','btn')
    delBtn.setAttribute('onclick','delTask(this)')


    var editBtn = document.createElement('button');
    var editText =document.createTextNode('Edit')
    editBtn.appendChild(editText)

    editBtn.setAttribute('class','btn')
    editBtn.setAttribute('onclick','editItem(this)')


    li.appendChild(delBtn)
    li.appendChild(editBtn)




    list.appendChild(li)
    todo_list.value = "";
}

function delTask(e){
    e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = "";
}


function editItem(e){
   e.parentNode.firstChild.nodeValue = prompt('Edit your Task',e.parentNode.firstChild.nodeValue)


} 