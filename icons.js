// Icone SVG 3D illustrate per Bali Photo Trip.
// Disegnate inline con gradienti, ombre e luci per dare profondità tipo "Notion 3D".

const ICONS = {};

// Wrapper che dà alle icone l'aspetto su pad gradient + soft shadow.
function iconWrap(svg, gradient = ['#fef3c7', '#fb923c']) {
  return `<div class="icon3d" style="--g1:${gradient[0]};--g2:${gradient[1]}">${svg}</div>`;
}

// Pagoda / tempio balinese
ICONS.temple = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="t-roof" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7c2d12"/><stop offset="1" stop-color="#431407"/>
    </linearGradient>
    <linearGradient id="t-roof2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#92400e"/><stop offset="1" stop-color="#7c2d12"/>
    </linearGradient>
    <linearGradient id="t-base" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e7e5e4"/><stop offset="1" stop-color="#a8a29e"/>
    </linearGradient>
    <linearGradient id="t-top" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbbf24"/><stop offset="1" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <rect x="20" y="44" width="24" height="12" rx="2" fill="url(#t-base)"/>
  <rect x="24" y="46" width="6" height="10" fill="#57534e" opacity=".7"/>
  <path d="M16 44 L32 36 L48 44 Z" fill="url(#t-roof)"/>
  <path d="M19 36 L32 28 L45 36 Z" fill="url(#t-roof2)"/>
  <path d="M22 28 L32 20 L42 28 Z" fill="url(#t-roof)"/>
  <path d="M24 20 L32 13 L40 20 Z" fill="url(#t-roof2)"/>
  <circle cx="32" cy="11" r="2.5" fill="url(#t-top)"/>
  <path d="M32 4 L32 11" stroke="url(#t-top)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, g || ['#fef3c7', '#fb923c']);

// Cascata (acqua che scende dalla roccia)
ICONS.waterfall = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="w-rock" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#65a30d"/><stop offset="1" stop-color="#365314"/>
    </linearGradient>
    <linearGradient id="w-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e0f2fe"/><stop offset="1" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="w-pool" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#22d3ee"/><stop offset="1" stop-color="#0e7490"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <path d="M10 14 Q14 6 22 8 Q28 6 32 10 Q38 6 44 10 Q52 8 54 16 L54 22 L10 22 Z" fill="url(#w-rock)"/>
  <path d="M14 22 L18 46 Q16 50 14 52 L14 22 Z" fill="url(#w-water)" opacity=".95"/>
  <path d="M22 22 L24 50 L20 50 Z" fill="url(#w-water)"/>
  <path d="M30 22 L32 52 L28 50 Z" fill="url(#w-water)"/>
  <path d="M38 22 L40 50 L36 50 Z" fill="url(#w-water)"/>
  <path d="M46 22 L50 46 Q52 50 50 52 L46 22 Z" fill="url(#w-water)" opacity=".95"/>
  <ellipse cx="32" cy="52" rx="22" ry="5" fill="url(#w-pool)"/>
  <ellipse cx="32" cy="51" rx="18" ry="2" fill="#fff" opacity=".4"/>
</svg>
`, g || ['#cffafe', '#0891b2']);

// Risaie terrazzate
ICONS.rice = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="r-1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#bef264"/><stop offset="1" stop-color="#65a30d"/>
    </linearGradient>
    <linearGradient id="r-2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a3e635"/><stop offset="1" stop-color="#4d7c0f"/>
    </linearGradient>
    <linearGradient id="r-3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#84cc16"/><stop offset="1" stop-color="#365314"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <path d="M4 50 L60 50 L56 54 L8 54 Z" fill="url(#r-3)"/>
  <path d="M8 42 L56 42 L52 46 L12 46 Z" fill="url(#r-2)"/>
  <path d="M12 34 L52 34 L48 38 L16 38 Z" fill="url(#r-1)"/>
  <path d="M16 26 L48 26 L44 30 L20 30 Z" fill="url(#r-2)"/>
  <path d="M20 18 L44 18 L40 22 L24 22 Z" fill="url(#r-1)"/>
  <path d="M24 10 L40 10 L36 14 L28 14 Z" fill="url(#r-2)"/>
  <line x1="6" y1="52" x2="10" y2="52" stroke="#fff" opacity=".3"/>
  <line x1="16" y1="44" x2="20" y2="44" stroke="#fff" opacity=".3"/>
</svg>
`, g || ['#ecfccb', '#65a30d']);

