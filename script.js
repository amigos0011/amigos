// Reveal elements on scroll
const paragraphs = document.querySelectorAll('p');
const leaderboard = document.getElementById('leaderboard');

function revealOnScroll() {
  paragraphs.forEach(p => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      p.classList.add('show');
    }
  });

  const tableRect = leaderboard.getBoundingClientRect();
  if (tableRect.top < window.innerHeight - 100) {
    leaderboard.classList.add('show');
    startCounting();
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Count up animation
function startCounting() {
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const speed = 15;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}
