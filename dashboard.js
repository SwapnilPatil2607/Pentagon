window.addEventListener("load", function () {
  var selall=document.getElementById("selall");
  selall.addEventListener("click",select_all);
  var delsel = document.getElementById("delsel");
  delsel.addEventListener("click", selected);
  var add_task = document.getElementById("add-from-taskbar");
  add_task.addEventListener("click", add_from_taskbar);
  var setting = document.getElementById("signout");
  setting.addEventListener("click", signout);
  loadingtask();
});
var countt = 0;
var countcomp = 0;
function add_from_taskbar() {
  var task_input = document.getElementById("task-bar").value;
  if (task_input != "") {
    var label = document.createElement("label");
    label.textContent = task_input;
    var users=localStorage.getItem("customerDetails");
    users=JSON.parse(users);
    var presentuser=localStorage.getItem("present_user");
    presentuser=JSON.parse(presentuser);
    for(var i=0;i<users.length;i++){
      if(users[i].email==presentuser){
        users[i].tasks.push(task_input);
      }
      console.log(users[i].email);
      console.log(presentuser);
    }
    localStorage.setItem("customerDetails",JSON.stringify(users));
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
    var edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.setAttribute("class", "del");
    edit.addEventListener("click",editing);
    var pertask = document.createElement("div");
    pertask.append(checkbox, label, del,edit);
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
    
    var users=localStorage.getItem("customerDetails");
    users=JSON.parse(users);
    var presentuser=localStorage.getItem("present_user");
    presentuser=JSON.parse(presentuser);
    for(var i=0;i<users.length;i++){
      if(users[i].email==presentuser){
        for(var j=0;j<users[i].tasks.length;j++){
          if(users[i].tasks[j]==event.target.previousSibling.textContent){
           delete users[i].tasks[j];
          }
        }
      }
    }
    localStorage.setItem("customerDetails",JSON.stringify(users));
    event.target.parentNode.remove();
  } else {
    var users=localStorage.getItem("customerDetails");
    users=JSON.parse(users);
    var presentuser=localStorage.getItem("present_user");
    presentuser=JSON.parse(presentuser);
    for(var i=0;i<users.length;i++){
      if(users[i].email==presentuser){
        for(var j=0;j<users[i].tasks.length;j++){
          if(users[i].tasks[j]==event.target.previousSibling.textContent){
           delete users[i].tasks[j];
          }
        }
      }
    }
    localStorage.setItem("customerDetails",JSON.stringify(users));
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
  var stack=[];
  var notchecked=[];
  for (var i = 0; i < alldel.length; i++) {
    if (alldel[i].previousSibling.previousSibling.checked == true) {
      stack.push(alldel[i].parentNode);
    }
    else{
      notchecked.push(alldel[i].parentNode);
    }
  }
  var users=localStorage.getItem("customerDetails");
  users=JSON.parse(users);
  var presentuser=localStorage.getItem("present_user");
  presentuser=JSON.parse(presentuser);
  for(var i=0;i<users.length;i++){
    if(users[i].email==presentuser){
      for(var j=0;j<users[i].tasks.length;j++){
        for(var k=0;k<stack.length;k++){
          if(users[i].tasks[j]== stack[k].childNodes[1].textContent){
            delete users[i].tasks[j];
           }
        }
      }
    }
  }
  localStorage.setItem("customerDetails",JSON.stringify(users));
  for(var j=stack.length-1;j>=0;j--){
      stack[j].remove();
      countcomp++;
      var comp = document.getElementById("completed");
      comp.textContent = countcomp;
      var task_count = document.getElementById("count");
      countt--;
      task_count.textContent = countt;
  }
  for(var i=0;i<users.length;i++){
    if(users[i].email==presentuser){
      for(var j=0;j<users[i].tasks.length;j++){
        for(var k=0;k<notchecked.length;k++){
          if(users[i].tasks[j]==notchecked[k].childNodes[1].textContent){
            delete users[i].tasks[j];
           }
        }
      }
    }
  }
  localStorage.setItem("customerDetails",JSON.stringify(users));
  for(var l=notchecked.length-1;l>=0;l--){
    console.log(notchecked);
    notchecked[l].remove();
    var task_count = document.getElementById("count");
    countt--
    task_count.textContent = countt;
}
 
}
function select_all(){
  var all=document.getElementsByClassName("del");
  if(event.target.checked==true){
    for(var i=0;i<all.length;i++){
      all[i].previousSibling.previousSibling.setAttribute("checked","");
      console.log( all[i].previousSibling.previousSibling);
    }
  }
 if(event.target.checked==false){
  for(var i=0;i<all.length;i++){
    all[i].previousSibling.previousSibling.removeAttribute("checked");
  }
 }
}

function editing(){
  event.target.previousSibling.previousSibling.previousSibling.remove();
  event.target.previousSibling.previousSibling.remove();
  event.target.previousSibling.remove();
  var input=document.createElement("input");
  input.setAttribute("type","text");
  var save=document.createElement("button");
  save.textContent="Save";
  save.addEventListener("click",savechanges);
  save.setAttribute("class","del");
  event.target.parentNode.append(input,save);
  event.target.remove();
}
function savechanges(){
  var inputval=event.target.previousSibling.value;
  for(var i=0;i<inputval.length;i++){
    if(inputval[0]=="" || inputval[0]==" "){
      event.target.previousSibling.style.border="1px solid red";
      break;
    }
   else if(inputval[i]+inputval[i+1]=="  "){
      event.target.previousSibling.style.border="1px solid red";
      break;
    }
    else {
      var label=document.createElement("label");
      label.textContent=inputval;
      event.target.previousSibling.remove();
      var edit = document.createElement("button");
      edit.textContent = "Edit";
      edit.setAttribute("class", "del");
      edit.addEventListener("click",editing);
      var checkbox=document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      var del = document.createElement("button");
      del.textContent = "Delete";
      del.setAttribute("class", "del");
      del.addEventListener("click", deltask);
      event.target.parentNode.append(checkbox,label,del,edit);
      event.target.remove();
      break;
    }
  }
}

function loadingtask(){
  var users=localStorage.getItem("customerDetails");
  users=JSON.parse(users);
  var presentuser=localStorage.getItem("present_user");
  presentuser=JSON.parse(presentuser);
  for(var i=0;i<users.length;i++){
    if(users[i].email==presentuser){
     if(users[i].tasks!=[]){
      for(var j=0;j<users[i].tasks.length;j++){
        if(users[i].tasks[j]!=null){
          var label = document.createElement("label");
          label.textContent = users[i].tasks[j];
          var br = document.createElement("br");
          var checkbox = document.createElement("input");
          checkbox.setAttribute("type", "checkbox");
          var task_count = document.getElementById("count");
          countt++;
          task_count.textContent = countt;
          var del = document.createElement("button");
          del.textContent = "Delete";
          del.setAttribute("class", "del");
          var edit = document.createElement("button");
          edit.textContent = "Edit";
          edit.setAttribute("class", "del");
          edit.addEventListener("click",editing);
          var pertask = document.createElement("div");
          pertask.append(checkbox, label, del,edit);
          var container = document.getElementById("task-container");
          container.appendChild(pertask);
          del.addEventListener("click", deltask);
        }
      }
     }
    }
  }
}