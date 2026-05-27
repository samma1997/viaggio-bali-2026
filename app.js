(function () {
  const STORAGE = {
    fav: 'bali-favs',
    done: 'bali-done',
    theme: 'bali-theme'
  };

  const state = {
    currentDay: null,
    view: 'overview',
    activeFilter: 'all',
    favOnly: false,
    favs: new Set(JSON.parse(localStorage.getItem(STORAGE.fav) || '[]')),
    done: new Set(JSON.parse(localStorage.getItem(STORAGE.done) || '[]'))
  };

  // ---------- THEME ----------
  function initTheme() {
    const saved = localStorage.getItem(STORAGE.theme);
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.dataset.theme = 'dark';
      document.getElementById('themeToggle').textContent = '☀️';
    }
  }
  document.getElementById('themeToggle').addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    if (dark) {
      delete document.documentElement.dataset.theme;
      localStorage.setItem(STORAGE.theme, 'light');
      document.getElementById('themeToggle').textContent = '🌙';
    } else {
      document.documentElement.dataset.theme = 'dark';
      localStorage.setItem(STORAGE.theme, 'dark');
      document.getElementById('themeToggle').textContent = '☀️';
    }
  });

  // ---------- TABS ----------
  function buildTabs() {
    const tabs = document.getElementById('tabs');
    const items = [
      { id: 'overview', label: '🏠 Home' },
      ...ITINERARY.map(d => ({ id: `day-${d.day}`, label: `Giorno ${d.day}`, day: d.day })),
      { id: 'map', label: '🗺️ Mappa' },
      { id: 'checklist', label: '✅ Checklist' }
    ];
    tabs.innerHTML = items.map(t =>
      `<button class="tab" data-target="${t.id}" ${t.day ? `data-day="${t.day}"` : ''}>${t.label}</button>`
    ).join('');
    tabs.addEventListener('click', e => {
      const btn = e.target.closest('.tab');
      if (!btn) return;
      const target = btn.dataset.target;
      if (btn.dataset.day) showDay(parseInt(btn.dataset.day));
      else showView(target);
      setActiveTab(target);
    });
    setActiveTab('overview');
  }
  function setActiveTab(id) {
    document.querySelectorAll('.tab').forEach(t =>
      t.classList.toggle('active', t.dataset.target === id)
    );
  }

  // ---------- VIEWS ----------
  function showView(id) {
    state.view = id;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = id.startsWith('day-') ? document.getElementById('day') : document.getElementById(id);
    if (target) target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---------- OVERVIEW ----------
  function buildOverview() {
    const totalSpots = ITINERARY.reduce((n, d) => n + d.spots.length, 0);
    const days = ITINERARY.length;
    const sunrise = ITINERARY.reduce((n, d) => n + d.spots.filter(s => s.bestTime === 'sunrise').length, 0);
    const sunset = ITINERARY.reduce((n, d) => n + d.spots.filter(s => s.bestTime === 'sunset').length, 0);

    document.getElementById('stats').innerHTML = `
      <div class="stat"><b>${days}</b><span>Giorni</span></div>
      <div class="stat"><b>${totalSpots}</b><span>Spot foto</span></div>
      <div class="stat"><b>${sunrise}</b><span>🌅 Albe</span></div>
      <div class="stat"><b>${sunset}</b><span>🌇 Tramonti</span></div>
    `;

    const grid = document.getElementById('dayGrid');
    grid.innerHTML = ITINERARY.map(d => `
      <div class="day-card" data-day="${d.day}" role="button" tabindex="0">
        <div class="day-num">Giorno ${d.day}</div>
        <h4>${d.title}</h4>
        <div class="region">📍 ${d.region}</div>
        <div class="count">${d.spots.length} spot fotografici →</div>
      </div>
    `).join('');
    grid.addEventListener('click', e => {
      const card = e.target.closest('.day-card');
      if (!card) return;
      const day = parseInt(card.dataset.day);
      showDay(day);
      setActiveTab(`day-${day}`);
    });
  }

  // ---------- DAY ----------
  function showDay(dayNum) {
    state.currentDay = dayNum;
    state.activeFilter = 'all';
    showView(`day-${dayNum}`);
    renderDay();
  }

  function renderDay() {
    const day = ITINERARY.find(d => d.day === state.currentDay);
    if (!day) return;
    const container = document.getElementById('day');

    const cats = [...new Set(day.spots.map(s => s.category))];

    let spots = day.spots;
    if (state.activeFilter !== 'all') spots = spots.filter(s => s.category === state.activeFilter);
    if (state.favOnly) spots = spots.filter(s => state.favs.has(s.id));

    container.innerHTML = `
      <div class="day-header">
        <div class="breadcrumb">Giorno ${day.day} / ${ITINERARY.length}</div>
        <h2>${day.title}</h2>
        <div class="meta">
          <span>📍 ${day.region}</span>
          <span>📸 ${day.spots.length} spot</span>
        </div>
        <div class="day-summary">${day.summary}</div>
      </div>

      <div class="filter-bar">
        <button class="chip ${state.activeFilter === 'all' ? 'active' : ''}" data-cat="all">Tutto</button>
        ${cats.map(c => `<button class="chip ${state.activeFilter === c ? 'active' : ''}" data-cat="${c}">${CATEGORIES[c].label}</button>`).join('')}
      </div>

      ${spots.length === 0
        ? `<div class="empty"><div class="big">🔍</div><p>Nessuno spot con questo filtro.</p></div>`
        : `<div class="spot-list">${spots.map(renderSpot).join('')}</div>`}

      <div style="display:flex;justify-content:space-between;margin-top:30px;gap:10px;flex-wrap:wrap">
        ${day.day > 1 ? `<button class="btn" data-nav="${day.day - 1}">← Giorno ${day.day - 1}</button>` : '<span></span>'}
        ${day.day < ITINERARY.length ? `<button class="btn primary" data-nav="${day.day + 1}">Giorno ${day.day + 1} →</button>` : '<span></span>'}
      </div>
    `;

    // Event delegation
    container.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.activeFilter = chip.dataset.cat;
        renderDay();
      });
    });
    container.querySelectorAll('.spot-head').forEach(head => {
      head.addEventListener('click', e => {
        if (e.target.closest('.star-btn')) return;
        head.parentElement.classList.toggle('open');
      });
    });
    container.querySelectorAll('.star-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        toggleFav(btn.dataset.id);
        btn.classList.toggle('active');
        btn.textContent = btn.classList.contains('active') ? '⭐' : '☆';
      });
    });
    container.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const n = parseInt(btn.dataset.nav);
        showDay(n);
        setActiveTab(`day-${n}`);
      });
    });
  }

  function renderSpot(spot) {
    const fav = state.favs.has(spot.id);
    const cat = CATEGORIES[spot.category];
    return `
      <article class="spot" id="spot-${spot.id}">
        <div class="spot-head">
          <div class="spot-emoji">${spot.emoji}</div>
          <div class="spot-info">
            <h3>${spot.name}</h3>
            <div class="spot-tags">
              <span class="spot-tag cat">${cat.label}</span>
              <span class="spot-tag time">${BEST_TIMES[spot.bestTime] || ''}</span>
            </div>
          </div>
          <div class="spot-actions">
            <button class="star-btn ${fav ? 'active' : ''}" data-id="${spot.id}" aria-label="Preferito">${fav ? '⭐' : '☆'}</button>
          </div>
        </div>
        <div class="spot-body">
          <div class="spot-meta-grid">
            <div class="meta-box"><div class="label">Quando</div><div class="value">${BEST_TIMES[spot.bestTime] || ''}</div></div>
            <div class="meta-box"><div class="label">Categoria</div><div class="value">${cat.label}</div></div>
            ${spot.timing ? `<div class="meta-box"><div class="label">Timing</div><div class="value">${spot.timing}</div></div>` : ''}
          </div>

          <div class="spot-section">
            <h5>📷 Cosa fotografare</h5>
            <p>${spot.whatToShoot}</p>
          </div>
          <div class="spot-section">
            <h5>⚙️ Come scattare</h5>
            <p>${spot.howToShoot}</p>
          </div>
          ${spot.gear ? `<div class="spot-section"><h5>🎒 Gear</h5><p>${spot.gear}</p></div>` : ''}
          ${spot.cultural ? `<div class="spot-section"><h5>🙏 Note culturali / pratiche</h5><p>${spot.cultural}</p></div>` : ''}

          <div class="spot-cta">
            <a class="btn primary" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${spot.coords}">🧭 Indicazioni</a>
            <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ' Bali')}">🔍 Cerca</a>
            <button class="btn accent" data-toggle-done="${spot.id}">${state.done.has(spot.id) ? '✅ Fatto' : '☐ Segna come fatto'}</button>
          </div>
        </div>
      </article>
    `;
  }

  // ---------- MAP ----------
  function buildMap() {
    const list = document.getElementById('mapList');
    const all = ITINERARY.flatMap(d => d.spots.map(s => ({ ...s, day: d.day })));
    list.innerHTML = all.map(s => `
      <a class="map-item" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${s.coords}">
        <span class="emoji">${s.emoji}</span>
        <div class="info">
          <b>${s.name}</b>
          <small>Giorno ${s.day} · ${CATEGORIES[s.category].label}</small>
        </div>
      </a>
    `).join('');
  }

  // ---------- CHECKLIST ----------
  function buildChecklist() {
    const list = document.getElementById('checklistList');
    const all = ITINERARY.flatMap(d => d.spots.map(s => ({ ...s, day: d.day })));
    list.innerHTML = all.map(s => `
      <label class="check-item ${state.done.has(s.id) ? 'done' : ''}">
        <input type="checkbox" data-done-id="${s.id}" ${state.done.has(s.id) ? 'checked' : ''}/>
        <span class="emoji">${s.emoji}</span>
        <span class="name">${s.name}</span>
        <small>G${s.day}</small>
      </label>
    `).join('');
    list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        toggleDone(cb.dataset.doneId);
        cb.closest('.check-item').classList.toggle('done', cb.checked);
        updateProgress();
      });
    });
    updateProgress();
  }
  function updateProgress() {
    const total = ITINERARY.reduce((n, d) => n + d.spots.length, 0);
    const done = state.done.size;
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = `${done} / ${total}`;
  }

  // ---------- FAV & DONE ----------
  function toggleFav(id) {
    if (state.favs.has(id)) state.favs.delete(id);
    else state.favs.add(id);
    localStorage.setItem(STORAGE.fav, JSON.stringify([...state.favs]));
  }
  function toggleDone(id) {
    if (state.done.has(id)) state.done.delete(id);
    else state.done.add(id);
    localStorage.setItem(STORAGE.done, JSON.stringify([...state.done]));
  }

  document.getElementById('favOnly').addEventListener('click', e => {
    state.favOnly = !state.favOnly;
    e.currentTarget.classList.toggle('active', state.favOnly);
    if (state.view.startsWith('day-')) renderDay();
  });

  // Delegated handler for "fatto" inside spot body
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-toggle-done]');
    if (!t) return;
    const id = t.dataset.toggleDone;
    toggleDone(id);
    t.textContent = state.done.has(id) ? '✅ Fatto' : '☐ Segna come fatto';
  });

  // ---------- INIT ----------
  initTheme();
  buildTabs();
  buildOverview();
  buildMap();
  buildChecklist();
})();
