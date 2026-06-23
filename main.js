/* =============================================================
   HARSH GUPTA — PORTFOLIO INTERACTIONS
   Pure JavaScript · No dependencies
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const particles = document.querySelector('.bg-particles');

  for (let i = 0; i < 15; i++) {
    const dot = document.createElement('span');

    dot.style.left = Math.random() * 100 + '%';
    dot.style.top = Math.random() * 100 + '%';

    dot.style.animationDelay = `${Math.random() * 20}s`;

    particles.appendChild(dot);
  }
  // =============================================================
  // 1. NAVBAR — Scroll effect & active section highlighting
  // =============================================================
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollTopBtn = document.getElementById('scroll-top');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar background on scroll
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll-to-top visibility
    if (scrollY > 600) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Active section highlighting
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href.substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial call

  // Scroll to top
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  // =============================================================
  // 2. MOBILE MENU
  // =============================================================
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('.nav-link, .btn-resume').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });


  // =============================================================
  // 3. THEME TOGGLE
  // =============================================================
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');

  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.className = 'fas fa-sun';
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      themeIcon.className = 'fas fa-moon';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.className = 'fas fa-sun';
      localStorage.setItem('theme', 'light');
    }
  });


  // =============================================================
  // 4. SCROLL REVEAL ANIMATIONS
  // =============================================================
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // =============================================================
  // 5. COUNTER ANIMATIONS
  // =============================================================
  const counterElements = document.querySelectorAll('[data-count]');
  let countersAnimated = new Set();

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 2000; // ms
    const startTime = performance.now();
    const suffix = '+';

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
        countersAnimated.add(entry.target);
        animateCounter(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  counterElements.forEach(el => counterObserver.observe(el));


  // =============================================================
  // 6. CONTACT FORM
  // =============================================================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value
    };

    // Reset status
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';

    try {
      const response = await fetch('https://portfolio-backend-olhh.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        formStatus.className = 'form-status success';
        formStatus.style.display = 'block';
        contactForm.reset();
      } else {
        formStatus.textContent = '✗ Failed to send message. Please try again.';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
      }
    } catch (err) {
      formStatus.textContent = '✗ Something went wrong. Please try emailing me directly.';
      formStatus.className = 'form-status error';
      formStatus.style.display = 'block';
      console.error('Contact form error:', err);
    }

    // Auto-hide status after 5s
    setTimeout(() => {
      formStatus.style.display = 'none';
    }, 5000);
  });


  // =============================================================
  // 7. SMOOTH SCROLL for anchor links (fallback)
  // =============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =============================================================
  // 8. BENTO GRID HOVER EFFECT
  // =============================================================
  document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  const planets = document.querySelectorAll('.planet');

  const title = document.getElementById('tooltip-title');
  const desc = document.getElementById('tooltip-desc');

  planets.forEach(planet => {

    planet.addEventListener('mouseenter', () => {

      title.textContent =
        planet.dataset.title;

      desc.textContent =
        planet.dataset.desc;
    });

  });

});