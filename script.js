var acc = document.getElementsByClassName("list-item");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].onclick = function(){

    var panel = this.querySelector("footer");

    if (panel.style.display === "block") {
    panel.style.display = "none";
 } else {
        panel.style.display = "block";
  }
}

}


var todo = document.getElementsByClassName('edit');
var i;

for (i = 0; i < todo.length; i++) {
todo[i].onclick = function(){
var main = document.getElementById('first');
var update = document.getElementById('third');
main.style.display = 'none';
update.style.display = 'block';
var taskTitleMain = document.getElementsByClassName('span-item-title')[0].textContent;
var taskTitleInput = document.getElementById("taskTitle");
taskTitleInput.value = taskTitleMain;

for (var j = 0; j < taskTitleMain.length; j++) {


}

  }

}
