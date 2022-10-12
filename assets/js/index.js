const equipmentLayout = document.querySelector('.equipment-layout')
const buttonShowMore = document.querySelector('.show-more')
const hiddenEquipmentItems = document.querySelectorAll('.mobile-hidden')

let isFullHeight = false

buttonShowMore.addEventListener('click', () => {
  isFullHeight === true ? hideFullLayout() : showFullLayout()
})

function showFullLayout() {
  hiddenEquipmentItems.forEach((item) => (item.style.display = 'flex'))
  buttonShowMore.querySelector('img').style.transform = `rotate(180deg)`
  buttonShowMore.querySelector('span').innerHTML = 'Скрыть'
  isFullHeight = true
}

function hideFullLayout() {
  hiddenEquipmentItems.forEach((item) => (item.style.display = 'none'))
  buttonShowMore.querySelector('span').innerHTML = 'Показать ещё'
  isFullHeight = false
  window.scroll({
    left: 0,
    top: equipmentLayout.offsetTop,
    behavior: 'smooth',
  })
}
