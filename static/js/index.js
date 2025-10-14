// static/js/index.js
// Portfolio data
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
    },
    {
        title: "Web Dashboard",
        category: "Web Design",
        description: "Admin dashboard interface mockup"
    },
    {
        title: "Print Advertisement",
        category: "Marketing",
        description: "Print ad mockup for campaign"
    },
    {
        title: "Social Media Graphics",
        category: "Digital",
        description: "Social media template series"
    }
];

// Populate portfolio grid
function loadPortfolioItems() {
    const grid = document.getElementById('portfolio-grid');
    
    portfolioItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'portfolio-item bg-white rounded-lg shadow-md overflow-hidden';
        itemElement.innerHTML = `
            <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span class="text-white text-lg font-semibold">${item.title}</span>
            </div>
            <div class="p-6">
                <span class="text-sm text-blue-600 font-semibold">${item.category}</span>
                <h3 class="text-xl font-bold mt-2 mb-3">${item.title}</h3>
                <p class="text-gray-600">${item.description}</p>
            </div>
        `;
        grid.appendChild(itemElement);
    });
}

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