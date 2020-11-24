window.addEventListener('load',function(){
 var login=document.getElementById("login")
 login.addEventListener('click',handleData)

 var signup=document.getElementById('signup')
 signup.addEventListener('click',changePage)
})

var data=[]
var userdata;

function handleData(event){
    event.preventDefault();
    var form= new FormData(document.getElementById("form"))
    let userName=form.get('username')
    let password=form.get('password')
    var target = JSON.parse(localStorage.getItem('users'))
    console.log(target)
    
    for(var i=0;i<target.length;i++){
        console.log(target[i].name)
        if(userName == target[i].name && password == target[i].password) {
            // console.log(email + 'login successful')
            location.href = "dashboard.html"
        }
        else if(userName != target[i].name && password != target[i].password){
            handleResponse(`Account doesn't exists`)
        }
        else if(userName == target[i].name || password != target[i].password) {
            handleResponse('Wrong Password')
            console.log("wrong user")
        
        }
        
    }
}

function handleResponse(str){
    alert(str)
    var cont = document.getElementById('error') 
    cont.innerHTML=""
    var para = document.createElement('para')
    para.innerHTML=str;
    cont.appendChild(para)
}

function changePage(){
    location.href="signup.html"
}

