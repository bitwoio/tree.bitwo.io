function toggleTheme(theme: string): void {
  if (process.client) {
    const oldTheme = localStorage.getItem('itsTheTheme') || 'light';
    const html = document.querySelector('html');
    if (html) {
      html.dataset.theme = theme;
      localStorage.setItem('itsTheTheme', theme);
      document.getElementById('close-modal-select-theme')?.click();
      const newThemesEl = document.getElementsByClassName(`btn-theme-svg-${theme}`);
      const oldThemesEl = document.getElementsByClassName(`btn-theme-svg-${oldTheme}`);

      if (oldTheme !== theme) {
        for (let i = 0; i < oldThemesEl.length; i++) {
          oldThemesEl[i].classList.add('invisible');
        }

        for (let i = 0; i < newThemesEl.length; i++) {
          newThemesEl[i].classList.remove('invisible');
        }
      }

    }
  }
};

function isCurrentTheme(id: string): boolean {
  if (process.client) {
    const userTheme = localStorage.getItem('itsTheTheme') || 'light';
    return userTheme === id;
  }

  return false;
};

function loadTheme(): void {
  if (process.client) {
    const userTheme = localStorage.getItem('itsTheTheme') || 'light';
    const html = document.querySelector('html');
    if (html) {
      html.dataset.theme = userTheme;
      const themesEl = document.getElementsByClassName(`btn-theme-svg-${userTheme}`);
      for (let i = 0; i < themesEl.length; i++) {
        themesEl[i].classList.remove('invisible');
      }
    }
  }
}
export {
  toggleTheme,
  isCurrentTheme,
  loadTheme
}
