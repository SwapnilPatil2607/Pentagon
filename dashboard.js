window.addEventListener("load",function(){
    var add_task=document.getElementById("add-from-taskbar");
    add_task.addEventListener("click",add_from_taskbar);
});
var countt=0;
function add_from_taskbar(){
   
    var task_input=document.getElementById("task-bar").value;
    if(task_input!=""){
        var label=document.createElement("label");
        label.textContent=task_input;
        var br=document.createElement("br");
        var checkbox=document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        var task_count=document.getElementById("count");
        countt++;
        task_count.textContent=countt;
        var del=document.createElement("button");
        del.textContent = "Delete";
        del.setAttribute("class","del");
        var container=document.getElementById("task-container");
        container.append(checkbox,label,del,br);
    }
  
}