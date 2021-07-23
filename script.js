var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
itemList.addEventListener('click',removeItem);
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
if(newItem.trim()!="")
{
    var li = document.createElement('li');
    var span= document.createElement('span');
    span.appendChild(document.createTextNode(newItem));
    li.appendChild(span);
    var deleteBtn = document.createElement('button');
    deleteBtn.className="delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    
   
}
document.getElementById('item').value=""
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure")){
            var li= e.target.parentElement;
            itemList.removeChild(li);
        }
       
    }

    else{
        if(e.target.style.textDecorationLine == "line-through"){
            e.target.style.textDecorationLine = "none";
        }
        else{
            e.target.style.textDecorationLine = "line-through";
            e.target.parentElement.style.backgroundColor="#6699ff";
            
        }
    }
}