// Vulcano (Batur)
ICONS.volcano = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="v-mt" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#78716c"/><stop offset="1" stop-color="#292524"/>
    </linearGradient>
    <linearGradient id="v-lava" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fef3c7"/><stop offset=".5" stop-color="#f59e0b"/><stop offset="1" stop-color="#dc2626"/>
    </linearGradient>
    <radialGradient id="v-smoke" cx=".5" cy=".5">
      <stop offset="0" stop-color="#f1f5f9" stop-opacity=".95"/>
      <stop offset="1" stop-color="#cbd5e1" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <circle cx="22" cy="14" r="9" fill="url(#v-smoke)"/>
  <circle cx="32" cy="8" r="10" fill="url(#v-smoke)"/>
  <circle cx="42" cy="14" r="8" fill="url(#v-smoke)"/>
  <path d="M8 54 L26 22 L38 22 L56 54 Z" fill="url(#v-mt)"/>
  <path d="M26 22 L30 26 L34 22 L38 22 L32 32 Z" fill="url(#v-lava)"/>
  <path d="M30 32 Q28 40 26 44 Q30 42 32 44 Q34 42 38 44 Q36 38 34 32 Z" fill="url(#v-lava)" opacity=".85"/>
</svg>
`, g || ['#fecaca', '#dc2626']);

// Palma (spiaggia)
ICONS.beach = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b-sand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fef9c3"/><stop offset="1" stop-color="#eab308"/>
    </linearGradient>
    <linearGradient id="b-water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#67e8f9"/><stop offset="1" stop-color="#0e7490"/>
    </linearGradient>
    <linearGradient id="b-leaf" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4ade80"/><stop offset="1" stop-color="#15803d"/>
    </linearGradient>
    <linearGradient id="b-trunk" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#a16207"/><stop offset="1" stop-color="#713f12"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <path d="M4 44 Q32 38 60 44 L60 54 L4 54 Z" fill="url(#b-water)"/>
  <path d="M4 48 Q32 44 60 48 L60 56 L4 56 Z" fill="url(#b-sand)"/>
  <path d="M30 50 Q26 30 22 12 Q28 16 34 18 Q30 24 30 50 Z" fill="url(#b-trunk)"/>
  <path d="M22 12 Q10 8 6 16 Q14 14 22 18 Z" fill="url(#b-leaf)"/>
  <path d="M22 12 Q34 4 44 8 Q34 14 24 18 Z" fill="url(#b-leaf)"/>
  <path d="M22 12 Q30 2 36 0 Q30 12 24 16 Z" fill="url(#b-leaf)"/>
  <path d="M22 12 Q18 2 12 0 Q16 10 22 18 Z" fill="url(#b-leaf)"/>
  <circle cx="20" cy="20" r="2" fill="#78350f"/>
  <circle cx="25" cy="22" r="2" fill="#78350f"/>
</svg>
`, g || ['#fef3c7', '#22d3ee']);

// Montagna / viewpoint
ICONS.viewpoint = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vp-1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#a78bfa"/><stop offset="1" stop-color="#5b21b6"/>
    </linearGradient>
    <linearGradient id="vp-2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#c4b5fd"/><stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
    <linearGradient id="vp-sun" cx=".5" cy=".5">
      <stop offset="0" stop-color="#fde047"/><stop offset="1" stop-color="#f97316"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <circle cx="46" cy="18" r="7" fill="url(#vp-sun)"/>
  <path d="M4 54 L22 24 L34 42 L42 32 L60 54 Z" fill="url(#vp-1)"/>
  <path d="M22 24 L28 33 L25 36 Z" fill="#fff" opacity=".5"/>
  <path d="M42 32 L46 38 L44 40 Z" fill="#fff" opacity=".5"/>
  <path d="M14 54 Q32 50 50 54" stroke="#fff" stroke-width="1" opacity=".3" fill="none"/>
