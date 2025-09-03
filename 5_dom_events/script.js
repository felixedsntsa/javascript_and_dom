// DOM EVENTS
// event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM, kejadian tersebut bisa dilakukan oleh user (mouse event, keyboard event, dll) ataupun secara otomatis oleh API (animasi selesai dijalankan, halaman selesai di load, dll)

// cara 'mendengarkan' event
// - event handler -> inline html attribute, element method
// - addEventListener()

// EVENT HANDLER
// on<event>
// tidak disarankan mmenggunakan di dalam html
// const p3 = document.querySelector('.p3');
// p3.onclick = ubahWarnaP3;

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightgreen';
// }

// addEventListener()
// const p4 = document.querySelector('#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'black';
//     p3.style.color = 'white';
// }
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'black';
    p3.style.color = 'white';
})
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
    p3.style.color = 'black';
})

// EVENTS LIST
// mouse event -> click, dblclick, mouseover,mouseenter, mouseup, wheel
// keyboard event -> keydown, keyup, keypress
// resources event
// focus event
// view event -> resize, scroll
// form event -> reset, submit
// css animation and transition event
// drag and drop event
// dll