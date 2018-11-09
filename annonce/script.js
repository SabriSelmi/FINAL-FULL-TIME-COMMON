$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

document.getElementById('kallih').addEventListener('click',function(){
document.getElementById('remove').style.display="none";
document.getElementById('alert').style.display="block";
});

document.getElementById('Passih').addEventListener('click',function(){
    document.getElementById('remove').style.display="none";
    });
    



  document.getElementById('send').addEventListener("click", function(){
    var b = document.getElementById('message-text');
    var x = document.getElementById('recipient-name');
    var aa = document.getElementById('card-title');
    var bb = document.getElementById('card-text');
    var ab = document.getElementById('data-date');
    var dd = document.getElementById('myDate').value;
    
    var container= document.getElementById('flip-container');
    var xx = document.getElementById("mySelect").value;
    var durer = document.getElementById('durrer');
   durer.innerHTML =xx;
    aa.innerText= x.value+" places";   
    ab.innerText = dd;
    bb.innerText = b.value;
    container.style.display="block";
    



    var countDownDate = new Date(document.getElementById('data-date').innerHTML).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
/******************** */

});
/********************** */
function myFunction(e) {
    var x = document.getElementById("myDate").value;
    document.getElementById("demo").innerHTML = x;
    
}

/********************* */
// Set the date we're counting down to

