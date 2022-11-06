function primeNumber(){
    var i = 0, j, checked;
    var number = +document.getElementById('ex5Input').value ;
    while (i <= number) {
        checked = 1;
        if (i != 0 && i != 1) {
            j = 2;
            while(j <= i/2) {
                if(i%j == 0) {
                    checked = 0;
                    break;
                }
                j++;
            }
        } else {
           checked = 0;
        }
 
        if(checked == 1) {
            document.getElementById('ex5Result').innerHTML += i + " " ;
        }
         
       i++;
    }

    document.getElementById('Ex5divResult').style.display = 'block';
    
  
}

function resetPrime(){
    document.getElementById('ex5Result').innerHTML = null;
    document.getElementById('Ex5divResult').style.display = 'none';
}