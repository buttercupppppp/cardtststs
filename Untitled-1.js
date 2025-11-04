
window.addEventListener('load', () => {
  const card = document.querySelector('.card');
  setTimeout(() => {
    card.classList.add('show');
  }, 300);
});

document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('mouseenter', () => {
    heart.style.transform = 'scale(1.5) rotate(10deg)';
  });
  heart.addEventListener('mouseleave', () => {
    heart.style.transform = 'scale(1) rotate(0)';
  });
});

document.querySelector('.card').addEventListener('click', (e) => {
  const heart = document.createElement('span');
  heart.textContent = '💖';
  heart.classList.add('floating-heart');
  document.body.appendChild(heart);

  const x = e.clientX;
  const y = e.clientY;

  heart.style.left = ${x}px;
  heart.style.top = ${y}px;

  heart.animate([
    { transform: 'translateY(0)', opacity: 1 },
    { transform: 'translateY(-60px)', opacity: 0 }
  ], {
    duration: 1500,
    easing: 'ease-out'
  });

  setTimeout(() => heart.remove(), 1500);
});