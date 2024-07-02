
function replaceName(){
    let nama = prompt("Halo, siapakah nama anda?", ""); //buat minta masukkan, user sebagai default
    document.getElementById("name").innerHTML = nama; //ganti dalem html nya dengan nama
//console.log(nama);
}

let tombol = document.getElementById("tombol").addEventListener("click", function(){
    replaceName()
}); //setiap di klik, maka panggil replace name

document.getElementById("name-input").addEventListener("onKeyup", function(nama){
    console.log(nama)
})

function validateForm(){
    const nama=document.forms['message-form']['full-name'].value;
    const birthDate = document.forms['message-form']['birth-date'].value;
    const gender = document.forms['message-form']['gender'].value;
    const messages =document.forms['message-form']['messages'].value;

    if(nama=='' || birthDate=='' || gender=='' || messages==''){
        document.getElementById('error-name').innerHTML="Tidak boleh kosong"
        allert("Tidak boleh ada yang kosong")
        return false
    }

    document.getElementById("name").innerHTML=nama;
    document.getElementById("error-name").innerHTML="";//biar error nya ilang

    setSenderUI(nama, birthDate, gender, messages);

    return false;
}

function setName(nama, birthDate, gender, messages){
    document.getElementById("sender-full-name").innerHTML=nama;
    document.getElementById("sender-birth-date").innerHTML=birthDate;
    document.getElementById("sender-gender").innerHTML=gender;
    document.getElementById("sender-messages").innerHTML=messages;
}
