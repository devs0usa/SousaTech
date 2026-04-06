// =======================
// GSAP ANIMAÇÃO HERO
// =======================
gsap.from(".left h2", { y: 50, opacity: 0, duration: 1 });
gsap.from(".phone", { x: 100, opacity: 0, duration: 1 });

// =======================
// ANIMAÇÃO DAS BOXES DE SERVIÇOS
// =======================
gsap.utils.toArray(".services-box").forEach((box, i) => {
  gsap.to(box, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: i * 0.2,
    ease: "power3.out"
  });
});

// =======================
// ACCORDION DAS BOXES
// =======================
const boxes = document.querySelectorAll('.services-box');

boxes.forEach(box => {
  const toggle = box.querySelector('.accordion-toggle');
  const content = box.querySelector('.accordion-content');
  const clickText = box.querySelector('.click-to-view');

  toggle.addEventListener('click', () => {
    const isOpen = content.classList.contains('open');

    if (isOpen) {
      // Fechar a própria box
      gsap.to(content, {height: 0, opacity: 0, duration: 0.3, ease: "power2.inOut"});
      content.classList.remove('open');
      clickText.style.display = 'block';
      toggle.classList.remove('active');
    } else {
      // Abrir a própria box
      clickText.style.display = 'none';
      toggle.classList.add('active');
      const height = content.scrollHeight; // altura real do conteúdo
      gsap.to(content, {height: height, opacity: 1, duration: 0.5, ease: "power2.out"});
      content.classList.add('open');
    }
  });
});