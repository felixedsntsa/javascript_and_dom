// LATIHAN DOM SELECTION
// 1. Ambil elemen <h1> dengan getElementById. → Simpan ke variabel judul.
const judul = document.getElementById('judul');
judul.innerHTML = 'diubah dengan javascript';
judul.style.color = 'lightblue';

// 2. Ambil semua paragraf dengan class deskripsi menggunakan getElementsByClassName. → Simpan ke variabel paragrafDeskripsi.
const paragrafDeskripsi = document.getElementsByClassName('deskripsi');
paragrafDeskripsi[0].style.color = 'lightgreen';
paragrafDeskripsi[0].style.fontWeight = 'bold';
paragrafDeskripsi[1].style.color = 'salmon';
paragrafDeskripsi[1].style.fontStyle = 'italic';

// 3. Ambil semua elemen <li> di dalam daftar buah dengan getElementsByTagName. → Simpan ke variabel buah.
const buah = document.getElementsByTagName('li');
for(let i = 0; i < buah.length; i++) {
    buah[i].style.color = 'yellow';
}

// 4. Ambil elemen <ul> dengan id daftar-buah menggunakan querySelector. → Simpan ke variabel daftarBuah.
const daftarBuah = document.querySelector('#daftar-buah');
daftarBuah.style.fontWeight = 'bold';

// 5. Ambil semua elemen dengan class item menggunakan querySelectorAll. → Simpan ke variabel itemBuah.
const itemBuah = document.querySelectorAll('.item');
for(let i = 0; i < itemBuah.length; i++) {
    itemBuah[i].style.backgroundColor = 'lightgreen';
}

// 6. Ambil <span> pertama di dalam div .kontainer menggunakan querySelector.
const span1 = document.querySelector('.kontainer span');
span1.style.fontWeight = 'bold';
span1.style.color = 'red';

// 7. Ambil semua <span> di dalam .kontainer menggunakan querySelectorAll.
const semuaSpan = document.querySelectorAll('.kontainer span');
for(let i = 0; i < semuaSpan.length; i++) {
    semuaSpan[i].style.fontStyle = 'italic';
}