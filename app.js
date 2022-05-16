const button = document.querySelector('button')
const popup =document.querySelector('.popup-wrapper')
const CloseButton = document.querySelector('.popup_close')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})
CloseButton.addEventListener('click', ()=> {
  popup.style.display = 'none'
}
)



