// Navbar Toggle Animation Script
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbarToggler');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            const barsIcon = this.querySelector('.bars-icon');
            const closeIcon = this.querySelector('.close-icon');
            
            // Toggle the icons based on aria-expanded attribute
            if (this.getAttribute('aria-expanded') === 'true') {
                barsIcon.classList.add('d-none');
                closeIcon.classList.remove('d-none');
            } else {
                barsIcon.classList.remove('d-none');
                closeIcon.classList.add('d-none');
            }
        });
    }
    
    // Close menu when clicking on a nav link (for mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const navbarCollapse = document.getElementById('navbarSupportedContent');
            const navbarToggler = document.getElementById('navbarToggler');
            
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                navbarToggler.setAttribute('aria-expanded', 'false');
                
                // Reset icons
                const barsIcon = navbarToggler.querySelector('.bars-icon');
                const closeIcon = navbarToggler.querySelector('.close-icon');
                barsIcon.classList.remove('d-none');
                closeIcon.classList.add('d-none');
            }
        });
    });
});