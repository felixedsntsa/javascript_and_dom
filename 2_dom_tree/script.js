// DOM TREE
// tipe tipe node
// element, attribute, text, cdata section, entitiy references, entitiy, processing intructtion, comment document, document type, document fragment, notation

// NodeList vs HTMLCollection
// jika memilih satu dari dom tree itu disebut node, kalau memilih beberapa node itu node list, dan kalau memilih node tetapi berupa elemnt pada html saja itu disebut HMTLCollection
// keduanya merupakan kumpulan node
// struktur datanya mirip array
// nodelist dapat berisi node apapun, sedangkan HTMLCollection harus berisi elemen html
// HTMLCollection bersifat live sedangakn nodelist tidak

// STRUKTUR HIERARKI DOM TREE
// Root Node
// - node yang menjadi sumber dari semua node lain di dalam DOM
// - document
// Parent Node
// - node yang ebrada 1 tingkat diatas node yang lain
// - body adaalh parent dari h1, p, p, div, dan a
// Child Note
// - node yang berada 1 tingkat dibawahg node yang lain
// - h1 adalah child dari body