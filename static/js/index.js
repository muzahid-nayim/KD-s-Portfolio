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
// Projects Data with Real Images and Details
const projectsData = [
    {
        id: 1,
        title: "Tech Brand Identity Package",
        category: "Branding",
        description: "Complete brand identity mockups for a modern tech company including digital and print applications.",
        type: "Digital & Print",
        image: "static/Img/mockup1.jpg",
        fallbackText: "Tech Brand Mockup",
        details: {
            client: "TechInnovate Inc.",
            timeline: "4 weeks",
            technologies: ["Photoshop", "Illustrator", "Figma"],
            challenge: "Create a modern, trustworthy brand identity that appeals to both enterprise clients and individual consumers.",
            solution: "Developed a clean, geometric logo system with versatile color palettes and typography.",
            deliverables: [
                "Logo design variations",
                "Business card mockups",
                "Letterhead designs",
                "Social media templates",
                "Brand style guide"
            ]
        }
    },
    {
        id: 2,
        title: "Premium Product Packaging",
        category: "Packaging",
        description: "Luxury packaging mockups for high-end skincare products with realistic material textures.",
        type: "3D Packaging",
        image: "static/Img/mockup2.jpg",
        fallbackText: "Packaging Mockup",
        details: {
            client: "LuxeSkin Care",
            timeline: "3 weeks",
            technologies: ["Photoshop", "Dimension", "Blender"],
            challenge: "Create premium packaging that reflects brand luxury while maintaining eco-friendly credentials.",
            solution: "Designed minimalist packaging using recycled materials with subtle embossing and foil stamping.",
            deliverables: [
                "3D packaging renders",
                "Material finish mockups",
                "Print-ready designs",
                "Sustainable material options"
            ]
        }
    },
    {
        id: 3,
        title: "Fashion Line Mockups",
        category: "Apparel",
        description: "Clothing mockups featuring brand logos and designs on various garment types and colors.",
        type: "Fashion",
        image: "static/Img/mockup3.avif",
        fallbackText: "Apparel Mockup",
        details: {
            client: "UrbanThreads Fashion",
            timeline: "2 weeks",
            technologies: ["Photoshop", "Illustrator"],
            challenge: "Showcase clothing designs realistically across different fabrics and garment types.",
            solution: "Created versatile mockup templates that work with various fabric textures and lighting conditions.",
            deliverables: [
                "T-shirt mockups",
                "Hoodie designs",
                "Accessory mockups",
                "Product variation sets"
            ]
        }
    },
    {
        id: 4,
        title: "Mobile App Interface",
        category: "Digital",
        description: "Smartphone and tablet mockups showcasing app interfaces in realistic device frames.",
        type: "UI Mockups",
        image: "static/Img/mockup1.jpg",
        fallbackText: "App Interface Mockup",
        details: {
            client: "AppVenture Studios",
            timeline: "3 weeks",
            technologies: ["Figma", "Adobe XD", "Sketch"],
            challenge: "Display app interfaces realistically across multiple device sizes and orientations.",
            solution: "Developed a comprehensive device mockup library with realistic shadows and perspectives.",
            deliverables: [
                "iPhone mockup series",
                "iPad layouts",
                "Android device frames",
                "Multi-screen presentations"
            ]
        }
    },
    {
        id: 5,
        title: "Business Stationery Set",
        category: "Print",
        description: "Professional stationery mockups including business cards, letterheads, and envelopes.",
        type: "Print Design",
        image: "static/Img/mockup1.jpg",
        fallbackText: "Stationery Mockup",
        details: {
            client: "Corporate Solutions Ltd.",
            timeline: "2 weeks",
            technologies: ["Photoshop", "Illustrator"],
            challenge: "Create professional stationery that reflects corporate identity while being print-ready.",
            solution: "Designed coordinated stationery set with consistent branding and premium finishes.",
            deliverables: [
                "Business card mockups",
                "Letterhead designs",
                "Envelope templates",
                "Compliment slip designs"
            ]
        }
    },
    {
        id: 6,
        title: "E-commerce Website",
        category: "Web",
        description: "Browser mockups displaying website designs across different screen sizes and devices.",
        type: "Web Mockups",
        image: "static/Img/mockup1.jpg",
        fallbackText: "Website Mockup",
        details: {
            client: "ShopEasy E-commerce",
            timeline: "4 weeks",
            technologies: ["Figma", "Photoshop", "Webflow"],
            challenge: "Showcase responsive web design across desktop, tablet, and mobile views.",
            solution: "Created comprehensive browser mockups with realistic device frames and backgrounds.",
            deliverables: [
                "Desktop browser mockups",
                "Tablet view designs",
                "Mobile layouts",
                "Responsive design showcase"
            ]
        }
    }
];

