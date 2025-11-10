document.addEventListener('DOMContentLoaded', async () => {
  // Ensure shared components can be injected across pages
  if ('serviceWorker' in navigator) {
    try { navigator.serviceWorker.register('sw.js'); } catch (_) {}
  }

  try {
    await window.GridBuilder.renderGrid({
      dataUrl: 'goodies.json',
      detailsPage: 'goodie.html',
      gridSelector: '#goodies-grid',
      filterBarSelector: '#filter-bar'
    });
  } catch (err) {
    console.error('Failed to render goodies grid', err);
  }
});