const screens = [...document.querySelectorAll('.screen')];
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
let musicStarted = false;

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({top: 0, behavior: 'smooth'});
}
document.getElementById('startBtn').addEventListener('click', () => {
  showScreen('intro');
  if (!musicStarted && music.querySelector('source').getAttribute('src')) {
    music.play().then(() => { musicStarted = true; musicLabel.textContent = 'Jeda musik'; })
      .catch(() => { musicLabel.textContent = 'Putar musik'; });
  }
});
document.querySelectorAll('.next-btn').forEach(button => {
  button.addEventListener('click', () => showScreen(button.dataset.next));
});

musicToggle.addEventListener('click', async () => {
  if (music.paused) {
    try { await music.play(); musicLabel.textContent = 'Jeda musik'; musicStarted = true; }
    catch { musicLabel.textContent = 'Musik belum tersedia'; }
  } else {
    music.pause(); musicLabel.textContent = 'Putar musik';
  }
});

const flame = document.getElementById('flame');
const blowBtn = document.getElementById('blowBtn');
const wishMessage = document.getElementById('wishMessage');
blowBtn.addEventListener('click', () => {
  if (!flame.classList.contains('out')) {
    flame.classList.add('out');
    blowBtn.textContent = 'Lilin sudah ditiup ♡';
    wishMessage.textContent = 'Aamiin. Semoga harapan terbaikmu segera menjadi nyata. ✨';
    confettiBurst();
  } else {
    wishMessage.textContent = 'Satu harapan baik sudah dikirim ke semesta. ♡';
  }
});

document.getElementById('surpriseBtn').addEventListener('click', () => {
  document.getElementById('surpriseMessage').classList.add('show');
  document.getElementById('restartBtn').classList.add('show');
  document.getElementById('surpriseBtn').style.display = 'none';
  confettiBurst();
});
document.getElementById('restartBtn').addEventListener('click', () => {
  flame.classList.remove('out');
  blowBtn.textContent = 'Tiup lilinnya ♡';
  wishMessage.textContent = 'Semoga semua harapan baik menemukan jalan menuju kamu.';
  document.getElementById('surpriseMessage').classList.remove('show');
  document.getElementById('restartBtn').classList.remove('show');
  document.getElementById('surpriseBtn').style.display = '';
  showScreen('home');
});

function makeHeart() {
  const heart = document.createElement('span');
  heart.className = 'float-heart';
  heart.textContent = Math.random() > .5 ? '♡' : '♥';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 18}px`;
  heart.style.animationDuration = `${8 + Math.random() * 8}s`;
  document.getElementById('floatingHearts').appendChild(heart);
  setTimeout(() => heart.remove(), 17000);
}
setInterval(makeHeart, 850);
for (let i = 0; i < 12; i++) setTimeout(makeHeart, i * 180);

function confettiBurst() {
  const symbols = ['♡', '✦', '✧', '♥', '·'];
  for (let i = 0; i < 35; i++) {
    const piece = document.createElement('span');
    piece.className = 'float-heart';
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${35 + Math.random() * 30}%`;
    piece.style.bottom = '20%';
    piece.style.fontSize = `${12 + Math.random() * 20}px`;
    piece.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    document.getElementById('floatingHearts').appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}