// Carousel functionality
function initProjectsCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselPrev = document.getElementById('carouselPrev');
    const carouselNext = document.getElementById('carouselNext');
    const carouselProgress = document.getElementById('carouselProgress');
    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    let currentSlide = 0;
    const slidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const totalSlides = projectsData.length;

    // Render projects
    function renderProjects() {
        carouselTrack.innerHTML = '';
        projectsData.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-project-id', project.id);
            projectCard.innerHTML = `
                <div class="project-image">
                    <img 
                        src="${project.image}" 
                        alt="${project.title}"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    >
                    <div class="image-placeholder" style="display: none;">
                        ${project.fallbackText}
                    </div>
                </div>
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-meta">
                        <span class="project-type">${project.type}</span>
                        <span class="view-project">
                            View Details
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
            `;
            carouselTrack.appendChild(projectCard);
        });

        // Add click event to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't trigger if clicking the view project text (we'll handle that separately)
                if (!e.target.closest('.view-project')) {
                    const projectId = parseInt(card.getAttribute('data-project-id'));
                    showProjectModal(projectId);
                }
            });
        });

        // Add click event to view project buttons
        document.querySelectorAll('.view-project').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click event
                const projectCard = e.target.closest('.project-card');
                const projectId = parseInt(projectCard.getAttribute('data-project-id'));
                showProjectModal(projectId);
            });
        });
    }

    // Render progress dots
    function renderProgressDots() {
        carouselProgress.innerHTML = '';
        const totalDots = Math.ceil(totalSlides / slidesToShow);
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = `progress-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(i * slidesToShow));
            carouselProgress.appendChild(dot);
        }
    }

    // Update carousel position
    function updateCarousel() {
        const cardWidth = document.querySelector('.project-card').offsetWidth + 32; // including gap
        const transformValue = -currentSlide * cardWidth;
        carouselTrack.style.transform = `translateX(${transformValue}px)`;
        
        // Update progress dots
        const activeDotIndex = Math.floor(currentSlide / slidesToShow);
        document.querySelectorAll('.progress-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }

    // Navigate to specific slide
    function goToSlide(slideIndex) {
        currentSlide = Math.max(0, Math.min(slideIndex, totalSlides - slidesToShow));
        updateCarousel();
    }

    // Next slide
    function nextSlide() {
        if (currentSlide < totalSlides - slidesToShow) {
            currentSlide++;
            updateCarousel();
        } else {
            // Loop back to start
            currentSlide = 0;
            updateCarousel();
        }
    }

    // Previous slide
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        } else {
            // Loop to end
            currentSlide = totalSlides - slidesToShow;
            updateCarousel();
        }
    }

    // Show project details modal
    function showProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        modalBody.innerHTML = `
            <div class="modal-project">
                <div class="modal-header">
                    <span class="project-category">${project.category}</span>
                    <h2 class="modal-title">${project.title}</h2>
                </div>
                
                <div class="modal-image">
                    <div class="project-image-large">
                        <img 
                            src="${project.image}" 
                            alt="${project.title}"
                            onerror="this.style.display='none';"
                        >
                    </div>
                </div>
                
                <div class="modal-details">
                    <div class="detail-grid">
                        <div class="detail-item">
                            <h4>Client</h4>
                            <p>${project.details.client}</p>
                        </div>
                        <div class="detail-item">
                            <h4>Timeline</h4>
                            <p>${project.details.timeline}</p>
                        </div>
                        <div class="detail-item">
                            <h4>Technologies</h4>
                            <div class="tech-tags">
                                ${project.details.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="challenge-section">
                        <h4>The Challenge</h4>
                        <p>${project.details.challenge}</p>
                    </div>
                    
                    <div class="solution-section">
                        <h4>The Solution</h4>
                        <p>${project.details.solution}</p>
                    </div>
                    
                    <div class="deliverables-section">
                        <h4>Deliverables</h4>
                        <ul>
                            ${project.details.deliverables.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close modal function
    function closeModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Event listeners
    carouselPrev.addEventListener('click', prevSlide);
    carouselNext.addEventListener('click', nextSlide);

    // Modal close events
    modalClose.addEventListener('click', closeModal);

    // Close modal on backdrop click
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (projectModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
    });

    // Initialize
    renderProjects();
    renderProgressDots();
    updateCarousel();

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newSlidesToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            currentSlide = 0;
            updateCarousel();
            renderProgressDots();
        }, 250);
    });

    // Auto-advance carousel (optional)
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause auto-slide on hover
    carouselTrack.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    carouselTrack.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });
}

// Initialize projects carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Your existing initialization code...
    
    // Initialize projects carousel
    initProjectsCarousel();
});
// =====================END PROJECT SECTION =====================

// =====================START CONTACT SECTION ===================

// =====================END CONTACT SECTION =====================

// =====================START FOOTER SECTION ===================

// =====================END FOOTER SECTION =====================