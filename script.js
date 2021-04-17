function compute()//Calcula el valor del interés
{
    var principal = document.getElementById("principal").value;//Crea variable interna 
    var rate = document.getElementById("rate").value;//Interés
    var years = document.getElementById("years").value;//Años
    var interest = principal*years*rate/100;//Resultado

    var year = new Date().getFullYear()+parseInt(years)//Calcula el año final

    if( check_principal() == true)   {  
       document.getElementById("result").innerHTML = 
       "If you deposit <mark>" + principal + "</mark>,<br>" +  
       "at an interest rate of <mark>" + rate + "%</mark>.<br>" + 
       "You will receive an amount of <mark>" + interest + "</mark>, <br>" + 
       "in the year <mark>" + year + "</mark><br>"
    }  

}
      
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}

function check_principal(){//verifica si la cantidad es negativa
    var p = document.getElementById("principal");//captura la cantidad inicial

    if(p.value == 0 || p.value < 0){//revisa si la cantidad inicial es mayor que 0
        alert("Enter a positive number");//warning
        p.focus();//devuelve el foco a p
        document.getElementById("result").innerHTML = "";//borra resultado
        return false; //si falla es falso
    }
    return true;//si ok devuelve true
}