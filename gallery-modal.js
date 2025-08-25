document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('gallery-modal');
    const closeBtn = document.querySelector('.close-modal');
    const galleryContainer = document.getElementById('gallery-container');
    
    // Gallery content for both galleries
    const galleryContent = {
        tuburan: [
            { img: '../sweet/competition.png', title: 'Competition', desc: 'Striving for excellence' },
            { img: '../sweet/gown.jpg', title: 'Evening Gown', desc: 'Grace and poise' },
            { img: '../sweet/crown.jpg', title: 'Crown Moment', desc: 'Wearing the crown with pride' },
            { img: '../sweet/traditional.png', title: 'Traditional Wear', desc: 'Celebrating cultural heritage' },
            { img: '../sweet/swimwear.png', title: 'Swimwear Competition', desc: 'Confidence and elegance in swimwear' },
            { img: '../sweet/winner.jpg', title: 'Winner Announcement', desc: 'Crowned Miss Tuburan Tourism 2024' },
            { img: '../sweet/interview.jpg', title: 'Q&A', desc: 'Answering questions with confidence' },
            { img: '../sweet/campaign.jpg', title: 'Campaign Event', desc: 'Leading community initiatives' }
        ],
        tabuelan: [
            { img: '../sweet/Tgown.jpg', title: 'Evening Gown', desc: 'Elegance personified' },
            { img: '../sweet/Tcompetition.jpg', title: 'Competition', desc: 'Representing with pride' },
            { img: '../sweet/Tswimwear.jpg', title: 'Swimwear', desc: 'Confidence by the shore' },
            { img: '../sweet/Talent.jpg', title: 'Talent Show', desc: 'Showcasing unique abilities' }
        ]
    };
    
    // Function to generate gallery HTML
    function generateGalleryItems(items) {
        return items.map(item => `
            <div class="gallery-item" data-category="${item.title.toLowerCase().replace(' ', '-')}">
                <img src="${item.img}" alt="${item.title}">
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Function to open modal with specific gallery
    function openGallery(galleryId) {
        console.log('Opening gallery:', galleryId);
        
        // Get the gallery title
        const galleryTitle = document.querySelector(`[data-gallery-id="${galleryId}"] h2`).textContent;
        
        // Generate gallery items
        const galleryItems = generateGalleryItems(galleryContent[galleryId] || []);
        
        // Create gallery HTML
        const galleryHTML = `
            <h2>${galleryTitle} Gallery</h2>
            <div class="gallery-grid">
                ${galleryItems}
            </div>
        `;
        
        // Update modal content
        galleryContainer.innerHTML = galleryHTML;
        
        // Show the modal with animation
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Trigger reflow to ensure the element is in the DOM before adding the class
        void modal.offsetWidth;
        
        // Add active class to trigger the animation
        modal.classList.add('active');
    }
    
    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        
        // Wait for the animation to complete before hiding the modal
        setTimeout(() => {
            modal.style.display = 'none';
            // Clear the modal content after animation
            galleryContainer.innerHTML = '';
            // Restore body scroll
            document.body.style.overflow = '';
        }, 300); // Match this with the CSS transition time
    }
    
    // Add click event to all view gallery buttons
    document.querySelectorAll('.view-gallery-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const galleryId = this.getAttribute('data-gallery');
            openGallery(galleryId);
        });
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
