// static/js/index.js

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadPortfolioItems();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = this.querySelectorAll('span');
            if (mobileNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Portfolio data and loading function (keep your existing code)
    const portfolioItems = [
        {
            title: "Brand Identity Mockup",
            category: "Branding",
            description: "Complete brand identity mockup for tech startup"
        },
        {
            title: "Mobile App Interface",
            category: "UI/UX",
            description: "Mobile application interface design mockups"
        },
        {
            title: "Packaging Design",
            category: "Product",
            description: "Product packaging mockup series"
        }
    ];

    // Populate portfolio grid
    const gridContainer = document.querySelector('.mockup-grid');
    
    if (gridContainer) {
        portfolioItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item bg-white rounded-lg shadow-md overflow-hidden';
            portfolioItem.innerHTML = `
                <div class="h-48 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                    <span class="text-white text-lg font-semibold">Mockup Preview</span>
                </div>
                <div class="p-6">
                    <span class="text-sm text-blue-600 font-semibold">${item.category}</span>
                    <h3 class="text-xl font-bold mt-2 mb-3">${item.title}</h3>
                    <p class="text-gray-600">${item.description}</p>
                </div>
            `;
            gridContainer.appendChild(portfolioItem);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ====================START HERO SECTION =====================
// Hero section animations and interactions
function initHeroSection() {
    // Animate stats counting
    const animateStats = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    };

    // Intersection Observer for stats animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // Mouse move parallax effect
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { width, height } = hero.getBoundingClientRect();
            
            const x = (clientX - width / 2) / width;
            const y = (clientY - height / 2) / height;
            
            const shapes = document.querySelectorAll('.floating-shape');
            shapes.forEach((shape, index) => {
                const speed = 0.5 + index * 0.1;
                const xMove = x * 20 * speed;
                const yMove = y * 20 * speed;
                
                shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });
    }

    // Smooth scroll for CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const workSection = document.getElementById('work');
            if (workSection) {
                workSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize hero section when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Your existing mobile menu and portfolio code...
    
    // Initialize hero section
    initHeroSection();
    
    // Rest of your existing code...
});
// ====================END HERO SECTION =====================


// =====================START ABOUT SECTION ===================

// =====================END ABOUT SECTION =====================

// =====================START PROJECT SECTION ===================

// =====================END PROJECT SECTION =====================

// =====================START CONTACT SECTION ===================

// =====================END CONTACT SECTION =====================

// =====================START FOOTER SECTION ===================

// =====================END FOOTER SECTION =====================