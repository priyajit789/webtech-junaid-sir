function add(value){
    document.getElementById("screen").value += value;
}

function calculate(){
    let exp = document.getElementById("screen").value;


    if(exp === ""){
        alert("Enter something");
    }
    else if("+-*/".includes(exp[exp.length-1])){
        alert("Expression cannot end with operator");
    }
    else{
        document.getElementById("screen").value = eval(exp);
    }
}

function clearScreen(){
    document.getElementById("screen").value = "";
}