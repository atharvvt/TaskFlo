const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

console.log("itemsArray: ", itemsArray);


function clickOnAdd() {
  var inputValue = document.getElementById("userInput").value.trim();
  if (inputValue === "") {
    alert("Please enter something");
  } else {
    createItem(inputValue);
  }
}

//localStorage.removeItem("items");

function displayItem() {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    items += `
    <li id = "listitem" onclick="toggleCheck()" class="list-group-item newlistitem">${itemsArray[i]}<span onclick = "deleteItem()" class = "close" id = "close">&times</span></li>
    `;
    document.getElementById("todolist").innerHTML = items;

    var list = document.querySelector("#listitem");
    list.addEventListener('dblclick', toggleCheck, false)

  }
}

function createItem(item) {
  itemsArray.push(item);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function deleteItem(i) {
  itemsArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

function deleteItems() {
  let delebtn = document.querySelector("#close");
  if (delebtn == null) {
    console.log("itsnull");
  } else {
    for (let i = 0; i < delebtn.length; i++) {
      addEventListener("click", () => {
        deleteItem(i);
      });
    }
  }
}

function toggleCheck() {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checked');
    }
  }

window.onload = function () {
  displayItem();
  deleteItems();
};
