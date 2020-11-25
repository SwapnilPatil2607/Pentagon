window.addEventListener('load',function(){
    let btn=document.getElementById('createData')
    btn.addEventListener('click',createData)
})

var userData=[]
var userPassword=[]

function createData(event){
    event.preventDefault()
    let form=new FormData(document.getElementById('form'))
    let firstName=form.get('firstName')
    let lastName=form.get('lastName')
    var userName=form.get('userName')
    let email=form.get('email')
    var password=form.get('password')

console.log(userName)

    var payload = {
        name:userName,
        password:password,
        email:email
    }
    userData.push(payload)
    localStorage.setItem('users',JSON.stringify(userData))
   
   
    verifydata()
}

