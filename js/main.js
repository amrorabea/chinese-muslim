/* ============================================================
   EL MOSLEM - Main JavaScript
   Navigation, Scroll Animations, Menu Filters
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileNav();
  initScrollReveal();
  initMenuNav();
  initSmoothScroll();
});

/* ==================== NAVBAR SCROLL EFFECT ==================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* ==================== MOBILE NAVIGATION ==================== */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ==================== SCROLL REVEAL ANIMATION ==================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Add stagger delay for children
        const children = entry.target.querySelectorAll('.reveal-child');
        children.forEach((child, index) => {
          child.style.transitionDelay = `${index * 100}ms`;
          child.classList.add('visible');
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==================== MENU CATEGORY NAVIGATION ==================== */
function initMenuNav() {
  const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
  const menuCategories = document.querySelectorAll('.menu-category');

  if (menuNavBtns.length === 0) return;

  // Click to scroll
  menuNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-category');
      const section = document.getElementById(target);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }

      // Update active state
      menuNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Scroll spy for active state
  if (menuCategories.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          menuNavBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === id);
          });

          // Scroll the active button into view in the nav
          const activeBtn = document.querySelector(`.menu-nav-btn[data-category="${id}"]`);
          if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-140px 0px -60% 0px'
    });

    menuCategories.forEach(cat => observer.observe(cat));
  }
}

/* ==================== SMOOTH SCROLL FOR ANCHOR LINKS ==================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==================== PARALLAX EFFECT (subtle) ==================== */
window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg img');
  if (heroBg) {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
  }
}, { passive: true });

/* ==================== PAGE LOAD ANIMATION ==================== */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
