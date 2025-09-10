// EVENT BUBBLING

// const semuaClose = document.querySelectorAll('.close');

// semuaClose.forEach(el => {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); // menghentikan aksi default (setelah terhapus halaman ke-refresh)
//         e.stopPropagation();
//     })
// });


// const cards = document.querySelectorAll('.card');
// cards.forEach(card => {
//     card.addEventListener('click', function() {
//         alert('ok');
//     })
// });

// lebih efektif karena ngecek di container nya jadi event nya tetap terpasang
const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})