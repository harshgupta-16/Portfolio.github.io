const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebar-close");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
});

sidebarClose.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});

// Optional: Close sidebar when a link is clicked
document.querySelectorAll("#sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.add("-translate-x-full");
    });
});

AOS.init({
    duration: 800,
    offset: 120,
    once: false // ensures it only animates once
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
      threshold: 0.6, // triggers when 60% of section is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
