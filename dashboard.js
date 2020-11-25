window.addEventListener("load", function () {
  var selall=document.getElementById("selall");
  selall.addEventListener("click",select_all);
  var delsel = document.getElementById("delsel");
  delsel.addEventListener("click", selected);
  var add_task = document.getElementById("add-from-taskbar");
  add_task.addEventListener("click", add_from_taskbar);
  var setting = document.getElementById("signout");
  setting.addEventListener("click", signout);
});
var countt = 0;
var countcomp = 0;
function add_from_taskbar() {
  var task_input = document.getElementById("task-bar").value;
  if (task_input != "") {
    var label = document.createElement("label");
    label.textContent = task_input;
    var task_input = document.getElementById("task-bar");
    task_input.value = "";
    var br = document.createElement("br");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    var task_count = document.getElementById("count");
    countt++;
    task_count.textContent = countt;
    var del = document.createElement("button");
    del.textContent = "Delete";
    del.setAttribute("class", "del");
    var pertask = document.createElement("div");
    pertask.append(checkbox, label, del);
    var container = document.getElementById("task-container");
    container.appendChild(pertask);
    del.addEventListener("click", deltask);
  }
}
function deltask() {
  if (event.target.previousSibling.previousSibling.checked == true) {
    countcomp++;
    var comp = document.getElementById("completed");
    comp.textContent = countcomp;
    event.target.parentNode.remove();
  } else {
    event.target.parentNode.remove();
  }
  var task_count = document.getElementById("count");
  countt--;
  task_count.textContent = countt;
}
function signout() {
  location.assign("index.html");
}

function selected() {
  var alldel = document.getElementsByClassName("del");
console.log( alldel.length);
var stack=[];
  for (var i = 0; i < alldel.length; i++) {
    if (alldel[i].previousSibling.previousSibling.checked == true) {
      stack.push(alldel[i].parentNode);
    
    }
  }
  for(var j=stack.length-1;j>=0;j--){
      stack[j].remove();
      countcomp++;
      var comp = document.getElementById("completed");
      comp.textContent = countcomp;
      var task_count = document.getElementById("count");
      countt--;
      task_count.textContent = countt;
  }
}
function select_all(){
  var all=document.getElementsByClassName("del");
  for(var i=0;i<all.length;i++){
    all[i].previousSibling.previousSibling.setAttribute("checked","checked");
    console.log( all[i].previousSibling.previousSibling);
  }
}