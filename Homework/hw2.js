function sumWithPower(){
            var x = +document.getElementById('Xnumber').value; 
            var n = +document.getElementById('Nnumber').value;
            var sum = 0;
            if(x === 0 || n === 0){
                alert("Vui lòng nhập số x và số n !!");
                return;
            }
            for(var i = 0; i <= n; i++ ){
                if(i === 0 ){
                    sum += 0;
                }else{
                sum += Math.pow(x,i);}
            }
            document.getElementById('nResult').innerHTML=n;
            document.getElementById('Ex2Result').innerHTML=sum;
            document.getElementById('ex2WholeResult').style.opacity=1;
    }