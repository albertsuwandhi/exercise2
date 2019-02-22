function Tambah(e) {
    event.preventDefault();
    var bil1 = parseInt(document.getElementById("Bilangan1").value);
    var bil2 = parseInt(document.getElementById("Bilangan2").value);
    var hasil = bil1 + bil2;
    alert("Jumlah dari " + bil1 + " dan " + bil2 + " adalah : " + hasil);
}

function Kurang(e) {
    event.preventDefault();
    var bil1 = parseInt(document.getElementById("Bilangan1").value);
    var bil2 = parseInt(document.getElementById("Bilangan2").value);
    var hasil = bil1 - bil2;
    alert("Pengurangan " + bil1 + " dan " + bil2 + " adalah : " + hasil);
}

function Kali(e) {
    event.preventDefault();
    var bil1 = parseInt(document.getElementById("Bilangan1").value);
    var bil2 = parseInt(document.getElementById("Bilangan2").value);
    var hasil = bil1 * bil2;
    alert("Perkalian  dari " + bil1 + " dan " + bil2 + " adalah : " + hasil);
}


function Bagi(e) {
    event.preventDefault();
    var bil1 = parseInt(document.getElementById("Bilangan1").value);
    var bil2 = parseInt(document.getElementById("Bilangan2").value);
    var hasil = bil1/bil2;
    alert("Pembagian dari " + bil1 + " dan " + bil2 + " adalah : " + hasil);
}
