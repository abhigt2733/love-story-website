// Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Slightly enlarge cursor on hover over links
    const isLinkHovered = e.target.tagName.toLowerCase() === 'a';
    cursor.style.transform = isLinkHovered 
        ? 'translate(-50%, -50%) scale(1.5)' 
        : 'translate(-50%, -50%) scale(1)';
});

// Scrolling header effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Creative Hearts Animation
document.addEventListener('DOMContentLoaded', () => {
    // Setup for the beating heart animation
    const beatingHeart = document.querySelector('.beating-heart');
    if (beatingHeart) {
        setInterval(() => {
            beatingHeart.classList.add('beat');
            setTimeout(() => {
                beatingHeart.classList.remove('beat');
            }, 500);
        }, 1500);
    }
    
    // Flying hearts animation
    const flyingHeartsContainer = document.querySelector('.flying-hearts-container');
    if (flyingHeartsContainer) {
        // Create random heart elements
        setInterval(createFlyingHeart, 1000);
    }
    
    // Heart path animation
    const heartPath = document.querySelector('.heart-path');
    if (heartPath) {
        // Create heart following a curved path
        setInterval(createPathHeart, 2000);
    }
    
    // Create a flying heart with random size and movement
    function createFlyingHeart() {
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'flying-heart');
        
        // Random properties
        const size = Math.random() * 20 + 10; // 10-30px
        const startX = Math.random() * window.innerWidth;
        const opacity = Math.random() * 0.5 + 0.5; // 0.5-1
        const duration = Math.random() * 4 + 3; // 3-7 seconds
        
        // Set style
        heart.style.fontSize = `${size}px`;
        heart.style.left = `${startX}px`;
        heart.style.opacity = opacity;
        heart.style.animationDuration = `${duration}s`;
        
        // Random color variations
        const colors = ['#ff6b6b', '#ff8787', '#e91e63', '#d81b60', '#ec407a'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        flyingHeartsContainer.appendChild(heart);
        
        // Remove after animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Create hearts that follow a curved path
    function createPathHeart() {
        if (!heartPath) return;
        
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'path-heart');
        
        // Random properties
        const size = Math.random() * 10 + 8; // 8-18px
        const delay = Math.random() * 2;
        const duration = Math.random() * 3 + 5; // 5-8 seconds
        
        // Set style
        heart.style.fontSize = `${size}px`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
        
        // Random color variations
        const colors = ['#ff6b6b', '#ff8787', '#e91e63', '#d81b60', '#ec407a'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        heartPath.appendChild(heart);
        
        // Remove after animation completes
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }
    
    // Interactive love letter effect
    const loveLetter = document.querySelector('.love-letter');
    if (loveLetter) {
        loveLetter.addEventListener('mouseenter', () => {
            // Create heart burst effect on hover
            for (let i = 0; i < 15; i++) {
                createBurstHeart(loveLetter);
            }
        });
    }
    
    // Gallery Lightbox
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (galleryItems.length > 0) {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        
        const lightboxContent = document.createElement('div');
        lightboxContent.className = 'lightbox-content';
        
        const lightboxImg = document.createElement('img');
        const lightboxCaption = document.createElement('div');
        lightboxCaption.className = 'lightbox-caption';
        
        const closeLightbox = document.createElement('span');
        closeLightbox.className = 'close-lightbox';
        closeLightbox.innerHTML = '&times;';
        
        // Assemble lightbox
        lightboxContent.appendChild(closeLightbox);
        lightboxContent.appendChild(lightboxImg);
        lightboxContent.appendChild(lightboxCaption);
        lightbox.appendChild(lightboxContent);
        document.body.appendChild(lightbox);
        
        // Add heart particles to lightbox
        const heartParticles = document.createElement('div');
        heartParticles.className = 'heart-particles';
        lightbox.appendChild(heartParticles);
        
        // Open lightbox on click
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const caption = item.querySelector('.gallery-caption');
                
                lightboxImg.src = img.src;
                lightboxCaption.textContent = caption.textContent;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
                
                // Create heart particles
                createHeartParticles();
            });
        });
        
        // Close lightbox functions
        closeLightbox.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            clearHeartParticles();
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
                clearHeartParticles();
            }
        });
        
        // Create heart particles animation
        function createHeartParticles() {
            clearHeartParticles();
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('i');
                    heart.classList.add('fas', 'fa-heart', 'particle-heart');
                    
                    // Random properties
                    const size = Math.random() * 20 + 10;
                    const startX = Math.random() * window.innerWidth;
                    const duration = Math.random() * 5 + 5;
                    
                    heart.style.left = `${startX}px`;
                    heart.style.fontSize = `${size}px`;
                    heart.style.animationDuration = `${duration}s`;
                    
                    // Random color variations
                    const colors = ['#ff6b6b', '#ff8787', '#e91e63', '#d81b60', '#ec407a'];
                    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                    
                    heartParticles.appendChild(heart);
                    
                    // Remove after animation
                    setTimeout(() => {
                        heart.remove();
                    }, duration * 1000);
                    
                }, i * 300);
            }
        }
        
        // Clear heart particles
        function clearHeartParticles() {
            heartParticles.innerHTML = '';
        }
    }
});
    // Create burst heart effect
    function createBurstHeart(element) {
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'burst-heart');
        
        // Random properties
        const size = Math.random() * 12 + 8;
        const rect = element.getBoundingClientRect();
        const parentRect = element.parentElement.getBoundingClientRect();
        
        // Position relative to the element
        const startX = rect.width/2 + (rect.left - parentRect.left);
        const startY = rect.height/2 + (rect.top - parentRect.top);
        
        heart.style.left = `${startX}px`;
        heart.style.top = `${startY}px`;
        heart.style.fontSize = `${size}px`;
        
        // Random direction and distance
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;
        const duration = Math.random() * 1 + 1;
        
        const destinationX = startX + Math.cos(angle) * distance;
        const destinationY = startY + Math.sin(angle) * distance;
        
        // Random color variations
        const colors = ['#ff6b6b', '#ff8787', '#e91e63', '#d81b60', '#ec407a'];
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        element.parentElement.appendChild(heart);
        
        // Animate the heart
        heart.animate([
            { transform: 'scale(0)', opacity: 1 },
            { transform: `translate(${destinationX - startX}px, ${destinationY - startY}px) scale(1)`, opacity: 1 },
            { transform: `translate(${destinationX - startX}px, ${destinationY - startY}px) scale(0)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.37, 0, 0.63, 1)',
            fill: 'forwards'
        }).onfinish = () => {
            heart.remove();
        };
    }
});




// Animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.25
    };
        
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.story-content, .gallery-item, .timeline-item, .heart-animation-container, .love-message-container')
        .forEach(element => {
            observer.observe(element);
        });
});