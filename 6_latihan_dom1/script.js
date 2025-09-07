// LATIHAN DOM 1 - BERMAIN DENGAN WARNA7
const tombolUbah = document.getElementsByClassName('btnClick')[0];
// const body = document.querySelector('body');
// bisa langsung pakai document.body
const judul = document.getElementById('judul');
tombolUbah.addEventListener('click', function() {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
});

// membuat tombol baru
const tombolBaru = document.createElement('button');
// membuat isi tulisan tombol
const teksTombol = document.createTextNode('Tombol baru');
// tambah isi tulisan ke tombol baru
tombolBaru.appendChild(teksTombol);
// buat atribut untuk tombol baru
tombolBaru.setAttribute('type', 'button');
// tambah tombol baru setelah tombol pertama
tombolUbah.after(tombolBaru);

tombolBaru.addEventListener('click', function() {
    // math.round untuk membulatkan
    // math.random untuk angka random 1-10
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r +','+ g +','+ b +')';
})

// tangkap slider
// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');
// event input masing - masing slider
// sMerah.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r +','+ g +','+ b +')';
// })

// sHijau.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r +','+ g +','+ b +')';
// })

// sBiru.addEventListener('input', function() {
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = 'rgb(' + r +','+ g +','+ b +')';
// })

// cara yang lebih efektif
const range = document.querySelectorAll('input');
for(let i = 0; i < range.length; i++) {
    range[i].addEventListener('input', function() {
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;
        document.body.style.backgroundColor = 'rgb(' + r +','+ g +','+ b +')';
    })
}

// change body color where user drag their pointer
document.body.addEventListener('mousemove', function(e) {
    // posisi mouse
    // e.clientX
    // e.clientY
    // ukuran browser
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPos +','+ yPos +',100)';
})