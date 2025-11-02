// FanTector - Solar-Powered Mini Fan - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function setActiveLink() {
        let scrollPosition = window.scrollY + 100; // Offset for navbar height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Set initial active link
    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('backToTop');
    
    // Show button when user scrolls down 300px
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Smooth scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scroll to top when logo is clicked
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Team member hover effects
    const teamMembers = document.querySelectorAll('.team-member-card');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            // Add a subtle pulse animation to the image
            const img = this.querySelector('.team-member-img');
            if (img) {
                img.style.transform = 'scale(1.05)';
                img.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.3)';
            }
            
            // Highlight the role badge
            const roleBadge = this.querySelector('.team-member-role');
            if (roleBadge) {
                roleBadge.style.transform = 'scale(1.1)';
            }
        });
        
        member.addEventListener('mouseleave', function() {
            // Reset the image
            const img = this.querySelector('.team-member-img');
            if (img) {
                img.style.transform = 'scale(1)';
                img.style.boxShadow = 'none';
            }
            
            // Reset the role badge
            const roleBadge = this.querySelector('.team-member-role');
            if (roleBadge) {
                roleBadge.style.transform = 'scale(1)';
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
