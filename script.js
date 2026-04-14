// Search + filters
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const sopCards = document.querySelectorAll('.sop-card');
    const noResults = document.getElementById('noResults');
    const activeFilters = {
        category: 'all',
        role: 'all'
    };

    function applySearchAndFilters() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        sopCards.forEach(card => {
            const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = card.querySelector('p')?.textContent.toLowerCase() || '';
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
            const details = card.querySelector('.card-details')?.textContent.toLowerCase() || '';

            const searchMatches =
                name.includes(searchTerm) ||
                description.includes(searchTerm) ||
                tags.includes(searchTerm) ||
                details.includes(searchTerm);

            const categories = (card.dataset.category || '').toLowerCase();
            const roles = (card.dataset.role || '').toLowerCase();

            const categoryMatches = activeFilters.category === 'all' || categories.includes(activeFilters.category);
            const roleMatches = activeFilters.role === 'all' || roles.includes(activeFilters.role);

            const isVisible = searchMatches && categoryMatches && roleMatches;
            card.style.display = isVisible ? 'block' : 'none';

            if (isVisible) {
                visibleCount += 1;
            }
        });

        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    searchInput.addEventListener('input', applySearchAndFilters);

    const hintButtons = document.querySelectorAll('.hint[data-suggest]');
    hintButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const suggestion = this.dataset.suggest || '';
            searchInput.value = suggestion;
            searchInput.focus();
            applySearchAndFilters();
        });
    });

    const filterButtons = document.querySelectorAll('.filter-btn[data-group][data-value]');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const group = this.dataset.group;
            const value = this.dataset.value;
            if (!group || !value) return;

            activeFilters[group] = value;

            const groupButtons = document.querySelectorAll(`.filter-btn[data-group="${group}"]`);
            groupButtons.forEach(groupBtn => groupBtn.classList.remove('active'));
            this.classList.add('active');

            applySearchAndFilters();
        });
    });

    applySearchAndFilters();
}

// Back to top button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Image modal
function initImageModal() {
    const screenshots = document.querySelectorAll('.screenshot');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    
    if (!modal) return;
    
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('click', function() {
            const img = this.querySelector('img');
            modal.classList.add('active');
            modalImg.src = img.src;
        });
    });
    
    function closeModal() {
        modal.classList.remove('active');
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Download QR code
function downloadQR() {
    const qrImage = document.querySelector('.qr-code-container img');
    if (!qrImage) return;
    
    const link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'YFL_Form_QR_Code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    initBackToTop();
    initImageModal();
});
