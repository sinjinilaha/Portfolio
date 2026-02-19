// Dark Mode Auto Detect
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute("data-theme", "dark");
}

// Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", current === "dark" ? "light" : "dark");
});

// Typing Effect
const roles = [  "Computer Science Student",  "Curious About AI & Systems",  "Learning. Building. Improving."];

let i = 0, j = 0, deleting = false;
const typing = document.querySelector(".typing");

function type() {
    if (!typing) return;
    let text = roles[i];

    if (!deleting) {
        typing.textContent = text.substring(0, j++);
        if (j > text.length) {
            deleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        typing.textContent = text.substring(0, j--);
        if (j === 0) {
            deleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(type, deleting ? 50 : 100);
}
type();

// Progress Animation
document.querySelectorAll(".progress-fill").forEach(bar => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => bar.style.width = level + "%", 500);
});

// Scroll To Top
const scrollBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollBtn.classList.add("show");
    else scrollBtn.classList.remove("show");
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Copy Email
function copyEmail() {
    navigator.clipboard.writeText("sinjinilaha@gmail.com");
    alert("Email copied!");
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

document.querySelectorAll(".section, .internship-card").forEach(el => {
  observer.observe(el);
});
