// Theme toggle and persistence
(function () {
  function applyTheme(theme) {
    var isDark = theme === 'dark';
    var root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      var icon = toggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-moon', 'fa-sun');
        icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
      }
      toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      toggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  function getInitialTheme() {
    try {
      var stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (e) {}
    var prefersDark = false;
    try {
      prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {}
    return prefersDark ? 'dark' : 'light';
  }

  var currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  document.addEventListener('DOMContentLoaded', function () {
    // Re-apply after DOM mounts to ensure icon element exists
    applyTheme(currentTheme);
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        currentTheme = (document.documentElement.classList.contains('dark')) ? 'light' : 'dark';
        applyTheme(currentTheme);
        try { localStorage.setItem('theme', currentTheme); } catch (e) {}
      });
    }
  });
})();

