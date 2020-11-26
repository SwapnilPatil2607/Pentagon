// window.addEventListener('load',function(){
//  var login=document.getElementById("login")
//  login.addEventListener('click',handleData)

//  var signup=document.getElementById('signup')
//  signup.addEventListener('click',changePage)
// })

// var data=[]
// var userdata;

// function handleData(event){
//     event.preventDefault();
//     var form= new FormData(document.getElementById("form"))
//     let userName=form.get('username');
//     let password=form.get('password');
//     if(localStorage.getItem('users')){
//         var target = JSON.parse(localStorage.getItem('users'))
//         console.log(target)
//         for(var i=0;i<target.length;i++){
//             console.log(target[i].name)
//             if(userName == target[i].name && password == target[i].password) {
//                 // console.log(email + 'login successful')
//                 location.href = "dashboard.html"
//             }
//             else if(userName != target[i].name && password != target[i].password){
//                 handleResponse(`Account doesn't exists`)
//             }
//             else if(userName == target[i].name || password != target[i].password) {
//                 handleResponse('Wrong Password')
//                 console.log("wrong user")
            
//             }
            
//         }
//     }
//   else{
//     localStorage.setItem("users","[]");
//     alert("Account Doesn't Exist ");
//   }
// }

// function handleResponse(str){
//     alert(str)
//     var cont = document.getElementById('error') 
//     cont.innerHTML=""
//     var para = document.createElement('para')
//     para.innerHTML=str;
//     cont.appendChild(para)
// }

// function changePage(){
//     location.href="signup.html"
// }


function loaddata(key){
    return JSON.parse(localStorage.getItem(key));
}
var array = loaddata("customerDetails")
var presentUser = loaddata("present_user")


document.querySelector('form').addEventListener('submit',function(){
    event.preventDefault();
     var form= new FormData(event.target)
     var email=form.get('email')
     var password=form.get('password')
     var check=false;
     var email_check=false;
     var password_check=false;
    
     
         for(var i=0;i<array.length;i++){
             if(email==array[i].email&&password==array[i].password){
                 check=true;
                 break;
             }
             if(email==array[i].email&&password!=array[i].password){
                 email_check=true;
                 
             }
             if(email!=array[i].email&&password==array[i].password){
                 password_check=true;
             }
         }
 
         if(check){
             localStorage.setItem('present_user',JSON.stringify(email));
             location.assign("dashboard.html")
         }
         else{
             if(email_check)
             {
                 var showerror=document.querySelector('.error')
                 showerror.textContent='Wrong Password'
             }
             else if(password_check){
                 var showerror=document.querySelector('.error')
                 showerror.textContent='Account doesn’t exists'
             }
             else{
                 var showerror=document.querySelector('.error')
                 showerror.textContent='Email or Password INCORRECT'
             }
             
         }
 
    console.log(email,password)
 })