import './index.scss'
import hljs from 'highlight.js'
hljs.highlightAll()

let initScrollToButtons = () => {
  const body = document.body

  if (body.classList.contains('main')) {
    const buttons = document.getElementsByClassName('scrollToButton')

    for (let button of buttons) {
      button.addEventListener('click', (e) => {
        e.preventDefault()

        const href = button.getAttribute('href').substring(1)

        document
          .getElementById(href)
          .scrollIntoView({ behavior: 'smooth', block: 'center' })
      })
    }
  }
}

let initStickyMenu = () => {
  const viewportHeight = window.innerHeight

  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY

    if (scrollY >= viewportHeight) {
      const menubar = document.getElementsByClassName('menubar')[0]
      menubar.classList.remove('hidden')
    } else {
      const menubar = document.getElementsByClassName('menubar')[0]
      menubar.classList.add('hidden')
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollToButtons()
  initStickyMenu()
})
