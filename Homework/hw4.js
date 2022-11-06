function createDiv(){
    var coverResult ="";
    var n= +document.getElementById('DivNumber').value;
    if(n===0){
        alert("Cần nhập số thẻ div bạn muốn tạo !!");
        return;
    }
    for(var i =1; i<=n;i++){
        if(i % 2===0){
            coverResult +='<div class="bg-danger p-2"><p class="fs-4 fw-bold text-light"> Chẵn</p></div>';
        }
        else{
            coverResult +='<div class="bg-info p-2"> <p class="fs-4 fw-bold"> Lẻ </p> </div>';
        }
    }
    document.getElementById('DisplayDiv').innerHTML = coverResult;
    

}

function deleteDiv(){
    document.getElementById('DisplayDiv').innerHTML= null;
}

