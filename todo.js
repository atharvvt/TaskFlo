var listnode = document.getElementsByTagName("LI");

for (var i = 0; i < listnode.length; i++) {
  var newlistitem = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  newlistitem.className = "close";
  newlistitem.appendChild(txt);
  listnode[i].appendChild(newlistitem);
}

var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function func(){
    var li = document.createElement("li");
    var word = document.getElementById("myInput").value;
    var txtnode = document.createTextNode(word);
    li.appendChild(txtnode);
    if (word == "") {
        alert("Enter something");
      } else {
        var addedlist = document.getElementById("todolist").appendChild(li);
      }
    localStorage.setItem(word,addedlist);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        };
      }
}

