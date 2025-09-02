// DOM SELECTION METHOD
// getElementById() => hanya ada boleh satu id pada halaman, misal h1 idnya judul berarti di h2 tidak boleh idnya judul lagi
// getElementsByTagName()
// getElementsByClassName()
// querySelector()
// querySeelectorAll()

// hasil DOM Selection Method
// getElementById() => element
// getElementsByTagName() => HTMLCollection
// getElementsByClassName() => HTMLCollection
// querySelector() => element
// querySeelectorAll() => nodelist

// DOM SELECTION
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'black';
judul.innerHTML = 'Felix Edna Santosa'

// document.getElementByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightBlue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari javascripts';