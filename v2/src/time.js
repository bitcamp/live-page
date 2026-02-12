export function initTime(el) {
  const dayMap = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  function tick() {
    const now = new Date()
    el.textContent = `${dayMap[now.getDay()]} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
  }

  tick()
  setInterval(tick, 1000)
}
