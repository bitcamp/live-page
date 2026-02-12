let seen = new Set()

function render(el, data) {
  el.innerHTML = `
    <h2>Announcements</h2>
    ${data.length ? data.map(a => `
      <div class="announcement">
        <p>${a.text}</p>
      </div>
    `).join('') : '<p>No announcements</p>'}
  `
}

export async function pollAnnouncements(el, onNew) {
  const res = await fetch('/announcements.json', { cache: 'no-store' })
  const data = await res.json()

  const fresh = data.filter(a => !seen.has(a.id))
  fresh.forEach(a => seen.add(a.id))

  if (fresh.length) onNew(fresh[0])
  render(el, data)
}
