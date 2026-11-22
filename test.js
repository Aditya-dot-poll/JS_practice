let K = document.getElementById("Kelvin");
let C = document.getElementById("celsius");
let F = document.getElementById("Fahrenheit");

let BTN = document.getElementById("btn");

BTN.addEventListener("click",conversion);

function conversion(){

    let kel,cel,fah;

    if(K.value === ""&&F.value===""){
        cel =  Number(C.value);
        kel = cel + 273.15;
        fah = cel*1.8 + 32; 
    }
    
    else if(C.value === ""&&F.value===""){
        kel = Number(K.value);
        cel = kel -  273.15;
        fah = 1.8*(kel - 273.15) + 32;
    }

    else if(C.value === ""&&K.value===""){
        fah = Number(F.value);
        cel = 5/9*(fah - 32);
        kel = 5/9*(fah - 32) + 273.15;
    }
    else{
        alert("Wrong input!");
        C.value = "";
        K.value = "";
        F.value = ""; 
        return;

    }

    if (isNaN(cel) || isNaN(kel) || isNaN(fah)) {
    alert("Please enter a valid number!");
    C.value = "";
    K.value = "";
    F.value = "";
    return;
}

if (kel < 0) {
    alert("Temperature cannot be below absolute zero!");
    C.value = "";
    K.value = "";
    F.value = "";
    return;
}
    C.value = cel;
    K.value = kel;
    F.value = fah; 
}