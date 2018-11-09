document.getElementById('carta').style.backgroundColor ='rgba(15, 7, 7, 0.8)';
document.getElementById('carta1').style.backgroundColor ='rgba(15, 7, 7, 0.8)';


function myMove() {
    if(document.getElementById('carta').style.backgroundColor !=='lightblue' && document.getElementById('carta').style.backgroundColor !=='rgba(15, 7, 7, 0.75)'){
        document.getElementById('test1').style.display='block'
        let elem = document.getElementById("kalih");
    let elem1 = document.getElementById("kalek");
    let posx =0;
    let posy=0;
    let pos=0;
    let id = setInterval(frame, 30);
     let id1 = setInterval(frame, 30);
    function frame() {
        
        if (posy == 40) {
            clearInterval(id);
        } else {
            posy++; 
            elem.style.top = posy + '%'; 
            // elem.style.left = pos + 'px'; 
        }

       
        if (posx == 25) {
            clearInterval(id1);
        } else
        if(posy == 40) {
            posx++; 
            elem.style.left = posx + '%'; 
            // elem.style.left = pos + 'px'; 
        }


        if (pos == 25) {
            clearInterval(id);
        } else {
            pos++; 
            elem1.style.right = pos + '%'; 
            // elem.style.left = pos + 'px'; 
        }
        
        document.getElementById('carta1').style.backgroundColor='rgba(15, 7, 7, 0.75)'
        document.getElementById('carta').style.backgroundColor='lightblue'
        document.getElementById('carta').style.color='black'
       
        document.getElementById('test1').style.opacity='1';
        for(let j=1;j<6;j++)
        document.getElementById('profile-userpic'+j).style.display='none'
        

    }
   
    }    
}




function myMove1() {
    if(document.getElementById('carta').style.backgroundColor !=='lightblue' && document.getElementById('carta').style.backgroundColor !=='rgba(15, 7, 7, 0.75)')
    {
        document.getElementById('test2').style.display='block'
    let elem = document.getElementById("kalek");
    let elem1 = document.getElementById("kalih");
    let posx =0;
    let posy=0;
    let pos=0;
    let id = setInterval(frame, 30);
     let id1 = setInterval(frame, 30);
    
   
    function frame() {
        
        if (posy == 40) {
            clearInterval(id);
        } else {
            posy++; 
            elem.style.top = posy + '%'; 
            // elem.style.left = pos + 'px'; 
        }

       
        if (posx == 25) {
            clearInterval(id1);
        } else
        if(posy == 40) {
            posx++; 
            elem.style.right = posx + '%'; 
            // elem.style.left = pos + 'px'; 
        }


        if (pos == 25) {
            clearInterval(id);
        } else {
            pos++; 
            elem1.style.left = pos + '%'; 
            // elem.style.left = pos + 'px'; 
        }
        
        document.getElementById('carta').style.backgroundColor='rgba(15, 7, 7, 0.75)'
        document.getElementById('carta1').style.backgroundColor='lightblue'
        document.getElementById('carta1').style.color='black'
        document.getElementById('test2').style.opacity='1';
        for(let j=1;j<6;j++)
        document.getElementById('profile-userpic'+j).style.display='none'
    }
   
    }
   
}


function myMove2() {
if(document.getElementById('carta1').style.backgroundColor =='rgba(15, 7, 7, 0.75)')
{
    document.getElementById('test2').style.display='block'
    let elem = document.getElementById("kalek")
    let elem1 = document.getElementById("kalih")
    let pos=0;
    let pos1=40;
    let id = setInterval(frame, 30);
    function frame() {
    
        if (pos ==40) {
            clearInterval(id);
        } else {
            pos++; 
            pos1--;
            elem.style.top = pos + '%'; 
            elem1.style.top= pos1+ '%';
            // elem.style.left = pos + 'px'; 
        }

    }

    document.getElementById('carta1').style.backgroundColor ='lightblue'
    document.getElementById('carta1').style.color='black'
    document.getElementById('carta').style.backgroundColor ='rgba(15, 7, 7, 0.75)'
    document.getElementById('test1').style.opacity='0';
    document.getElementById('test1').style.display='none'
    document.getElementById('test2').style.opacity='1';
    for(let j=1;j<6;j++)
        document.getElementById('profile-userpic'+j).style.display='none'
    
       
}
}

function myMove3() {
    if(document.getElementById('carta').style.backgroundColor =='rgba(15, 7, 7, 0.75)')
    {
        document.getElementById('test1').style.display='block'
        let elem1 = document.getElementById("kalek")
        let elem = document.getElementById("kalih")
        let pos=0;
        let pos1=40;
        let id = setInterval(frame, 30);
        function frame() {
        
            if (pos ==40) {
                clearInterval(id);
            } else {
                pos++; 
                pos1--;
                elem.style.top = pos + '%'; 
                elem1.style.top= pos1+ '%';
                // elem.style.left = pos + 'px'; 
            }
    
        }
        document.getElementById('carta').style.backgroundColor ='lightblue'
        document.getElementById('carta').style.color='black'
        document.getElementById('carta1').style.backgroundColor ='rgba(15, 7, 7, 0.75)'
        document.getElementById('test1').style.opacity='1';
        document.getElementById('test2').style.opacity='0'
        document.getElementById('test2').style.display='none'
        for(let j=1;j<6;j++)
        document.getElementById('profile-userpic'+j).style.display='none'
        
    }
    }


function accepte(i){
    document.getElementById('accepput'+i).innerHTML='Request accepted! Go and chat!'
    document.getElementById('refuse'+i).style.display='none'
}

function refuse(i){
    document.getElementById('accepput'+i).innerHTML='Request refused! Check another request!'
    document.getElementById('accept'+i).style.display='none'
}

function shake(i){
    document.getElementById('profile-userpic'+i).style.display='block'
    for(let j=1;j<6;j++) 
    if(j !== i)   
    document.getElementById('profile-userpic'+j).style.display='none'
}





