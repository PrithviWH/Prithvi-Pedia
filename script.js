// Wait for the DOM to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    // Apply saved theme on load
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");
    
    // Apply saved theme if it's dark
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    }
    
    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        // Save the current theme to localStorage
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });
    
    // Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Page Load Animation
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});
