console.log('hello')

const rootElement = document.querySelector('#root')

/* ezzel ragadjuk meg a bizonyos elemünket, ezt minden olyan html-résznél meg kell tennünk arra hivatkozva, ha azt manipulálni akarjuk

// a defer a src script-ben (html-ben) lévő dolgokat is le fogja futtatni, ezért kell ez bele */


rootElement.insertAdjacentHTML('beforeend', "<h3>text from js</h3>") 

/* ami mindent ad, hogy dom-manipulációt adjon, egy olyan metódus, amit meg kell hívni () ide info :
https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML */



