async function fetchSchedule() {
  const res = await fetch('/schedule.json', { cache: 'no-store' })
  return res.json()
}

function parseTime(timeStr) {
  const [time, period] = timeStr.split(' ')
  let [hours, minutes] = time.split(':').map(Number)
  
  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0
  
  return hours * 60 + minutes
}

function getCurrentMinutes() {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}

function computeEvents(data) {
  return data || []
}

function renderEvents(events) {
  if (!events.length) return '<p>No scheduled events</p>'
  return events.map((event, idx) => `
    <div class="event" data-index="${idx}" data-time="${event.time}">
      <h3>${event.name}</h3>
      <p class="time">${event.time}</p>
      <p class="location">${event.location || 'TBA'}</p>
    </div>
  `).join('')
}

function scrollToCurrentEvent(container, data) {
  const now = getCurrentMinutes()
  let currentIndex = -1
  
  for (let i = 0; i < data.length; i++) {
    const startStr = data[i].time.split(' - ')[0]
    const startMin = parseTime(startStr)
    if (startMin >= now - 60) {
      currentIndex = i
      break
    }
  }
  
  if (currentIndex >= 0) {
    const eventElements = container.querySelectorAll('.event')
    if (eventElements[currentIndex]) {
      eventElements[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

export async function initSchedule(el) {
  const data = await fetchSchedule()

  function tick() {
    const events = computeEvents(data)
    el.innerHTML = renderEvents(events)
    scrollToCurrentEvent(el, data)
  }

  tick()
  setInterval(tick, 60_000)
}
