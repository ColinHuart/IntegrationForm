
/*function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
    }*/
    
    function Verification(){
        var Prenom = document.getElementById('FirstName').value;
        var Email = document.getElementById('Email').value;
        var Nom = document.getElementById('LastName').value;
        var Password = document.getElementById('Password').value;
    
    
    if(Prenom==''){
        button();
        /*document.getElementById('FirstName').style.borderColor="rgb(255, 122, 122) ";
        document.querySelector('.pb1').style.visibility="visible"
        document.getElementById('FirstName').style.backgroundImage="url(icon-error.svg)";*/
        modif("FirstName", ".pb1");
    
    } else{
        modifnul("FirstName", ".pb1");
        
    }
   
    if(Email=='') {
        button();
      /*  document.getElementById('Email').style.borderColor="rgb(255, 122, 122)";
        document.querySelector('.pb3').style.visibility="visible"
        document.getElementById('Email').style.backgroundImage="url(icon-error.svg)";*/
        document.getElementsByName('Email')[0].placeholder='email@example.com';
        /*document.getElementById('Email').style.color='rgb(255, 122, 122)';*/
        modif("Email", ".pb3")
    }else{
        modifnul("Email", ".pb3")
    }
    
    if(Nom==''){
        button();
        /*document.getElementById('LastName').style.borderColor="rgb(255, 122, 122) ";
        document.querySelector('.pb2').style.visibility="visible"
        document.getElementById('LastName').style.backgroundImage="url(icon-error.svg)";
    */ modif("LastName", ".pb2")
    
    }
    else{
        modifnul("LastName", ".pb2")
    }
    if(Password==''){
        button();
        /*document.getElementById('Password').style.borderColor="rgb(255, 122, 122) ";
        document.querySelector('.pb4').style.visibility="visible";
        document.getElementById('Password').style.backgroundImage="url(icon-error.svg)";
        */
       modif("Password", ".pb4");
    } else{
        modifnul("Password", ".pb4");

    }
}
    //if(true)
    
    function modif(elem, classe){
        document.getElementById(elem).style.borderColor="rgb(255, 122, 122) ";
        document.querySelector(classe).style.visibility="visible";
        document.getElementById(elem).style.backgroundImage="url(icon-error.svg)";
         }
    function modifnul(elem, classe){
        document.getElementById(elem).style.borderColor="rgb(151, 151, 151, 0.25 )";
        document.querySelector(classe).style.visibility="hidden";
        document.getElementById(elem).style.backgroundImage="none";
    }
    

function button(){
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];


        modal.style.display = "block";

    span.onclick = function() {
    modal.style.display = "none";   
    }


    window.onclick = function(event) {
        if (event.target == modal) {
    modal.style.display = "none";
    }
    } 
}