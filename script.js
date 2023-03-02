/*
function logThis(string) {      // hagyományos függvény
  console.log(string)
}
logThis("logged message")


const logThat = (string) => {   // anonim függvény létrehozása
  console.log(string)
}
logThat('logged message2')


const returnDouble = (number) => number * 2  // anonim függvény előnye a gyakorlatban ez, hogy egysoros lehet {} és return nélkül. Hosszabb, több soros függvény esetén muszáj a hosszabb verzió.

console.log(returnDouble(10))

*/

/*Megadjuk a mozi fontos paramétereit egy tömbben.*/

const cinemaData = [
  {
    name: "comedy",
    chairs: 5
  },
  {
    name: "drama",
    chairs: 3
  },
  {
    name: "thriller",
    chairs: 7
  },
  {
    name: "kamionos",
    chairs: 10
  }
]

/*Csinálunk egy függvényt ami kiírja hányadik székről van szó (annyiszor fogja majd ezt megtenni ahányszor ezt a függvényt meghívjuk egy for ciklusban később*/
const chairComponent = (nth) => `
  <div class="chair">
    ${nth}
  </div>
`
/*Csinálnuk egy függvényt, ami bekéri a terem nevét és hogy hány darab szék legyen a teremben.*/
const roomComponent = (roomName, chairCount) => {
  let roomHtml = ""

   /*csinálunk egy FOR ciklust, ami annyiszor fut le, ahány széket akarunk a terembe, és az üres roomHtml stringbe elkezdi beletölteni a székek sorszámát*/
  for (let i = 1; i <= chairCount; i++) {
    roomHtml += chairComponent(i)
  }
  /*végezetül a függvényben bekért roomName nevű divbe belepakolja a roomHTML-be összegyűjtött szék sorszámokat.*/
  return `
    <div class="room ${roomName}">
      ${roomHtml}
    </div>
  `
}

/*a legnagyobb komponens(függvény) ami összefogja az egészet: egyetlen argumentumra van a függvénynek szüksége, mégpedig hogy megadjuk milyen tulajdonságokkal rendelkeznek a termek.
Minden adatot a fenti tömbbe ágyazott objektumokból fog kinyerni.*/
const cinemaComponent = (rooms) => {
  let cinemaHtml = ""  /*csinálunk itt is egy üres változót amit majd feltöltünk adattal a for ciklusban*/

  /*
  - mivel a változó amit meg fogunk adni a függvény meghívásakor, az egy tömbben van, így a .length propertyje egy szám lesz: a for ciklus annyiszor fog lefutni, amekkora ez a szám = amilyen hosszú a tömb (rooms.length)
  -azt mondjuk, hogy az üres cinemaHTML-be kezdje egymásra pakolni a következőt: a roomComponents függvényt meghívjuk, aminek ugye két paramétert kell megadni meghívásnál, amit pár sorral előbb mi írtuk meg hogy majd kérje be: roomName és chairCount
  -a roomName paramétereként megadjuk azt, hogy hányadik objekt nevét húzza be az adattömbből = rooms[i].name
  -a chairCount paramétereként pedig azt, hogy hányadik objekt szék számát húzza be az adatömbből = rooms[i].chairs
  */
  for (let i = 0; i < rooms.length; i++) {
    cinemaHtml += roomComponent(rooms[i].name, rooms[i].chairs)
  }

/*a for ciklusban feltöltött cinemaHtml-t fogja visszaadni - amibe belepakolja az összes eredményt ami a roomComponents függvény meghívásánál létrejött, amiben benne lesz az összes chairComponent függvény eredménye is.*/
  return `
    <div class="cinema">
      ${cinemaHtml}
    </div>
  `
}

/*elmentettük változóba a root id helyét, hogy könnyebb legyen rá hivatkozni*/
const rootElement = document.querySelector('#root')

/*Meghivjuk a legnagyobb komponenst, és abból az adatból (cinemaData -nak elkeresztelt változó) dolgozik amit az elején megadtunk hozzá*/
rootElement.insertAdjacentHTML('beforeend', cinemaComponent(cinemaData))