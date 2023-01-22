const namaGw = "Yohanes Pambudi"
let usia = 10

let biodata = document.getElementById('biodata')


function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "anda generasi remaja"
    } else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa"
    } else if (usia >= 30) {
        generasi = "generasi tua"
    } else if (usia > 2 && usia < 10) {
        generasi = "anda anak-anak"
    }
    else {
        generasi = "wah elu masih bayek yak? 😅"
    }

    return biodata.innerHTML = generasi;

}


console.log(namaGw, usia);
generateBiodata();
