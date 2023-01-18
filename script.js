let nome = document.querySelector('#iname');
let lastname = document.getElementById("ilastname");
let email = document.getElementById("iemail");
let password = document.getElementById("ipassword");

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let spans = document.querySelectorAll('.spans');
let campos = document.querySelectorAll('.required')

//CORRIGIR FUNÇOES DE ERRO!

function setErro(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeErro(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setErro(0);
    }else{
        removeErro(0);
}
}

function lastNameValidate(){
    if(campos[1].value.length < 3){
        setErro(1); 
       
    }else{
       removeErro(1);
    }
}

function emaliValidate(){
    if(emailRegex.test(email.value)){
        removeErro(2);
    }else{
        setErro(2);
    }
}

function passwordValidate(){
    if(password.value.length < 6){
        setErro(3);
    }else{
        removeErro(3);
    }
}