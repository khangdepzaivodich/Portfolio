document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const removeActiveClasses = () => {
    navLinks.forEach((link) => {
      link.classList.remove("text-yellow-400");
    });
  };

  const addActiveClass = (id) => {
    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("text-yellow-400");
    }
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(`${entry.target.id} is intersecting`);
        entry.target.classList.add("show");
        entry.target.classList.remove("hide");
        removeActiveClasses();
        addActiveClass(entry.target.id);
      }
    });
  };

  const observerOptions = {
    root: null,
    threshold: 0.6,
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  const logo = document.getElementById("logo");
  logo.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    removeActiveClasses();
    const homeLink = document.querySelector(`nav a[href="#home"]`);
    if (homeLink) {
      homeLink.classList.add("text-yellow-400");
    }
  });

  document.addEventListener("scroll", () => {
    const scrollArrow = document.getElementById("scroll-arrow");
    if (window.scrollY > 0) {
      scrollArrow.style.opacity = 0;
    } else {
      scrollArrow.style.opacity = 1;
    }
  });
});