</svg>
`, g || ['#ede9fe', '#7c3aed']);

// Cultura / maschera danza
ICONS.culture = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="c-mask" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbbf24"/><stop offset="1" stop-color="#b45309"/>
    </linearGradient>
    <linearGradient id="c-hair" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1f2937"/><stop offset="1" stop-color="#000"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <path d="M16 12 L20 6 L28 8 L32 4 L36 8 L44 6 L48 12 L46 18 L48 26 L46 34 Q40 50 32 54 Q24 50 18 34 L16 26 L18 18 Z" fill="url(#c-hair)"/>
  <ellipse cx="32" cy="32" rx="14" ry="18" fill="url(#c-mask)"/>
  <ellipse cx="26" cy="28" rx="2.5" ry="3.5" fill="#000"/>
  <ellipse cx="38" cy="28" rx="2.5" ry="3.5" fill="#000"/>
  <ellipse cx="26" cy="28" rx="1" ry="1.5" fill="#fff"/>
  <ellipse cx="38" cy="28" rx="1" ry="1.5" fill="#fff"/>
  <path d="M28 42 Q32 46 36 42" stroke="#7c2d12" stroke-width="2" fill="none" stroke-linecap="round"/>
  <circle cx="32" cy="22" r="2" fill="#dc2626"/>
  <path d="M22 14 Q24 10 28 12" stroke="#dc2626" stroke-width="1.5" fill="none"/>
  <path d="M42 14 Q40 10 36 12" stroke="#dc2626" stroke-width="1.5" fill="none"/>
</svg>
`, g || ['#fce7f3', '#ec4899']);

// Città / street / scooter
ICONS.city = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ci-bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fb923c"/><stop offset="1" stop-color="#c2410c"/>
    </linearGradient>
    <linearGradient id="ci-scoot" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f87171"/><stop offset="1" stop-color="#991b1b"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <rect x="8" y="20" width="14" height="32" rx="2" fill="url(#ci-bg)"/>
  <rect x="24" y="14" width="14" height="38" rx="2" fill="#fed7aa"/>
  <rect x="40" y="24" width="14" height="28" rx="2" fill="url(#ci-bg)"/>
  <rect x="11" y="24" width="3" height="4" fill="#fff" opacity=".7"/>
  <rect x="16" y="24" width="3" height="4" fill="#fff" opacity=".7"/>
  <rect x="11" y="32" width="3" height="4" fill="#fff" opacity=".7"/>
  <rect x="16" y="32" width="3" height="4" fill="#fff" opacity=".7"/>
  <rect x="27" y="18" width="3" height="4" fill="#fff"/>
  <rect x="32" y="18" width="3" height="4" fill="#fff"/>
  <rect x="27" y="26" width="3" height="4" fill="#fff"/>
  <rect x="32" y="26" width="3" height="4" fill="#fff"/>
  <rect x="43" y="28" width="3" height="4" fill="#fff" opacity=".7"/>
  <rect x="48" y="28" width="3" height="4" fill="#fff" opacity=".7"/>
  <circle cx="20" cy="52" r="6" fill="#1f2937"/>
  <circle cx="44" cy="52" r="6" fill="#1f2937"/>
  <circle cx="20" cy="52" r="2" fill="#9ca3af"/>
  <circle cx="44" cy="52" r="2" fill="#9ca3af"/>
  <path d="M16 48 Q26 42 36 44 L44 48 Z" fill="url(#ci-scoot)"/>
</svg>
`, g || ['#ffedd5', '#ea580c']);

// Natura generica / foglie / monkey forest
ICONS.nature = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="n-leaf" cx=".3" cy=".3">
      <stop offset="0" stop-color="#86efac"/><stop offset="1" stop-color="#15803d"/>
    </radialGradient>
    <radialGradient id="n-leaf2" cx=".3" cy=".3">
      <stop offset="0" stop-color="#4ade80"/><stop offset="1" stop-color="#166534"/>
    </radialGradient>
    <linearGradient id="n-trunk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a16207"/><stop offset="1" stop-color="#451a03"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <rect x="29" y="36" width="6" height="20" fill="url(#n-trunk)" rx="2"/>
  <ellipse cx="20" cy="30" rx="12" ry="13" fill="url(#n-leaf)"/>
  <ellipse cx="44" cy="28" rx="13" ry="14" fill="url(#n-leaf2)"/>
  <ellipse cx="32" cy="20" rx="14" ry="15" fill="url(#n-leaf)"/>
  <ellipse cx="32" cy="18" rx="6" ry="5" fill="#fff" opacity=".25"/>
  <circle cx="38" cy="26" r="1.5" fill="#fbbf24"/>
  <circle cx="24" cy="32" r="1.5" fill="#fbbf24"/>
  <circle cx="32" cy="36" r="1.5" fill="#fbbf24"/>
</svg>
`, g || ['#dcfce7', '#16a34a']);

