// LATIHAN DOM EVENTS
// 1. CLICK EVENTS
// - Saat tombol #btnKlik ditekan, ubah teks <p id="pesan"> menjadi "Tombol sudah diklik!".
const button = document.getElementById('btnKlik');
button.addEventListener('click', function() {
    const pesanBaru = document.getElementById('pesan');
    pesanBaru.textContent = 'Tombol sudah diklik!';
});

// 2. Double Click Event
// - Saat tombol #btnKlik di-double click, ubah warna <h1> jadi merah.
button.addEventListener('dblclick', function() {
    const ubahJudul = document.getElementById('judul');
    ubahJudul.style.color = 'red';
})

// 3. Input Event
// - Saat user mengetik di #inputNama, tampilkan teks "Halo, [nama]" di <p id="hasilInput">.
const inputNamaMu = document.getElementById('inputNama');
const pBaru = document.getElementById('hasilInput');
inputNamaMu.addEventListener('input', function() {
    const nama = inputNamaMu.value;
    pBaru.textContent = 'halo, ' + nama;
})

// 4. Mouse Over / Mouse Out Event
// - Saat mouse diarahkan ke <h1>, ubah warnanya jadi biru.
// - Saat mouse keluar dari <h1>, kembalikan ke hitam.

const warnaJudul = document.querySelector('#judul');
warnaJudul.addEventListener('mouseenter', function() {
    warnaJudul.style.color = 'blue';
})

warnaJudul.addEventListener('mouseleave', function() {
    warnaJudul.style.color = 'black';
})

// 5. Event Delegation (opsional)
// - Tambahkan event click pada <ul id="daftar-buah">, sehingga kalau salah satu <li> diklik, tampilkan nama buahnya di console.
const daftarBuah = document.getElementById('daftar-buah');
daftarBuah.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        console.log('kamu klik: ', e.target.textContent);
    }
})

// target tagname harus pakai huruf kapital semua
// kalau mau pakai huruf kecil bisa pakai if(e.target.tagName.toLowerCase() === 'li')