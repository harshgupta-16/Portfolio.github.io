const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebar-close");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

document.querySelectorAll("#sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
  });
});


AOS.init({
  duration: 650,
  offset: 120,
  once: false 
});

lucide.createIcons();


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelectorAll(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          link.forEach((el) => el.classList.add("active-link"));
        } else {
          link.forEach((el) => el.classList.remove("active-link"));
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});



 const body = document.body;
  const toggleDesktop = document.getElementById('theme-toggle-desktop');
  const toggleMobile = document.getElementById('theme-toggle-mobile');
  const iconDesktop = document.getElementById('mode-icon-desktop');
  const iconMobile = document.getElementById('mode-icon-mobile');

  // Start in dark mode unless light mode is saved
  const savedTheme = localStorage.getItem("dark-mode");
  const isDark = savedTheme !== "light"; // default dark

  applyTheme(isDark);

  // Event listeners
  toggleDesktop.addEventListener("change", () => {
    applyTheme(toggleDesktop.checked);
  });

  toggleMobile.addEventListener("change", () => {
    applyTheme(toggleMobile.checked);
  });

  // Theme toggle logic
  function applyTheme(isDark) {
    body.classList.toggle("dark-mode", isDark);
    body.classList.toggle("light-mode", !isDark);

    toggleDesktop.checked = isDark;
    toggleMobile.checked = isDark;

    iconDesktop.textContent = isDark ? "🌙" : "☀️";
    iconMobile.textContent = isDark ? "🌙" : "☀️";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
