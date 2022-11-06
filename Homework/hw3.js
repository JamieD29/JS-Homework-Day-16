function factorialNumber(){
    var facNumber= +document.getElementById('factorialN').value;
    var n = facNumber;
    var result = 1;
    for(var i=1; i<= n; i++){
        result *= i;
    }
    document.getElementById('factorialNum').innerHTML = facNumber;
    document.getElementById('Ex3Result').innerHTML = result;
    document.getElementById('Ex3WholeResult').style.opacity = 1;
}
