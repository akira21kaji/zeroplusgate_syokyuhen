const showKirin = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ["200px 0", 0],
  };
  const options = {
    root: document.querySelector("#kirin"),
    rootMargin: "10px",
    threshold: 0.8,
  };
  entries[0].target.animate(keyframes, options);
};

const kirinObserver = new IntersectionObserver(showKirin);

kirinObserver.observe(document.querySelector("#kirin"));
