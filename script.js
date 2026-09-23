const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    toggleButton.textContent = '🌙 Mode sombre';
  } else {
    toggleButton.textContent = '☀️ Mode clair';
  }
});