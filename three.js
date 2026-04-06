// ANIMAÇÕES HERO
gsap.from(".left h2", { y: 50, opacity: 0, duration: 1 });
gsap.from(".phone", { x: 100, opacity: 0, duration: 1 });

// ACCORDION
const boxes = document.querySelectorAll('.services-box');

boxes.forEach(box => {
const toggle = box.querySelector('.accordion-toggle');
const content = box.querySelector('.accordion-content');
const text = box.querySelector('.click-to-view');

toggle.addEventListener('click', () => {
const isOpen = content.classList.contains('open');

if (isOpen) {
gsap.to(content, { height: 0, opacity: 0, duration: 0.3 });
content.classList.remove('open');
text.style.display = 'block';
} else {
const height = content.scrollHeight;
gsap.to(content, { height: height, opacity: 1, duration: 0.5 });
content.classList.add('open');
text.style.display = 'none';
}
});
});
