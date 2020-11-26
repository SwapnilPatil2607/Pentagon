window.addEventListener("load",function(){
    let btn=document.getElementById("createData");
    btn.addEventListener("click",createData)
})

var userData=[]
var userPassword=[]

function createData(){
    event.preventDefault();
    var data=document.getElementById("form");
    let form= new FormData(data);
    console.log(event.target);
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
    userData.push(payload)
    localStorage.setItem('users',JSON.stringify(userData))
   
   
    // verifydata();
    location.assign("login.html");
}

