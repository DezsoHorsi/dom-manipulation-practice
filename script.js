console.log('hello')

const cinemaData = [
  {
    name: "comedy",
    chairs: 15
  },
  {
    name: "drama",
    chairs: 10
  },
  {
    name: "thriller",
    chairs: 25
  },
  {
    name: "kamionos",
    chairs: 50
  }
]

const chairComponent = (nth) => `
  <div class="chair">
    ${nth}
  </div>
`

const roomComponent = (roomName, chairCount) => {
  let roomHtml = ""
  
  for (let i = 1; i <= chairCount; i++) {
    roomHtml += chairComponent(i)
  }

  return `
    <div class="room ${roomName}">
      ${roomHtml}
    </div>
  `
}

const cinemaComponent = (rooms) => {
  let cinemaHtml = ""

  for (let i = 0; i < rooms.length; i++) {
    cinemaHtml += roomComponent(rooms[i].name, rooms[i].chairs)
  }

  return `
    <div class="cinema">
      ${cinemaHtml}
    </div>
  `
}

const rootElement = document.querySelector('#root')

rootElement.insertAdjacentHTML('beforeend', cinemaComponent(cinemaData))
