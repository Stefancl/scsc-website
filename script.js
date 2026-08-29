// Replace with Sonia's WhatsApp number in international format, digits only.
// Example South African format: 27821234567
const WHATSAPP_NUMBER = "27820000000";

const defaultMessage = encodeURIComponent(
  "Hi Sonia, I'd love to enquire about a photography session with SCSC."
);

const whatsappLink = document.getElementById("whatsapp-link");
if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${defaultMessage}`;
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header?.classList.toggle("scrolled", window.scrollY > 60);
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const open = nav?.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(Boolean(open)));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});
