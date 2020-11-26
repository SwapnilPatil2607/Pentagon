window.addEventListener("load",function(){
    let btn=document.getElementById("createData");
    btn.addEventListener("click",createData)
})

function createData(){
    event.preventDefault();
    var data=document.getElementById("form");
    let form= new FormData(data);
    let firstName=form.get('firstName');
    let lastName=form.get('lastName');
    var userName=form.get('userName');
    let email=form.get('email');
    var password=form.get('password');

    var payload = {
        name:userName,
        password:password,
        email:email
    }
    if(localStorage.getItem("users")){
        var users=localStorage.getItem("users");
        users=JSON.parse(users);
        console.log("line 1");
        for(var i=0;i<users.length;i++){
            if(users[i].name==userName){
                alert("User Already Exist!");
                return;
            }
        }
        for(var j=0;j<users.length;j++){
            if(users[j].email==email){
                alert("User Already Exist!");
                return;
            }
        }
        users.push(payload);
        localStorage.setItem('users',JSON.stringify(users));
       
    }
    else{
        localStorage.setItem("users","[]");
        var users=localStorage.getItem("users");
        users=JSON.parse(users);
        users.push(payload);
        localStorage.setItem('users',JSON.stringify(users));
    }
    
    location.assign("login.html");
   
    // verifydata();
 
}

