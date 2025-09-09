// buat function untuk menentukan pilihan computer
function getPilihanComputer() {
    const comp = Math.random();
    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

// buat function untuk menentukan rules hasil game nya
function getHasil(comp, player) {
    if(player == comp) return 'SERI!';
    if(player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if(player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if(player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
}

// membuat function agar gambar komputer bergerak
function putar() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100);
}

// ambil class gajah, semut, dan orang
// const gambarGajah = document.getElementsByClassName('gajah')[0];
// const gambarOrang = document.getElementsByClassName('orang')[0];
// const gambarSemut = document.getElementsByClassName('semut')[0];

// manipulasi event gambar gajah
// gambarGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = gambarGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.getElementsByClassName('info')[0];
//     info.textContent = hasil;
// })

// manipulasi event gambar orang
// gambarOrang.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = gambarOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.getElementsByClassName('info')[0];
//     info.textContent = hasil;
// })

// manipulasi event gambar semut
// gambarSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = gambarSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);
    
//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.getElementsByClassName('info')[0];
//     info.textContent = hasil;
// })

// cara yang lebih cepat
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        // mengambil pilihan komputer
        const pilihanComputer = getPilihanComputer();
        // mengambil pilihan player berdasarkan class name nya
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
        // panggil funsgi putar gambar untuk komputer
        putar();

        setTimeout(() => {
            // mengubah gambar pilihan komputer
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', 'img/' + pilihanComputer + '.png');

            // mengambil info hasil
            const info = document.getElementsByClassName('info')[0];
            info.textContent = hasil;
        }, 1000);
    })
})