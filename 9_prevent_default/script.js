// PREVENT DEFAULT

const semuaClose = document.querySelectorAll('.close');

semuaClose.forEach(el => {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); // menghentikan aksi default (setelah terhapus halaman ke-refresh)
    })
});
