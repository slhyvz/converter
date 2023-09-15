document.getElementById("btnConvert1").addEventListener("click", convertFtoC());

function convertFtoC(){
    let Fahrenheit = document.getElementById("inputOne").value;
    let Celsius = (Fahrenheit - 32) / 1.8000
    document.getElementById("demo").innerHTML = Celsius;
    document.getElementById("demo").classList.add("demoStyle");
}

document.getElementById("btnDelete1").addEventListener("click", deleteFtoC());

function deleteFtoC(){
    document.getElementById("demo").innerHTML = " ";
}





document.getElementById("btnConvert2").addEventListener("click", convertCtoF());
document.getElementById("btnDelete2").addEventListener("click", deleteCtoF());


function convertCtoF(){
    let Celsius2 = document.getElementById("inputTwo").value;
    let Fahrenheit2 = Celsius2 * 1.8000 + 32.00
    document.getElementById("demo2").innerHTML =Fahrenheit2;
    document.getElementById("demo2").classList.add("demoStyle");
}

function deleteCtoF(){
    document.getElementById("demo2").innerHTML = " "; 
}