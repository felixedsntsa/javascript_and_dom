// DOM TRAVERSAL
// const close = document.getElementsByClassName('close')[0];
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// })

const semuaClose = document.querySelectorAll('.close');

// pakai for
// for(let i = 0; i < semuaClose.length; i++) {
//     semuaClose[i].addEventListener('click', function(e) {
//         // semuaClose[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     })
// }

// pakai for each
semuaClose.forEach(el => {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});

// DOM TRAVERSAL METHOD
// - parentNode -> mengembalikan node
// - parentElement -> mengembalikan element
// - nextSibling -> mengembalikan node
// - nextElementSibling -> mengembalikan element
// - previousSibling -> mengembalikan node
// - previousElementSibling -> mengembalikan element


const nama = document.querySelector('.nama');
// console.log(nama.parentElement); -> mengambil parent element nya
// console.log(nama.nextElementSibling); -> mengambil element setelahnya
// console.log(nama.previousElementSibling); -> mengambil element sebelumnya
