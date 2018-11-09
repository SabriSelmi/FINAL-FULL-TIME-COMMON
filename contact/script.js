function validateEmail(){
    if(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]+[a-z]{2})*$/.test(email.value)===false){
      document.getElementById('alert_email').style.display="block";
      document.getElementById("email").style.border=" 1px solid orangered";
    }else{
      document.getElementById('alert_email').style.display="none";
     email.style.border="1px solid green";
    }
  }

  function validateMessage(){
    if(document.getElementById('exampleFormControlTextarea1').value='Message'){
      document.getElementById('alert_message').style.display="block";
      document.getElementById("exampleFormControlTextarea1").style.border=" 1px solid orangered";
    }else{
      document.getElementById('alert_message').style.display="none";
      document.getElementById("exampleFormControlTextarea1").style.border="1px solid green";
    }
  }


 
  