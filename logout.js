window.addEventListener('load',function(){
    let login=document.getElementById('login')
    login.addEventListener('click',changePage)
     let signup=document.getElementById('sign-up')
     signup.addEventListener('click',changeToSignUp)
})

function changePage(){
    location.href="login.html"
}
function changeToSignUp(){
    location.href="signup.html"
}