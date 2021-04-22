var listItems = document.getElementById("list");
var addButton = document.getElementById("add-button");
var newItemName = document.getElementById("item-name");

addButton.onclick = addListItem;

function addListItem() {
  if (newItemName.value != "") {
    var newItem = document.createElement('li');
    newItem.innerHTML = newItemName.value;
    //newItem.addEventListener("click", deleteItem)
    listItems.appendChild(newItem);
    newItemName.value = "";
  } else {
    alert("Please add a name to the item!")
  }
}

listItems.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.nodeName === "LI") {
    e.target.parentNode.removeChild(e.target);
  }
}
