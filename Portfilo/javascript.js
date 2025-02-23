// Particle creation script
document.addEventListener("DOMContentLoaded", () => {
  const particlesContainer = document.querySelector(".particles");

  if (particlesContainer) {
    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 5 + "s";
      particlesContainer.appendChild(particle);
    }
  }
});

// Additional project-specific scripts (if needed)
console.log("Project page loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent closing immediately
    dropdownContent.classList.toggle("show");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    if (!dropdownBtn.contains(event.target)) {
      dropdownContent.classList.remove("show");
    }
  });
});
