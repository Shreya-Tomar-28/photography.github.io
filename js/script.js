// active links of  navbar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
      });
    });
  });

// smooth scrolling
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
  
      if (target) {
        const navbarOffset = 100; // Adjust based on your sticky navbar height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
  

  // animation on about me text
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // remove this line if you want it to fade only once
        }
      });
    });  
    document.querySelectorAll(".fade-in-on-scroll").forEach(el => {
      observer.observe(el);
    });
  });

//   click event portfolio li elements
const items = document.querySelectorAll('.portfolio-item');
items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Add logic here if you want to filter images by category
  });
});


  
  