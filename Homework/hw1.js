function findingLowestNumber(){
    var n = 0; 
    var sum =0;
    while(sum< 10000)
    {
    n++;
    sum = sum + n;
    }

    document.getElementById('ex1Result').innerHTML = n ;
}
findingLowestNumber();