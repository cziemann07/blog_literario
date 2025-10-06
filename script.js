// script.js
// Interações simples: menu mobile toggle e pequenos comportamentos para estudo.

/* Toggle do menu mobile */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn && menuBtn.addEventListener('click', () => {
  const opened = mobileMenu.getAttribute('aria-hidden') === 'false';
  mobileMenu.setAttribute('aria-hidden', String(!opened));
  // alterna visual via style (simples)
  if (!opened) {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
});

/* Comportamento extra: clicar em qualquer botão de card registra um console log
   — útil para depois conectar a rotas ou a um modal.
*/
document.querySelectorAll('.card-btn, .genre-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const t = e.currentTarget;
    console.log('clicou em botão:', t.textContent.trim());
    // placeholder: futuramente abrir post/modal/checkout etc.
    t.animate([{ transform: 'translateY(0px)' }, { transform: 'translateY(-4px)' }, { transform: 'translateY(0px)' }], {duration:250, easing:'ease-out'});
  });
});

/* Dica: quando adicionar imagens reais, substitua as divs .img por <img src="..."> e ajuste o CSS.
   Também é simples transformar a grid de .hero em um carrossel completo com setas.
*/

