import './style.css'
import { initTime } from './time.js'
import { initSchedule } from './schedule.js'
import { renderLeaderboard } from './leaderboard.js'
import { pollAnnouncements } from './announcements.js'
import { showSplash } from './splash.js'

initTime(document.getElementById('time'))
initSchedule(document.getElementById('schedule'))

renderLeaderboard(
  document.getElementById('leaderboard'),
  await fetch('/leaderboard.json').then(r => r.json())
)

const annEl = document.getElementById('announcements')
pollAnnouncements(annEl, a => showSplash(a.text))
setInterval(() => pollAnnouncements(annEl, a => showSplash(a.text)), 30_000)