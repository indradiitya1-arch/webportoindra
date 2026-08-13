// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("is-open");
});

// Tutup menu saat salah satu link diklik (mobile)
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
  });
});

// Animasi reveal saat elemen masuk ke layar
const revealTargets = document.querySelectorAll(
  ".work-card, .traffic-card, .school-block, .about-card, .hero-text, .hero-photo, .exp-card, .edu-card, .skill-card"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));
