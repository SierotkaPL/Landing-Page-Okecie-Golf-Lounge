document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('scrolled'); // Always keep scrolled background or change style if desired
            // Let's actually toggle it
            // navbar.classList.remove('scrolled');
        }
        
        // Actually proper logic:
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Handle form submission (Mock)
    const form = document.getElementById('lead-form');
    const successMsg = document.getElementById('success-message');
    const nameInput = document.getElementById('name');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get user's name to personalize validation message
            const userName = nameInput.value;
            
            // In a real app, this would be a fetch/axios call to a backend
            // Here we just mock the success state
            
            // Change button to loading state
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Wysyłanie...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
                successMsg.querySelector('h3').textContent = `Dziękujemy, ${userName}! 🎉`;
            }, 1000); // Mock network latency
        });
    }
});
