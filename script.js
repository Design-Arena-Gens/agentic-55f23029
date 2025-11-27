(function () {
  const lightsRoot = document.getElementById('lights');
  if (!lightsRoot) return;

  const total = 28; // graceful, not crowded
  const palette = ['gold', 'amber', 'warm'];

  for (let i = 0; i < total; i++) {
    const bulb = document.createElement('span');
    bulb.className = 'light-bulb animate ' + palette[i % palette.length];

    // even spread along the garland
    const p = (i / (total - 1)) * 100;
    bulb.dataset.p = p.toFixed(2);

    // unique twinkle/glow per bulb
    const twinkle = (1.9 + Math.random() * 1.8).toFixed(2) + 's';
    const phase = (-Math.random() * 1.8).toFixed(2) + 's';
    bulb.style.setProperty('--twinkle', twinkle);
    bulb.style.setProperty('--glow', twinkle);
    bulb.style.animationDelay = phase;

    lightsRoot.appendChild(bulb);
  }
})();
