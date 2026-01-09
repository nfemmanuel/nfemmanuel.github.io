// Carousel state
let currentSlide = 0;
const originalCards = document.querySelectorAll('.project-card');
const cardsContainer = document.querySelector('.project-cards');
const totalSlides = originalCards.length;
let autoScrollInterval;
let isTransitioning = false;

// Clone first and last cards for infinite loop
function createInfiniteLoop() {
    // Clone last card and prepend
    const lastClone = originalCards[totalSlides - 1].cloneNode(true);
    lastClone.classList.add('clone');
    lastClone.dataset.index = '-1';
    cardsContainer.insertBefore(lastClone, cardsContainer.firstChild);

    // Clone first card and append
    const firstClone = originalCards[0].cloneNode(true);
    firstClone.classList.add('clone');
    firstClone.dataset.index = totalSlides.toString();
    cardsContainer.appendChild(firstClone);

    // Add click handlers to clones
    lastClone.addEventListener('click', () => {
        if (!isTransitioning) {
            goToSlide(totalSlides - 1);
        }
    });

    firstClone.addEventListener('click', () => {
        if (!isTransitioning) {
            goToSlide(0);
        }
    });
}

// Get all cards including clones
function getAllCards() {
    return document.querySelectorAll('.project-card');
}

// Create indicator dots
function createIndicators() {
    const container = document.querySelector('.carousel-indicators');
    container.innerHTML = ''; // Clear existing

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        container.appendChild(dot);
    }
}

// Update active states
function updateSlide(index, instant = false) {
    const allCards = getAllCards();

    // Update cards - offset by 1 because of prepended clone
    allCards.forEach((card, i) => {
        card.classList.toggle('active', i === index + 1);
    });

    // Update indicators (use modulo for real index)
    const realIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    const indicators = document.querySelectorAll('.indicator-dot');

    indicators.forEach((dot, i) => {
        const isActive = i === realIndex;

        if (isActive) {
            // Remove and re-add active class to restart animation
            dot.classList.remove('active');
            // Force reflow to restart animation
            void dot.offsetWidth;
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update progress text
    document.getElementById('current-project').textContent = realIndex + 1;

    // Scroll to card (offset by 1 for the prepended clone)
    // Scroll within carousel container only (no page scroll)
    const targetCard = allCards[index + 1];
    if (targetCard) {
        const container = document.querySelector('.project-cards');
        const cardLeft = targetCard.offsetLeft;
        const containerWidth = container.clientWidth;
        const cardWidth = targetCard.clientWidth;
        const scrollPosition = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        container.scrollTo({
            left: scrollPosition,
            behavior: instant ? 'auto' : 'smooth'
        });
    }
}

// Handle infinite loop logic
function handleInfiniteTransition(index) {
    const allCards = getAllCards();

    // If we just scrolled to the first clone (before actual first card)
    if (index < 0) {
        isTransitioning = true;
        // Wait for scroll animation, then jump to actual last card
        setTimeout(() => {
            currentSlide = totalSlides - 1;
            updateSlide(currentSlide, true); // instant scroll
            isTransitioning = false;
        }, 500);
    }
    // If we just scrolled to the last clone (after actual last card)
    else if (index >= totalSlides) {
        isTransitioning = true;
        // Wait for scroll animation, then jump to actual first card
        setTimeout(() => {
            currentSlide = 0;
            updateSlide(currentSlide, true); // instant scroll
            isTransitioning = false;
        }, 500);
    }
}

// Go to specific slide
function goToSlide(index) {
    if (isTransitioning) return;

    stopAutoScroll();
    currentSlide = index;
    updateSlide(currentSlide);
    handleInfiniteTransition(index);
    startAutoScroll();
}

// Navigate next/previous
function nextSlide() {
    if (isTransitioning) return;
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    if (isTransitioning) return;
    goToSlide(currentSlide - 1);
}

// Auto-advance
function autoAdvance() {
    if (isTransitioning) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide(currentSlide);
}

// Auto-scroll controls
function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(autoAdvance, 5000);
}

function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
    }
}

// Make original cards clickable
function addCardClickHandlers() {
    originalCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (index !== currentSlide && !isTransitioning) {
                goToSlide(index);
            }
        });

        // Prevent clicks on buttons inside cards from triggering navigation
        card.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Initialize
createInfiniteLoop();
createIndicators();
addCardClickHandlers();
updateSlide(0);
startAutoScroll();

// Pause auto-scroll on hover
cardsContainer.addEventListener('mouseenter', () => {
    stopAutoScroll();
    // Pause progress bar animation
    const activeIndicator = document.querySelector('.indicator-dot.active');
    if (activeIndicator) {
        activeIndicator.classList.add('paused');
    }
});

cardsContainer.addEventListener('mouseleave', () => {
    startAutoScroll();
    // Resume progress bar animation
    const activeIndicator = document.querySelector('.indicator-dot.active');
    if (activeIndicator) {
        activeIndicator.classList.remove('paused');
    }
});

// Make cloned cards also visually respond (opacity/scale)
// This ensures side cards look proper even when they're clones
const observer = new MutationObserver(() => {
    const allCards = getAllCards();
    allCards.forEach((card, i) => {
        if (card.classList.contains('active')) {
            // Make sure z-index is high for clickability
            card.style.zIndex = '10';
        } else {
            card.style.zIndex = '5';
        }
    });
});

// Observe the container for class changes
observer.observe(cardsContainer, {
    attributes: true,
    subtree: true,
    attributeFilter: ['class']
});

// Add after existing carousel code

// Touch/Swipe handling for mobile
let touchStartX = 0;
let touchEndX = 0;

if (cardsContainer) {
    cardsContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    cardsContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance for swipe
    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swiped left - go to next
            nextSlide();
        } else {
            // Swiped right - go to previous
            prevSlide();
        }
    }
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % originalProjectCount;
    updateSlide(false);
    resetAutoScroll();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + originalProjectCount) % originalProjectCount;
    updateSlide(false);
    resetAutoScroll();
}