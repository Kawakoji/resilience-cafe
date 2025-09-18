// ===== MAIN JAVASCRIPT FILE =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeMenuFilters();
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializeFormHandling();
    initializeMobileMenu();
    initializeCarousel();
    initializeVideoBackground();
    initializeAboutVideo();
    initializeEventVideo();
});

// ===== NAVIGATION =====
function initializeNavigation() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Active navigation link based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ===== MOBILE MENU =====
function initializeMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// ===== MENU FILTERS =====
function initializeMenuFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter menu items with animation
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.menu-item, .feature, .gallery-item, .stat');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Initialize child elements for staggered animations
    const animatedElements = document.querySelectorAll('.menu-item, .feature, .gallery-item, .stat');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== FORM HANDLING =====
function initializeFormHandling() {
    const contactForm = document.querySelector('.form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                showNotification('Thank you! Your message has been sent successfully.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Restore button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
        
        // Form validation
        const inputs = contactForm.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidation);
        });
    }
}

// ===== FORM VALIDATION =====
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing validation
    clearValidation({ target: field });
    
    let isValid = true;
    let message = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }
    
    // Show validation result
    if (!isValid) {
        field.classList.add('error');
        showFieldError(field, message);
    } else {
        field.classList.add('valid');
    }
}

function clearValidation(e) {
    const field = e.target;
    field.classList.remove('error', 'valid');
    
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
}

function showFieldError(field, message) {
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = 'var(--accent-color)';
    errorElement.style.fontSize = 'var(--fs-xs)';
    errorElement.style.marginTop = 'var(--space-xs)';
    errorElement.style.display = 'block';
    
    field.parentNode.appendChild(errorElement);
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'success' ? 'var(--primary-color)' : 'var(--accent-color)',
        color: 'white',
        borderRadius: 'var(--border-radius-md)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease-out',
        maxWidth: '300px',
        fontSize: 'var(--fs-sm)',
        fontWeight: '500'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handling
const optimizedScrollHandler = debounce(() => {
    // Scroll-based functionality here
}, 16); // ~60fps

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// ===== UTILITY FUNCTIONS =====

// Smooth scroll to element
function scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Get current scroll position
function getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Mobile menu styles are now handled in main.css

// ===== VIDEO BACKGROUND =====
function initializeVideoBackground() {
    const heroVideo = document.querySelector('.hero-video');
    
    if (heroVideo) {
        console.log('Initializing hero video');
        
        // Simple approach: just try to play when ready
        heroVideo.addEventListener('loadeddata', () => {
            console.log('Hero video loaded, attempting to play');
            heroVideo.play().catch(e => {
                console.log('Hero video autoplay prevented (normal on some browsers):', e.name);
            });
        });
        
        heroVideo.addEventListener('error', (e) => {
            console.log('Hero video error:', e);
            // Fallback to static background
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.display = 'block';
            }
        });
        
        // Simple intersection observer for performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (heroVideo.paused) {
                        heroVideo.play().catch(() => {}); // Silent fail
                    }
                } else {
                    if (!heroVideo.paused) {
                        heroVideo.pause();
                    }
                }
            });
        }, { threshold: 0.1, rootMargin: '50px' });
        
        // Observe after a delay to ensure video is loaded
        setTimeout(() => {
            observer.observe(heroVideo);
        }, 2000);
        
        // Handle mobile data saving
        if (navigator.connection && navigator.connection.saveData) {
            heroVideo.poster = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM4QjQ1MTMiLz48L3N2Zz4=';
        }
    }
}

// ===== ABOUT VIDEO =====
function initializeAboutVideo() {
    const aboutVideo = document.querySelector('.about-video');
    
    if (aboutVideo) {
        console.log('Initializing about video');
        
        // Simple approach: just try to play when ready
        aboutVideo.addEventListener('loadeddata', () => {
            console.log('About video loaded, attempting to play');
            aboutVideo.play().catch(e => {
                console.log('About video autoplay prevented (normal on some browsers):', e.name);
            });
        });
        
        aboutVideo.addEventListener('error', (e) => {
            console.log('About video error:', e);
        });
        
        // Simple intersection observer for performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (aboutVideo.paused) {
                        aboutVideo.play().catch(() => {}); // Silent fail
                    }
                } else {
                    if (!aboutVideo.paused) {
                        aboutVideo.pause();
                    }
                }
            });
        }, { threshold: 0.1, rootMargin: '50px' });
        
        // Observe after a delay to ensure video is loaded
        setTimeout(() => {
            observer.observe(aboutVideo);
        }, 3000);
        
        // Handle mobile data saving
        if (navigator.connection && navigator.connection.saveData) {
            console.log('Data saving mode detected, skipping autoplay');
        }
    }
}

