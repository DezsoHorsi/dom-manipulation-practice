console.log('hello')

const buttonElement = document.querySelector('.click-button')
const bodyElement = document.querySelector('body')
const rootElement = document.querySelector('#root')

buttonElement.innerHTML = "klikkelj rám"

let darkTheme = false

buttonElement.addEventListener('click', function () {
  console.log('clicked')

  darkTheme = !darkTheme
  
  if (darkTheme === true) {
    buttonElement.innerHTML = "dark theme is on"
    bodyElement.classList.add('dark')
  } else {
    buttonElement.innerHTML = "dark theme is off"
    bodyElement.classList.remove('dark')
  }
})

setTimeout(function () {
  rootElement.insertAdjacentHTML('beforeend' ,`<p>hello world</p>`)

  console.log('hello world')
}, 6000)