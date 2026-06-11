window.onload = () => {
  const hamburger = document.getElementById("hamburger");
  const discover = document.getElementById("discover");
  const sidebar = document.getElementById("left-sidebar");

  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
    });
  }

  if (discover) {
    discover.addEventListener("click", () => {
      alert("Discover job opportunities like CFO, Analyst, Auditor, and get AI help!");
    });
  }
};