// ===== EVENT VIDEO =====
function initializeEventVideo() {
    const eventVideo = document.querySelector('.event-video');
    
    if (eventVideo) {
        console.log('Initializing event video');
        
        // Simple approach: just try to play when ready
        eventVideo.addEventListener('loadeddata', () => {
            console.log('Event video loaded, attempting to play');
            eventVideo.play().catch(e => {
                console.log('Event video autoplay prevented (normal on some browsers):', e.name);
            });
        });
        
        eventVideo.addEventListener('error', (e) => { 
            console.log('Event video error:', e); 
        });
        
        // Simple intersection observer for performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (eventVideo.paused) {
                        eventVideo.play().catch(() => {}); // Silent fail
                    }
                } else {
                    if (!eventVideo.paused) {
                        eventVideo.pause();
                    }
                }
            });
        }, { threshold: 0.1, rootMargin: '50px' });
        
        // Observe after a delay to ensure video is loaded
        setTimeout(() => {
            observer.observe(eventVideo);
        }, 4000);
        
        // Check for data saving mode
        if (navigator.connection && navigator.connection.saveData) {
            console.log('Data saving mode detected, skipping autoplay');
        }
    }
}

// ===== INSTAGRAM CAROUSEL =====
function initializeCarousel() {
    const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevButton = document.getElementById('carouselPrev');
    const nextButton = document.getElementById('carouselNext');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    let isTransitioning = false;
    let autoplayInterval;
    
    // Initialize carousel
    function initCarousel() {
        updateCarousel();
        startAutoplay();
        
        // Add event listeners with better mobile support
        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
            prevButton.addEventListener('touchend', (e) => {
                e.preventDefault();
                prevSlide();
            });
        }
        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
            nextButton.addEventListener('touchend', (e) => {
                e.preventDefault();
                nextSlide();
            });
        }
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => goToSlide(index));
            dot.addEventListener('touchend', (e) => {
                e.preventDefault();
                goToSlide(index);
            });
        });
        
        // Pause autoplay on hover
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoplay);
            carouselContainer.addEventListener('mouseleave', startAutoplay);
        }
        
        // Touch/swipe support
        initTouchSupport();
        
        // Keyboard support
        document.addEventListener('keydown', handleKeyboard);
        
        // Click support for side slides
        initSideSlideClicks();
    }
    
    // Update carousel display
    function updateCarousel() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        
        // Update slides with 3D positioning
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next', 'hidden', 'entering');
            
            if (index === currentSlide) {
                // Center slide - active and fully visible
                slide.classList.add('active');
                setTimeout(() => {
                    slide.classList.add('entering');
                }, 50);
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                // Previous slide - left side
                slide.classList.add('prev');
            } else if (index === (currentSlide + 1) % slides.length) {
                // Next slide - right side
                slide.classList.add('next');
            } else {
                // Hidden slides
                slide.classList.add('hidden');
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Reset transition flag
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }
    
    // Navigate to specific slide
    function goToSlide(index) {
        if (index === currentSlide || isTransitioning) return;
        
        currentSlide = index;
        updateCarousel();
        restartAutoplay();
    }
    
    // Previous slide
    function prevSlide() {
        if (isTransitioning) return;
        
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        updateCarousel();
        restartAutoplay();
    }
    
    // Next slide
    function nextSlide() {
        if (isTransitioning) return;
        
        currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        updateCarousel();
        restartAutoplay();
    }
    
    // Autoplay functionality
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }
    
    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Touch/swipe support
    function initTouchSupport() {
        let startX = 0;
        let endX = 0;
        let startY = 0;
        let endY = 0;
        
        const carouselContainer = document.querySelector('.carousel-container');
        if (!carouselContainer) return;
        
        carouselContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            stopAutoplay();
        });
        
        carouselContainer.addEventListener('touchmove', (e) => {
            // Prevent default to avoid scrolling
            const deltaY = Math.abs(e.touches[0].clientY - startY);
            const deltaX = Math.abs(e.touches[0].clientX - startX);
            
            if (deltaX > deltaY) {
                e.preventDefault();
            }
        });
        
        carouselContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            const deltaX = startX - endX;
            const deltaY = Math.abs(startY - endY);
            
            // Only trigger if horizontal swipe is more significant than vertical
            if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > deltaY) {
                if (deltaX > 0) {
                    nextSlide(); // Swipe left - next slide
                } else {
                    prevSlide(); // Swipe right - previous slide
                }
            }
            
            startAutoplay();
        });
    }
    
    // Keyboard navigation
    function handleKeyboard(e) {
        const carouselSection = document.querySelector('.instagram-carousel-section');
        if (!carouselSection) return;
        
        // Check if carousel is in viewport
        const rect = carouselSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isVisible) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                prevSlide();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextSlide();
                break;
            case ' ': // Spacebar
                e.preventDefault();
                nextSlide();
                break;
        }
    }
    
    // Click support for side slides
    function initSideSlideClicks() {
        slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                if (slide.classList.contains('prev') || slide.classList.contains('next')) {
                    goToSlide(index);
                }
            });
        });
    }
    
    // Initialize the carousel
    initCarousel();
    
    // Intersection Observer for performance
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const carouselObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoplay();
            } else {
                stopAutoplay();
            }
        });
    }, observerOptions);
    
    const carouselSection = document.querySelector('.instagram-carousel-section');
    if (carouselSection) {
        carouselObserver.observe(carouselSection);
    }
}


