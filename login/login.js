document.getElementById('toggle').addEventListener('click',flip)
function flip(){
  document.getElementById('card').style.transform='rotateY(180deg)'
  document.getElementById('card').style.transition='transform 0.8s'
  document.getElementById('card').style.transformStyle='preserve-3d'
  document.getElementById('back').style.transform='rotateY(180deg)'
  // document.getElementById('back').style.backfaceVisibility='hidden'

  document.getElementById('front').style.display='none'
  document.getElementById('back').style.display='block'

}

document.getElementById('toggleback').addEventListener('click',flipback)
function flipback(){
  document.getElementById('back').style.display='none'
  document.getElementById('front').style.display='block'
  document.getElementById('card').style.transform='rotateY(360deg)'
  document.getElementById('card').style.transition='transform 0.8s'
  document.getElementById('card').style.transformStyle='preserve-3d'
  // document.getElementById('front').style.backfaceVisibility='hidden'
}



var password = document.getElementById("password");
var confirm_password = document.getElementById("repassword");
var email = document.getElementById("email");
var name = document.getElementById("firstname");
function validatePassword(){
  if(password.value !== confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
   document.getElementById('alert_passconfirm').style.display="block";
   document.getElementById("repassword").style.border=" 1px solid orangered";
  } else{
    confirm_password.setCustomValidity("");
    document.getElementById('alert_passconfirm').style.display="none";

    document.getElementById("repassword").style.border="1px solid green";
  }
}
function validateEmail(){
  if(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]+[a-z]{2})*$/.test(email.value)===false){
    document.getElementById('alert_email').style.display="block";
    document.getElementById("email").style.border=" 1px solid orangered";
  }else{
    document.getElementById('alert_email').style.display="none";
   email.style.border="1px solid green";
  }
}
function validatePass(){
  if(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password.value)===false){
    document.getElementById('alert_pass').style.display="block";
    document.getElementById("password").style.border=" 1px solid orangered";
  }else{
    document.getElementById('alert_pass').style.display="none";
   password.style.border="1px solid green";
  }
}
function ValidateName(){
  if(/[A-Za-z]^.{4,}/.test(name.value)===false){
    document.getElementById('alert_name').style.display="block";
    name.style.border=" 1px solid orangered";
  }else{
    document.getElementById('alert_name').style.display="none";
   name.style.border="1px solid green";
  }
}



function CheckPassword(){
  let a =document.getElementById('pass').value;
  if (a !== "Gomycode123" && document.getElementById('mail12').value!=="gomycode@yahoo.fr"){
 document.getElementById('alert12').style.display="block"; }
 else{
    document.getElementById('form12').action="../profil/accueil.html"
 }
 
}
name.onkeyup=ValidateName;
password.onkeyup=validatePass;
email.onkeyup = validateEmail;
//password.onchange = validatePassword;
repassword.onkeyup = validatePassword;
submit12.onclick=CheckPassword;