document.addEventListener('DOMContentLoaded', () => {
    const statusEl = document.getElementById('status');
  
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
  
      if (currentTab && currentTab.url.includes('entrecores.confere.org.br')) {
        statusEl.textContent = 'Extensão ativa no site EntreCores.';
        statusEl.classList.add('active');
      } else {
        statusEl.textContent = 'Extensão não está sendo executada no site EntreCores.';
        statusEl.classList.add('inactive');
      }
    });
  });