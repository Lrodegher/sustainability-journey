function showProject(id) {
    document.querySelectorAll(".project-section").forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(id).style.display = "block";
  }
  // Mostrar projeto 1 ao carregar
  window.onload = () => showProject("project1");
  
  // Troca de idioma (EN/PT)
  let currentLang = "en";
  function toggleLanguage() {
    currentLang = currentLang === "en" ? "pt" : "en";
    document.querySelectorAll(".lang").forEach((el) => {
      const newText = el.getAttribute("data-" + currentLang);
      if (newText) el.textContent = newText;
    });
  }
  
  // Wait for DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Initial setup
    showProject("project1");
    setupLanguageToggle();
    addScrollAnimations();
  
    // Add active class to buttons based on current project
    updateActiveNavButton("project1");
  });
  
  // Function to show selected project
  function showProject(id) {
    // Hide all projects with fade-out effect
    document.querySelectorAll(".project-section").forEach((section) => {
      section.style.opacity = "0";
      setTimeout(() => {
        section.style.display = "none";
      }, 300);
    });
  
    // Show selected project with fade-in effect
    setTimeout(() => {
      const selectedProject = document.getElementById(id);
      selectedProject.style.display = "block";
  
      // Force a reflow
      void selectedProject.offsetWidth;
  
      selectedProject.style.opacity = "1";
  
      // Update active button
      updateActiveNavButton(id);
  
      // Scroll to top of the project with smooth animation
      window.scrollTo({
        top: selectedProject.offsetTop - 170,
        behavior: "smooth",
      });
    }, 350);
  }
  
  // Update active state of navigation buttons
  function updateActiveNavButton(activeId) {
    document.querySelectorAll("nav button").forEach((button) => {
      // Remove active class from all buttons
      button.classList.remove("active");
  
      // Check if this button corresponds to the active project
      if (button.getAttribute("onclick").includes(activeId)) {
        button.classList.add("active");
      }
    });
  }
  
  // Enhanced language toggle with flag icons
  function setupLanguageToggle() {
    const langToggle = document.querySelector(".lang-toggle");
  
    // Set initial state
    langToggle.setAttribute("data-lang", "en");
    langToggle.textContent = "EN / PT";
  
    // Add event listener
    langToggle.addEventListener("click", toggleLanguage);
  }
  
  // Toggle language with visual feedback
  function toggleLanguage2() {
    const langToggle = document.querySelector(".lang-toggle");
    const currentLang = langToggle.getAttribute("data-lang");
    const newLang = currentLang === "en" ? "pt" : "en";
  
    // Update toggle button
    langToggle.setAttribute("data-lang", newLang);
    // Toggle language with visual feedback
    function toggleLanguage2() {
      const langToggle = document.querySelector(".lang-toggle");
      const currentLang = langToggle.getAttribute("data-lang");
      const newLang = currentLang === "en" ? "pt" : "en";
  
      // Update toggle button
      langToggle.setAttribute("data-lang", newLang);
  
      // Add rotation animation
      langToggle.classList.add("rotating");
      setTimeout(() => {
        langToggle.classList.remove("rotating");
      }, 500);
  
      // Update all text elements with language attributes
      document.querySelectorAll(".lang").forEach((el) => {
        const newText = el.getAttribute("data-" + newLang);
  
        if (newText) {
          // Fade out
          el.style.opacity = "0";
  
          // Change text and fade in
          setTimeout(() => {
            el.textContent = newText;
            el.style.opacity = "1";
          }, 200);
        }
      });
    }
  
    // Remove funções desnecessárias
    // ...
  
    // Organizei o código para que seja mais fácil de ler e entender
    // Add rotation animation
    langToggle.classList.add("rotating");
    setTimeout(() => {
      langToggle.classList.remove("rotating");
    }, 500);
  
    // Update all text elements with language attributes
    document.querySelectorAll(".lang").forEach((el) => {
      const newText = el.getAttribute("data-" + newLang);
  
      if (newText) {
        // Fade out
        el.style.opacity = "0";
  
        // Change text and fade in
        setTimeout(() => {
          el.textContent = newText;
          el.style.opacity = "1";
        }, 200);
      }
    });
  }
  
  // Add scroll animation to reveal content
  function addScrollAnimations() {
    // Get all steps for scroll animation
    const steps = document.querySelectorAll(".step");
  
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Unobserve after animation is applied
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );
  
    // Apply observer to each step
    steps.forEach((step) => {
      step.classList.add("hidden-step");
      observer.observe(step);
    });
  }
  
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // Add CSS animation classes
  document.head.insertAdjacentHTML(
    "beforeend",
    `
      <style>
        .hidden-step {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.8s ease-out;
        }
        
        .visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .rotating {
          animation: rotate 0.5s ease-in-out;
        }
        
        @keyframes rotate {
          0% { transform: rotateY(0); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(360deg); }
        }
        
        nav button.active {
          background: var(--primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .lang {
          transition: opacity 0.3s ease;
        }
      </style>
    `
  );
  