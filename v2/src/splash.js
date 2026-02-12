export function showSplash(text) {
  const splash = document.createElement('div')
  splash.className = 'splash'
  splash.innerHTML = `<h1>New Announcement</h1><h2>${text}</h2>`

  document.body.appendChild(splash)
  requestAnimationFrame(() => splash.classList.add('show'))

  setTimeout(() => {
    splash.classList.remove('show')
    splash.addEventListener('transitionend', () => splash.remove(), { once: true })
  }, 3000)
}
