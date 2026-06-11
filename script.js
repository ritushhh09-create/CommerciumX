document.getElementById("hamburger").addEventListener("click", () => {
  const sidebar = document.getElementById("left-sidebar");
  sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
});

document.getElementById("discover").addEventListener("click", () => {
  alert("Discover job opportunities like CFO, Analyst, Auditor, and get AI help!");
});
