// window.addEventListener("load",function(){
//     let btn=document.getElementById("createData");
//     btn.addEventListener("click",createData)
// })

// function createData(){
//     event.preventDefault();
//     var data=document.getElementById("form");
//     let form= new FormData(data);
//     let firstName=form.get('firstName');
//     let lastName=form.get('lastName');
//     var userName=form.get('userName');
//     let email=form.get('email');
//     var password=form.get('password');

//     var payload = {
//         name:userName,
//         password:password,
//         email:email
//     }
//     if(localStorage.getItem("users")){
//         var users=localStorage.getItem("users");
//         users=JSON.parse(users);
//         console.log("line 1");
//         for(var i=0;i<users.length;i++){
//             if(users[i].name==userName){
//                 alert("User Already Exist!");
//                 return;
//             }
//         }
//         for(var j=0;j<users.length;j++){
//             if(users[j].email==email){
//                 alert("User Already Exist!");
//                 return;
//             }
//         }
//         users.push(payload);
//         localStorage.setItem('users',JSON.stringify(users));
       
//     }
//     else{
//         localStorage.setItem("users","[]");
//         var users=localStorage.getItem("users");
//         users=JSON.parse(users);
//         users.push(payload);
//         localStorage.setItem('users',JSON.stringify(users));
//     }
    
//     location.assign("login.html");
   
//     // verifydata();
 
// }


var array;
var name;
var email;
var password;
var date;

    function loaddata(key){
    return JSON.parse(localStorage.getItem(key));
    }
    console.log(localStorage.getItem("customerDetails"))
    
    function savedata(key,list){
        localStorage.setItem(key,JSON.stringify(list))
    }
    
    window.addEventListener('load',function(){
        array=loaddata('customerDetails')||[];
        var form=document.querySelector('form');
        form.addEventListener('submit',submit)
    })

    function submit(){
        event.preventDefault();
        var form=new FormData(event.target)
         name=form.get('userName')
         email=form.get('email');
         password=form.get('password')
         date=Date();
        var c=false;
    
            if(array.length!=0){//if there is no data available in the local storage go to line no- 62 
                                // else enter below block
           
                         //checking whether the user already exsists or not
                for(var i=0;i<array.length;i++){
                        if(email==array[i].email){  
                            c=true;
                            break;
                        }          
                 }
                 
                    //if the user already exsits prints below msg
                    if(c){
                            var showerror=document.getElementById('showerror')
                            showerror.textContent='user already exists'
                          } 
                    //if email and password matches moving to dashboard.html
                    else
                    {   
                        document.querySelector('form').reset();
                        var showerror=document.getElementById('showerror')
                        localStorage.setItem('present_user',JSON.stringify(email));
                        showerror.textContent="";
                        details();
                        location.assign("login.html")
                    }          
            }
            else if(array.length==0){
                details();
            }


            function details(){
                var customerDetails = {
                    name: name,
                    email: email,
                    password: password,
                    transactions: [
                                        {title:"", type: "", amount:0},
                                    ]
                    }
            
                    array.push(customerDetails)
                    savedata('customerDetails',array)
            
            }
            
                    
                    
          
    
        
    }

