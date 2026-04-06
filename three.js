const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth /
window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector("#bg"),
});
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;
// PARTICLES
const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 5000; i++) {
vertices.push(
(Math.random() - 0.5) * 10,
(Math.random() - 0.5) * 10,
(Math.random() - 0.5) * 10
);
}
geometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(vertices, 3)
);
const material = new THREE.PointsMaterial({
color: 0x00ffff,
size: 0.02,
});const particles = new THREE.Points(geometry, material);
scene.add(particles);
// ANIMAÇÃO PARTICLES
function animate() {
requestAnimationFrame(animate);
particles.rotation.y += 0.0005;
particles.rotation.x += 0.0002;
renderer.render(scene, camera);
}
animate();
2222