const hamburgerBtn = document.getElementById('hamburgerBtn');
const navModal = document.getElementById('navModal');
const navModalClose = document.getElementById('navModalClose');

function closeModal(callback) {
  navModal.classList.add('is-closing');
  navModal.querySelector('.nav-modal__inner').addEventListener('animationend', () => {
    navModal.classList.remove('is-open', 'is-closing');
    document.body.style.overflow = '';
    if (callback) callback();
  }, { once: true });
}

hamburgerBtn.addEventListener('click', () => {
  navModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

navModalClose.addEventListener('click', () => closeModal());

navModal.addEventListener('click', (e) => {
  if (e.target === navModal) closeModal();
});

navModal.querySelectorAll('.nav-modal__link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      closeModal(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
});
