const namaGw = "Yohanes Pambudi"
let usia = 17

 
function generateBiodata() {
    if (usia > 10 && usia < 18) {
        console.log('anda remaja')
    } else if (usia > 18  && usia < 30) {
        console.log("anda dewasa")
    } else {
        console.log("wah elu jenis orang yang mana yak? 😅")
    }
    
}


console.log(namaGw, usia);
generateBiodata();
