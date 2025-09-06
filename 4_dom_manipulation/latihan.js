// LATIHAN DOM MANIPULATION
// 1. MENGUBAH TEKS
// - Ubah isi <h1> jadi "Halo, ini judul baru!".
// - Ubah isi paragraf .deskripsi jadi "Paragraf sudah diupdate.".

const judulBaru = document.getElementById('judul');
judulBaru.innerHTML = 'Halo, ini judul baru!'

const deskripsiBaru = document.getElementsByClassName('deskripsi')[0];
deskripsiBaru.innerHTML = 'Paragraf sudah diupdate.'

// 2. Mengubah style
// - Ubah warna teks <h1> jadi biru.
// - Ubah background paragraf jadi kuning.

judulBaru.style.color = 'blue';
deskripsiBaru.style.backgroundColor = 'yellow';

// 3. Menambah elemen
// - Tambahkan item baru "Pisang" ke dalam daftar <ul>.
// membuat elemen li baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Pisang')

// menambahkan isi ke elemen li baru
liBaru.appendChild(teksLiBaru);

const ulBaru = document.getElementById('daftar-buah');
// tambahkan li baru ke ul
ulBaru.appendChild(liBaru);

// - Tambahkan <p> baru di dalam .kontainer dengan isi "Ini paragraf baru di kontainer".
// membuat elemen p baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Ini paragraf baru di kontainer.')

// menambahkan isi ke p baru
pBaru.appendChild(teksPBaru);

const cont = document.getElementsByClassName('kontainer')[0];
// tambahkan p baru ke kontainer
cont.appendChild(pBaru);

// 4. Menghapus elemen
// - Hapus <li> pertama (Apel) dari daftar buah.
const liHapus = ulBaru.querySelector('li:nth-child(1)');
ulBaru.removeChild(liHapus);

// 5. Mengubah atribut
// - Ganti src gambar dengan link lain (misalnya https://via.placeholder.com/150).
const gambarBaru = document.getElementById('gambar');
gambarBaru.setAttribute('src', 'https://via.placeholder.com/150');
gambarBaru.setAttribute('alt', 'gambar sudah diganti');