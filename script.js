
    const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Toggle menu visibility on button click
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Toggles "X" icon
    menu.classList.toggle('active');      // Toggles menu visibility
});

// Reset to horizontal layout when screen width is above 768px
window.addEventListener('resize', () => {
    if (window.innerWidth > 650) {
        menu.classList.remove('active'); // Ensure menu is shown in horizontal mode
        menuToggle.classList.remove('active'); // Reset toggle button state
    }
});
