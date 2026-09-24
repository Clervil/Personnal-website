// --- Bouton de thème (ton code, avec mémorisation du choix) ---
const toggleButton = document.getElementById('theme-toggle');

function applyTheme(light) {
  document.body.classList.toggle('light-mode', light);
  toggleButton.textContent = light ? '🌙 Mode sombre' : '☀️ Mode clair';
}

let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved === 'light');

toggleButton.addEventListener('click', () => {
  const light = !document.body.classList.contains('light-mode');
  applyTheme(light);
  try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch (e) {}
});

// --- Texte qui s'écrit tout seul ---
const role = document.getElementById('role');
const text = role.textContent;
role.textContent = '';
let i = 0;
(function type() {
  if (i <= text.length) {
    role.textContent = text.slice(0, i++);
    setTimeout(type, 70);
  }
})();

// --- Étapes du parcours : un clic ouvre ou ferme le détail ---
document.querySelectorAll('.step-head').forEach((btn) => {
  btn.addEventListener('click', () => {
    const open = btn.parentElement.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});