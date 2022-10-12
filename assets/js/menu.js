const hamburgerButton = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuList = mobileMenu.querySelector('.menu__list')
const languageSwitcher = document.querySelector('.language-switcher')
const headerLogo = document.querySelector('.logo')
const headerButtonPrice = document
  .querySelector('.header')
  .querySelector('.btn-primary')
const menuLinks = document
  .querySelector('.nav__list')
  .querySelectorAll('.nav__link')

let isOpen = false

menuLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    resetActiveClasses()
    e.target.closest('.nav__link').classList.add('active-link')
    e.preventDefault()
    scrollTo(e.target.href.slice(e.target.href.indexOf('#') + 1))
  })
})

hamburgerButton.addEventListener('click', () => {
  isOpen === true ? closeMenu() : openMenu()
})

headerLogo.addEventListener('click', () => {
  scrollTo(0)
  resetActiveClasses()
})

function resetActiveClasses() {
  menuLinks.forEach((el) => (el.className = 'nav__link'))
}

function openMenu() {
  mobileMenu.style.opacity = '1'
  mobileMenu.style.pointerEvents = 'all'
  hamburgerButton.classList.add('hamburger-opened-menu')
  headerButtonPrice.style.display = 'none'
  languageSwitcher.style.display = 'flex'
  languageSwitcher.style.margin = `0 0 0 auto`
  document.querySelector('body').style.overflow = 'hidden'
  isOpen = true

  mobileMenuList.querySelectorAll('.list__item').forEach((item) =>
    item.addEventListener('click', () => {
      closeMenu()
    })
  )
}

function closeMenu() {
  mobileMenu.style.opacity = '0'
  mobileMenu.style.pointerEvents = 'none'
  hamburgerButton.classList.remove('hamburger-opened-menu')
  headerButtonPrice.style.display = 'block'
  languageSwitcher.style.display = 'none'
  document.querySelector('body').style.overflow = 'scroll'
  isOpen = false
}

function scrollTo(element) {
  if (element === 0) {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  } else {
    window.scroll({
      left: 0,
      top: document.querySelector(`.${element}`).offsetTop,
      behavior: 'smooth',
    })
  }
}
