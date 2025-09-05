// LATIHAN DOM TRAVERSAL
// 1. Ambil elemen <ul> dengan id daftar-buah, lalu tampilkan:
// - parent element-nya
// - semua child element-nya
const daftarBuah = document.getElementById('daftar-buah');
daftarBuah.parentElement;
daftarBuah.children;

// 2. Dari elemen <h2 id="judul-card">, cari:
// - parent element-nya
// - next sibling (yaitu <ul>)
const judul = document.getElementById('judul-card');
judul.parentElement;
judul.nextElementSibling;

// 3. Dari <li> pertama (Apel), cari:
// - nextElementSibling (si Mangga)
// - lastElementChild dari ul
const liPertama = daftarBuah.firstElementChild;
liPertama.nextElementSibling;
daftarBuah.lastElementChild;

// 4. Ambil semua <li> dengan querySelectorAll, lalu akses satu-satu menggunakan:
// - for loop
// - forEach
const semuaLi = document.querySelectorAll('#daftar-buah li');
for(let i = 0; i < semuaLi.length; i++) {
    console.log("for loop:", semuaLi[i].textContent);
}
semuaLi.forEach(item => {
    console.log("forEach:", item.textContent);
});