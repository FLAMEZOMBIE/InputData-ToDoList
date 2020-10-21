function getdata() {
    var nama = document.getElementById('nama').value;
    if (nama != "") {
        document.getElementById('pnama').innerHTML = nama;
    } else {
        var n = "Anda Belum Mengisi Nama !"
        document.getElementById('pvn').innerHTML = n;
    }


    var email = document.getElementById('email').value;
    if (email != "") {
        document.getElementById('pemail').innerHTML = email;
    } else {
        var e = "Anda Belum Mengisi Email !"
        document.getElementById('pve').innerHTML = e;
    }

    var negara = document.getElementById('Negara').value;
    if (negara != "") {
        document.getElementById('pnegara').innerHTML = negara;
    } else {
        var ne = "Anda Belum Memilih Negara !"
        document.getElementById('pvne').innerHTML = ne;
    }


    var thn = document.getElementById('tahun').value;
    if (thn != "") {
        document.getElementById('ptahun').innerHTML = 2020 - thn + " tahun";
    } else {
        var ta = "Anda Belum Mengisi Tahun Lahir !"
        document.getElementById('pvta').innerHTML = ta;
    }


    var jenis = new Array();
    var jenis = document.getElementsByName("jeniskelamin");
    if (jenis[0].checked === true) {
        var j = jenis[0].value;
    } else if (jenis[1].checked === true) {
        var j = jenis[1].value;
    } else if (jenis[2].checked === true) {
        var j = jenis[2].value
    } else {
        var jk = "Anda Belum Memilih Jenis Kelamin !"
        document.getElementById('pvjk').innerHTML = jk;
    }
    document.getElementById("pJK").innerHTML = j;

}

$(document).ready(function() {
    $("#show").click(function() {
        $("#tabel").show();
    });
});