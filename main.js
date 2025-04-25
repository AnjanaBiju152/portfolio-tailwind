
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
        });
    }
    
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        element.classList.add('active');
    });
    
    
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        backToTopButton.classList.add('active');
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});