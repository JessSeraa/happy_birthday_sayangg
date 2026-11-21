const screens = [...document.querySelectorAll('.screen')];
const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicLabel = document.getElementById('musicLabel');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let letterStarted = false;
let lastPhoto = null;

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  if (id === 'letter') typeLetter();
}

function updateMusicState(isPlaying) {
  musicToggle.classList.toggle('playing', isPlaying);
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
  musicToggle.setAttribute('aria-label', isPlaying ? 'Jeda musik' : 'Putar musik');
  musicLabel.textContent = isPlaying ? 'Jeda musik' : 'Putar musik';
}

async function playMusic() {
  try {
    await music.play();
  } catch (error) {
    updateMusicState(false);
    if (error.name === 'AbortError' && music.paused) return;
    musicLabel.textContent = 'Musik belum tersedia';
    console.warn('Musik tidak dapat diputar:', error);
  }
}

document.getElementById('startBtn').addEventListener('click', () => {
  showScreen('intro');
  playMusic();
});

document.querySelectorAll('.next-btn').forEach(button => {
  button.addEventListener('click', () => showScreen(button.dataset.next));
});

musicToggle.addEventListener('click', () => {
  if (music.paused) playMusic();
  else music.pause();
});
music.addEventListener('play', () => updateMusicState(true));
music.addEventListener('pause', () => updateMusicState(false));
music.addEventListener('error', () => {
  updateMusicState(false);
  musicLabel.textContent = 'Musik belum tersedia';
});

const candles = [...document.querySelectorAll('.candle')];
const blowBtn = document.getElementById('blowBtn');
const wishMessage = document.getElementById('wishMessage');
let wishCelebrated = false;

function extinguishCandle(candle) {
  if (candle.classList.contains('out')) return;
  candle.classList.add('out');
  candle.setAttribute('aria-label', `${candle.getAttribute('aria-label').replace('Tiup ', '')} sudah padam`);
  if (candles.every(item => item.classList.contains('out'))) {
    wishMessage.textContent = 'Your wish is on its way ✨';
    blowBtn.textContent = 'Semua harapan sudah dikirim ♡';
    if (!wishCelebrated) {
      wishCelebrated = true;
      confettiBurst();
    }
  } else {
    const remaining = candles.filter(item => !item.classList.contains('out')).length;
    wishMessage.textContent = `Satu harapan baik sedang menuju kamu. Tinggal ${remaining} lilin lagi. ♡`;
  }
}

candles.forEach(candle => candle.addEventListener('click', () => extinguishCandle(candle)));
blowBtn.addEventListener('click', () => {
  candles.filter(candle => !candle.classList.contains('out')).forEach(extinguishCandle);
});

const letterParagraphs = [...document.querySelectorAll('[data-typewriter]')];
async function typeLetter() {
  if (letterStarted) return;
  letterStarted = true;
  if (reducedMotion) return;

  const messages = letterParagraphs.map(paragraph => paragraph.textContent);
  letterParagraphs.forEach(paragraph => {
    paragraph.textContent = '';
    paragraph.classList.add('typing');
  });

  for (let index = 0; index < letterParagraphs.length; index += 1) {
    const paragraph = letterParagraphs[index];
    const message = messages[index];
    for (let position = 0; position < message.length; position += 3) {
      paragraph.textContent = message.slice(0, position + 3);
      await new Promise(resolve => window.setTimeout(resolve, 28));
    }
    paragraph.textContent = message;
    paragraph.classList.remove('typing');
  }
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  if (lastPhoto) lastPhoto.focus();
}

document.querySelectorAll('.photo-card').forEach(card => {
  const openPhoto = () => {
    const image = card.querySelector('img');
    if (!image || image.style.display === 'none') return;
    card.classList.add('is-opening');
    window.setTimeout(() => card.classList.remove('is-opening'), 550);
    lastPhoto = card;
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = card.querySelector('figcaption').textContent.trim();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    lightboxClose.focus();
  };
  card.addEventListener('click', openPhoto);
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPhoto();
    }
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

document.getElementById('surpriseBtn').addEventListener('click', () => {
  document.getElementById('surpriseMessage').classList.add('show');
  document.getElementById('restartBtn').classList.add('show');
  document.getElementById('surpriseBtn').hidden = true;
  confettiBurst();
});

document.getElementById('restartBtn').addEventListener('click', () => {
  candles.forEach((candle, index) => {
    candle.classList.remove('out');
    candle.setAttribute('aria-label', `Tiup lilin ${['pertama', 'kedua', 'ketiga', 'keempat', 'kelima'][index]}`);
  });
  wishCelebrated = false;
  blowBtn.textContent = 'Tiup semua lilin ♡';
  wishMessage.textContent = 'Klik satu per satu setiap lilin untuk membuat harapanmu.';
  document.getElementById('surpriseMessage').classList.remove('show');
  document.getElementById('restartBtn').classList.remove('show');
  document.getElementById('surpriseBtn').hidden = false;
  showScreen('home');
});

function addFloatingSymbol(container, className, symbols) {
  const particle = document.createElement('span');
  particle.className = className;
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.fontSize = `${10 + Math.random() * 16}px`;
  particle.style.animationDuration = `${10 + Math.random() * 8}s`;
  container.appendChild(particle);
  window.setTimeout(() => particle.remove(), 19000);
}

const floatingHearts = document.getElementById('floatingHearts');
const floatingPetals = document.getElementById('floatingPetals');
if (!reducedMotion) {
  window.setInterval(() => addFloatingSymbol(floatingHearts, 'float-heart', ['♡', '♥']), 1150);
  window.setInterval(() => addFloatingSymbol(floatingPetals, 'float-petal', ['✿', '❀', '✽']), 1750);
  for (let index = 0; index < 8; index += 1) {
    window.setTimeout(() => addFloatingSymbol(floatingHearts, 'float-heart', ['♡', '♥']), index * 250);
    window.setTimeout(() => addFloatingSymbol(floatingPetals, 'float-petal', ['✿', '❀', '✽']), index * 420);
  }
}

function confettiBurst() {
  if (reducedMotion) return;
  const symbols = ['♡', '✦', '✧', '♥', '✿', '·'];
  for (let index = 0; index < 42; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${30 + Math.random() * 40}%`;
    piece.style.setProperty('--drift', `${Math.random() * 360 - 180}px`);
    piece.style.setProperty('--spin', `${Math.random() * 720 - 360}deg`);
    piece.style.animationDuration = `${2.8 + Math.random() * 1.8}s`;
    floatingHearts.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5000);
  }
}
