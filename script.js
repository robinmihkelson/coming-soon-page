document.addEventListener("DOMContentLoaded", () => {
    const pageAim = document.querySelector(".pageaim");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pageAim.classList.add("show");
            observer.unobserve(pageAim);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(pageAim);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const goalCards = document.querySelectorAll(".goal-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    goalCards.forEach((card) => observer.observe(card));
  });
