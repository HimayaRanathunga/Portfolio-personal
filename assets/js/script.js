document.addEventListener("DOMContentLoaded", function () {
    
  // Smooth Scroll for Navbar Links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });

  // Navbar Collapse on Link Click (for Mobile View)
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler) {
      navbarToggler.addEventListener("click", function () {
          navbarCollapse.classList.toggle("show");
      });

      navLinks.forEach(link => {
          link.addEventListener("click", function () {
              navbarCollapse.classList.remove("show");
          });
      });
  }

  // About Section Fade-In Animation
  const aboutSection = document.querySelector("#about");
  
  function fadeInSection() {
      if (!aboutSection) return;  // Avoid errors if section is missing
      const sectionPos = aboutSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;
      if (sectionPos < screenPos) {
          aboutSection.classList.add("show");
      }
  }
  window.addEventListener("scroll", fadeInSection);
  fadeInSection(); // Run once on page load

  // Skills Progress Bars Animation
  const progressBars = document.querySelectorAll(".progress-bar");
  
  function fillBars() {
      progressBars.forEach(bar => {
          bar.style.width = bar.getAttribute("style").match(/\d+/)[0] + "%"; // Ensure correct width is applied
      });
  }
  
  const skillsSection = document.getElementById("skills");
  window.addEventListener("scroll", function () {
      if (!skillsSection) return;
      const sectionPos = skillsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;
      if (sectionPos < screenPos) {
          fillBars();
      }
  });

  // Contact Form Validation
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
          event.preventDefault();
          
          let name = document.getElementById("name").value.trim();
          let email = document.getElementById("email").value.trim();
          let message = document.getElementById("message").value.trim();
          let errorMessage = document.getElementById("error-message");

          if (name === "" || email === "" || message === "") {
              errorMessage.textContent = "All fields are required!";
              errorMessage.classList.add("text-danger");
          } else if (!/\S+@\S+\.\S+/.test(email)) {
              errorMessage.textContent = "Please enter a valid email!";
              errorMessage.classList.add("text-danger");
          } else {
              errorMessage.textContent = "Message sent successfully!";
              errorMessage.classList.remove("text-danger");
              errorMessage.classList.add("text-success");

              // Clear form after submission
              contactForm.reset();
          }
      });
  }
});
