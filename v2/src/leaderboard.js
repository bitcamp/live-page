export function renderLeaderboard(el, data) {
  el.innerHTML = `
    <h2>Leaderboard</h2>
    <div class="leaderboard-grid">
      ${data.map(team => `
        <div class="team" style="background:${team.gradient}">
          <div class="team-info">
            <h3>${team.name}</h3>
            <p class="points">${team.points} Points</p>
          </div>
        </div>
      `).join('')}
    </div>
  `
}
