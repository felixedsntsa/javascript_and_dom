const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    // cek yang diklik class thumb (gambar yang kecil)
    if(e.target.className == 'thumb') {
        jumbo.src = e.target.src
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade')
        }, 500)
        thumbs.forEach(thumb => {
            thumb.className = 'thumb';
        });
        e.target.classList.add('active');
    }
})