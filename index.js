// ================================
// Wait until the page is fully loaded
// ================================
document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // Footer Year
  // ================================
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // ================================
  // Mobile Navigation
  // ================================
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".navmenu ul");

  if (navToggle && navMenu) {

    navToggle.addEventListener("click", () => {

      navMenu.classList.toggle("open");

      navToggle.classList.toggle("bi-list");
      navToggle.classList.toggle("bi-x");

    });

    document.querySelectorAll(".navmenu a").forEach(link => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        navToggle.classList.remove("bi-x");
        navToggle.classList.add("bi-list");

      });

    });

  }

  // ================================
  // Typed Hero Text
  // ================================
  const typedEl = document.getElementById("typedText");

  if (typedEl) {

    const roles = [
      "Python Developer",
      "Backend Developer",
      "Flask Developer",
      "Problem Solver"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {

      const current = roles[roleIndex];

      if (!deleting) {

        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {

          deleting = true;

          setTimeout(typeLoop, 1500);

          return;
        }

      } else {

        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {

          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;

        }

      }

      setTimeout(typeLoop, deleting ? 40 : 80);

    }

    typeLoop();

  }

  // ================================
  // Portfolio Filter
  // ================================
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterBtns.length && portfolioItems.length) {

    filterBtns.forEach(btn => {

      btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {

          const categories = item.dataset.category.split(" ");

          if (filter === "all" || categories.includes(filter)) {

            item.classList.remove("hidden");

          } else {

            item.classList.add("hidden");

          }

        });

      });

    });

  }

  // ================================
  // Contact Form
  // ================================
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  if (contactForm && formNote) {

    contactForm.addEventListener("submit", function (e) {

      e.preventDefault();

      formNote.textContent =
        "Thanks! This portfolio form isn't connected to a backend yet.";

    });

  }

  // ================================
  // Back To Top
  // ================================
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 400) {

        backToTop.classList.add("show");

      } else {

        backToTop.classList.remove("show");

      }

    });

  }

  // ================================
  // Active Navigation
  // ================================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navmenu a");

  if (sections.length && navLinks.length) {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const id = entry.target.getAttribute("id");

          navLinks.forEach(link => {

            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + id
            );

          });

        }

      });

    }, {
      threshold: 0.5
    });

    sections.forEach(section => observer.observe(section));

  }

});