// Camera / foto (default)
ICONS.camera = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cm-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#374151"/><stop offset="1" stop-color="#111827"/>
    </linearGradient>
    <radialGradient id="cm-lens" cx=".4" cy=".4">
      <stop offset="0" stop-color="#60a5fa"/><stop offset=".7" stop-color="#1e3a8a"/><stop offset="1" stop-color="#000"/>
    </radialGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <rect x="6" y="20" width="52" height="32" rx="6" fill="url(#cm-body)"/>
  <rect x="22" y="14" width="20" height="8" rx="2" fill="#1f2937"/>
  <circle cx="32" cy="36" r="12" fill="url(#cm-lens)"/>
  <circle cx="32" cy="36" r="8" fill="#000"/>
  <circle cx="29" cy="33" r="3" fill="#fff" opacity=".3"/>
  <circle cx="48" cy="26" r="2" fill="#dc2626"/>
</svg>
`, g || ['#e0e7ff', '#4f46e5']);

// Surfista / onda
ICONS.surf = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="s-wave" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7dd3fc"/><stop offset="1" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="s-board" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fef3c7"/><stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <path d="M2 40 Q12 24 26 30 Q40 36 52 24 Q58 20 62 24 L62 54 L2 54 Z" fill="url(#s-wave)"/>
  <path d="M52 24 Q56 22 60 24 Q56 20 52 24 Z" fill="#fff" opacity=".7"/>
  <path d="M26 30 Q28 26 32 28" stroke="#fff" stroke-width="1.5" fill="none" opacity=".6"/>
  <ellipse cx="36" cy="20" rx="14" ry="3.5" fill="url(#s-board)" transform="rotate(-20 36 20)"/>
  <circle cx="40" cy="14" r="3" fill="#fbbf24"/>
  <path d="M40 17 L40 26 M38 20 L42 20 M40 26 L37 32 M40 26 L44 32" stroke="#1f2937" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`, g || ['#bae6fd', '#0284c7']);

// Scimmia (monkey forest)
ICONS.monkey = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="m-face" cx=".4" cy=".4">
      <stop offset="0" stop-color="#fed7aa"/><stop offset="1" stop-color="#c2410c"/>
    </radialGradient>
    <linearGradient id="m-fur" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#78350f"/><stop offset="1" stop-color="#451a03"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <ellipse cx="32" cy="34" rx="22" ry="20" fill="url(#m-fur)"/>
  <ellipse cx="14" cy="22" rx="6" ry="7" fill="url(#m-fur)"/>
  <ellipse cx="50" cy="22" rx="6" ry="7" fill="url(#m-fur)"/>
  <ellipse cx="14" cy="22" rx="3" ry="4" fill="url(#m-face)"/>
  <ellipse cx="50" cy="22" rx="3" ry="4" fill="url(#m-face)"/>
  <ellipse cx="32" cy="38" rx="15" ry="14" fill="url(#m-face)"/>
  <ellipse cx="26" cy="34" rx="2" ry="2.5" fill="#000"/>
  <ellipse cx="38" cy="34" rx="2" ry="2.5" fill="#000"/>
  <circle cx="26" cy="33" r="0.8" fill="#fff"/>
  <circle cx="38" cy="33" r="0.8" fill="#fff"/>
  <ellipse cx="32" cy="42" rx="3" ry="2" fill="#7c2d12"/>
  <path d="M30 46 Q32 48 34 46" stroke="#7c2d12" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>
