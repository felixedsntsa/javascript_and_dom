// DOM MANIPULATION
// - ELEMENT MANIPULATION
// - NODE MANIPULATION

// ELEMENT MANIPULATION
// element.innerHTML
// element.style.<property>
// element.setAttribute()
// element.classList

// element.innerHTML
// const h1 = document.getElementById('judul');
// h1.innerHTML = '<b>Felix Edna Santosa</b>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';

// element.style.<property>
// const judul = document.querySelector('#judul');
// judul.style.color = 'white';
// judul.style.backgroundColor = 'salmon';

// element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'felix');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// element.classList
// const p2 = document.querySelector('.p2');
// p2.classList.add('label'); -> menambah nama pada class yang dituju
// p2.classList.remove('p2'); -> menghapus nama isi class
// p2.classList.toggle('label'); -> kalau true tambahkan ke class nya
// document.body.classList.toggle('biru-muda'); -> kalau dijalankan maka body berwarna biru muda karena di css sudah ada class biru-muda
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');
// p2.classList.item(2); -> mengembalikan nilai 'dua' karena urut dari p2
// p2.classList.contains('tiga'); -> jika ada nilai 'tiga' pada class p2 maka true, jika tidak false
// p2.classList.contains('empat');
// p2.classList.replace('tiga', 'empat'); -> mengubah nilai 'tiga' menjadi 'empat' di class p2



// NODE MANIPULATION
// document.createElement()
// document.createTextNOde()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

// buat elemen baru
const pBaru = document.createElement('p'); // document.createElement()
const textPBaru = document.createTextNode('Paragraf baru'); // document.createTextNOde()
// simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru); // node.appendChild()

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2); // node.insertBefore() untuk parameternya yang pertama ambil yang mau ditambahkan lalu parameter kedua diletakkan sebelum elemen apa

// parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// parentNode.replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightGreen'
liBaru.style.backgroundColor = 'lightGreen'
h2Baru.style.backgroundColor = 'lightGreen'

// NODE MANIPULATION (NEW METHOD)
// parentNode.append()
// parentNOde.prepend()
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()