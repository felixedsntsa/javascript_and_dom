// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// document.querySeelectorAll() -> nodelist
const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightBlue';
}

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';