`, g || ['#fed7aa', '#9a3412']);

// Drink / cafè
ICONS.drink = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dr-glass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="18" ry="3" fill="#000" opacity=".15"/>
  <path d="M14 14 L50 14 L42 48 Q32 54 22 48 Z" fill="url(#dr-glass)" opacity=".95"/>
  <ellipse cx="32" cy="16" rx="18" ry="3" fill="#fef9c3"/>
  <rect x="30" y="4" width="3" height="14" fill="#16a34a"/>
  <path d="M28 4 Q32 0 36 4" fill="#16a34a"/>
  <circle cx="40" cy="22" r="3" fill="#dc2626"/>
  <rect x="40" y="20" width="2" height="20" fill="#15803d" transform="rotate(15 41 22)"/>
</svg>
`, g || ['#fef3c7', '#f59e0b']);

// Gate (Handara / Lempuyang)
ICONS.gate = (g) => iconWrap(`
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g-stone" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9ca3af"/><stop offset="1" stop-color="#374151"/>
    </linearGradient>
    <linearGradient id="g-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fef3c7"/><stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>
  <ellipse cx="32" cy="58" rx="22" ry="3" fill="#000" opacity=".15"/>
  <rect x="28" y="20" width="8" height="34" fill="url(#g-sky)"/>
  <path d="M8 54 L8 22 L14 18 L14 12 L18 8 L20 12 L22 16 L26 18 L26 54 Z" fill="url(#g-stone)"/>
  <path d="M56 54 L56 22 L50 18 L50 12 L46 8 L44 12 L42 16 L38 18 L38 54 Z" fill="url(#g-stone)"/>
  <rect x="10" y="26" width="14" height="2" fill="#1f2937" opacity=".4"/>
  <rect x="10" y="34" width="14" height="2" fill="#1f2937" opacity=".4"/>
  <rect x="10" y="42" width="14" height="2" fill="#1f2937" opacity=".4"/>
  <rect x="40" y="26" width="14" height="2" fill="#1f2937" opacity=".4"/>
  <rect x="40" y="34" width="14" height="2" fill="#1f2937" opacity=".4"/>
  <rect x="40" y="42" width="14" height="2" fill="#1f2937" opacity=".4"/>
  <circle cx="32" cy="32" r="3" fill="#fbbf24"/>
</svg>
`, g || ['#fef9c3', '#a16207']);

// Mappa il tipo emoji/category al nome icona + gradiente
function iconForSpot(spot) {
  const map = {
    'd6-batursummit': ICONS.volcano(['#fee2e2', '#dc2626']),
    'd1-laplancha': ICONS.drink(),
    'd3-ubudmarket': ICONS.culture(),
    'd4-monkey': ICONS.monkey(),
    'd12-padangpadang': ICONS.surf(),
    'd13-echobeach': ICONS.surf(),
    'd13-canggustreet': ICONS.city(),
    'd8-handara': ICONS.gate(),
    'd7-lempuyang': ICONS.gate(['#fef9c3', '#ca8a04']),
    'd14-sanur': ICONS.beach(),
    'd11-treehouse': ICONS.nature(),
    'd11-saren': ICONS.viewpoint(),
  };
  if (map[spot.id]) return map[spot.id];

  switch (spot.category) {
    case 'temple': return ICONS.temple();
    case 'waterfall': return ICONS.waterfall();
    case 'nature':
      if (spot.id.includes('rice') || spot.name.toLowerCase().includes('risai') || spot.name.toLowerCase().includes('jatiluwih') || spot.name.toLowerCase().includes('tegallalang') || spot.name.toLowerCase().includes('sidemen') || spot.name.toLowerCase().includes('tibubeneng'))
        return ICONS.rice();
      return ICONS.nature();
    case 'beach': return ICONS.beach();
    case 'viewpoint': return ICONS.viewpoint();
    case 'culture': return ICONS.culture();
    case 'city': return ICONS.city();
    default: return ICONS.camera();
  }
}

function iconForCategory(cat) {
  switch (cat) {
    case 'temple': return ICONS.temple();
    case 'waterfall': return ICONS.waterfall();
    case 'nature': return ICONS.nature();
    case 'beach': return ICONS.beach();
    case 'viewpoint': return ICONS.viewpoint();
    case 'culture': return ICONS.culture();
    case 'city': return ICONS.city();
    default: return ICONS.camera();
  }
}

// Icona "hero" per ogni giorno in base alla sua categoria dominante
function iconForDay(day) {
  const counts = {};
  day.spots.forEach(s => { counts[s.category] = (counts[s.category] || 0) + 1; });
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return iconForCategory(top);
}
