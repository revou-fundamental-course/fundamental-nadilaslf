
function replaceName(){
    let nama = prompt("Halo, siapakah nama anda?", ""); //buat minta masukkan, user sebagai default
    document.getElementById("name").innerHTML = nama; //ganti dalem html nya dengan nama
}

let tombol = document.getElementById("tombol").addEventListener("click", function(){
    replaceName();
}); 

var slideIndex=1;
var n;
showDivs(slideIndex);

function plusDivs(n){
    showDivs((slideIndex += n));
}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if(n>imgList.length) slideIndex=1;
    else if(n<1) slideIndex=imgList.length;

    for(i=0;i<imgList.length;i++){
        imgList[i].style.display="none";
    }

    imgList[slideIndex-1].style.display="block";
}

setInterval(() => {
    plusDivs(1);
}, 1000) //biar jalan setiap 1000 ms atau 1s

function validateForm(){
    const form = document.forms["message-form"];
    const nama = form["full-name"].value.trim();
    const birthDate = form["birth-date"].value.trim();
    const gender = form["gender"].value.trim();
    const messages = form["message"].value.trim();

    if(nama=='' || birthDate=='' || gender=='' || messages==''){
        document.getElementById('error-name').innerHTML="Tidak boleh kosong";
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    // console.log(nama);
    // console.log(birthDate);
    // console.log(gender);
    // console.log(messages);


    // document.getElementById("name").innerHTML=nama;
    // document.getElementById("error-name").innerHTML="";//biar error nya ilang

    setSenderUI(nama, birthDate, gender, messages);

    return false;
}

function setSenderUI(nama, birthDate, gender, messages){
    document.getElementById("sender-full-name").innerHTML=nama;
    document.getElementById("sender-birth-date").innerHTML=birthDate;
    document.getElementById("sender-gender").innerHTML=gender;
    document.getElementById("sender-messages").innerHTML=messages;
}

//show divs buat geser geser otomatis, -1 akan mundur, +1 akan maju
//ada looping jika i kurang dari banyak gambar, diplay di none, gk muncul gambarnya
//display block akan dimunculkan

