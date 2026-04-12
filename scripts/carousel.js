// Carousel — translateX approach for seamless infinite wrapping
const originalCards = document.querySelectorAll('.project-card');
const cardsContainer = document.querySelector('.project-cards');
const wrapper = document.querySelector('.carousel-wrapper');
const totalSlides = originalCards.length;

let currentSlide = 0;
let autoScrollInterval;
let isTransitioning = false;

// Clone first and last cards for infinite loop
function createInfiniteLoop() {
    const lastClone = originalCards[totalSlides - 1].cloneNode(true);
    lastClone.classList.add('clone');
    cardsContainer.insertBefore(lastClone, cardsContainer.firstChild);

    const firstClone = originalCards[0].cloneNode(true);
    firstClone.classList.add('clone');
    cardsContainer.appendChild(firstClone);
}

function getAllCards() {
    return document.querySelectorAll('.project-card');
}

// Calculate the translateX offset to center a card at a given index
// Index is in the "all cards" array (including clones), so real card 0 = index 1
function getOffset(allCardsIndex) {
    const allCards = getAllCards();
    const card = allCards[allCardsIndex];
    if (!card) return 0;
    const wrapperWidth = wrapper.clientWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    return -(cardLeft - (wrapperWidth / 2) + (cardWidth / 2));
}

function setPosition(offset, instant) {
    if (instant) {
        cardsContainer.classList.add('no-transition');
    }
    cardsContainer.style.transform = `translateX(${offset}px)`;
    if (instant) {
        // Force reflow so the no-transition class takes effect before we remove it
        void cardsContainer.offsetHeight;
        cardsContainer.classList.remove('no-transition');
    }
}

// Update active card styling and indicators
function updateActiveStates(index) {
    const allCards = getAllCards();
    // allCards index: clone at 0, real cards at 1..totalSlides, clone at totalSlides+1
    allCards.forEach((card, i) => {
        card.classList.toggle('active', i === index + 1);
    });

    const realIndex = ((index % totalSlides) + totalSlides) % totalSlides;

    // Update indicators
    const indicators = document.querySelectorAll('.indicator-dot');
    indicators.forEach((dot, i) => {
        if (i === realIndex) {
            dot.classList.remove('active');
            void dot.offsetWidth;
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Update progress text
    document.getElementById('current-project').textContent = realIndex + 1;
}

function goToSlide(index) {
    if (isTransitioning) return;

    stopAutoScroll();
    currentSlide = index;
    updateActiveStates(index);

    // allCards index is index + 1 (because of prepended clone)
    const offset = getOffset(index + 1);
    setPosition(offset, false);

    // Handle wrapping: after animating to the clone, instantly jump to the real card
    if (index < 0 || index >= totalSlides) {
        isTransitioning = true;
        // Wait for the CSS transition to finish (500ms matches transition duration)
        setTimeout(() => {
            if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = 0;
            }
            updateActiveStates(currentSlide);
            const jumpOffset = getOffset(currentSlide + 1);
            setPosition(jumpOffset, true); // instant jump — no visible rewind
            isTransitioning = false;
            startAutoScroll();
        }, 520);
    } else {
        startAutoScroll();
    }
}

function nextSlide() {
    if (isTransitioning) return;
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    if (isTransitioning) return;
    goToSlide(currentSlide - 1);
}

// Create indicator dots
function createIndicators() {
    const container = document.querySelector('.carousel-indicators');
    container.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        container.appendChild(dot);
    }
}

// Auto-scroll
function autoAdvance() {
    if (isTransitioning) return;
    goToSlide(currentSlide + 1);
}

function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(autoAdvance, 5000);
}

function stopAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
    }
}

// Card click handlers
function addCardClickHandlers() {
    originalCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (index !== currentSlide && !isTransitioning) {
                goToSlide(index);
            }
        });
        card.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => e.stopPropagation());
        });
    });

    // Clone click handlers
    const allCards = getAllCards();
    // First element is the last-clone
    allCards[0].addEventListener('click', () => {
        if (!isTransitioning) goToSlide(totalSlides - 1);
    });
    // Last element is the first-clone
    allCards[allCards.length - 1].addEventListener('click', () => {
        if (!isTransitioning) goToSlide(0);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
});

// Initialize
createInfiniteLoop();
createIndicators();
addCardClickHandlers();

// Set initial position instantly
updateActiveStates(0);
setPosition(getOffset(1), true);
startAutoScroll();

// Pause auto-scroll on hover
cardsContainer.addEventListener('mouseenter', () => {
    stopAutoScroll();
    const activeIndicator = document.querySelector('.indicator-dot.active');
    if (activeIndicator) activeIndicator.classList.add('paused');
});

cardsContainer.addEventListener('mouseleave', () => {
    startAutoScroll();
    const activeIndicator = document.querySelector('.indicator-dot.active');
    if (activeIndicator) activeIndicator.classList.remove('paused');
});

// Touch/Swipe handling for mobile
let touchStartX = 0;
let touchStartY = 0;
let touchCurrentX = 0;
let isDragging = false;
let dragStartOffset = 0;
let swipeLocked = false; // once we decide horizontal vs vertical, lock it

if (cardsContainer) {
    cardsContainer.addEventListener('touchstart', (e) => {
        if (isTransitioning) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchCurrentX = touchStartX;
        isDragging = true;
        swipeLocked = false;
        dragStartOffset = getOffset(currentSlide + 1);
        stopAutoScroll();
        cardsContainer.classList.add('no-transition');
    }, { passive: true });

    cardsContainer.addEventListener('touchmove', (e) => {
        if (!isDragging || isTransitioning) return;

        const dx = e.touches[0].clientX - touchStartX;
        const dy = e.touches[0].clientY - touchStartY;

        // Decide direction on first significant move
        if (!swipeLocked) {
            if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
                swipeLocked = true;
                if (Math.abs(dy) > Math.abs(dx)) {
                    // Vertical scroll — bail out
                    isDragging = false;
                    cardsContainer.classList.remove('no-transition');
                    startAutoScroll();
                    return;
                }
            } else {
                return; // not enough movement yet
            }
        }

        // Horizontal swipe — prevent page scroll and drag the carousel
        e.preventDefault();
        touchCurrentX = e.touches[0].clientX;
        const dragDelta = touchCurrentX - touchStartX;
        cardsContainer.style.transform = `translateX(${dragStartOffset + dragDelta}px)`;
    }, { passive: false });

    cardsContainer.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        cardsContainer.classList.remove('no-transition');

        const swipeDistance = touchStartX - touchCurrentX;
        if (Math.abs(swipeDistance) > 50) {
            if (swipeDistance > 0) nextSlide();
            else prevSlide();
        } else {
            // Snap back to current slide
            const offset = getOffset(currentSlide + 1);
            setPosition(offset, false);
            startAutoScroll();
        }
    }, { passive: true });

    cardsContainer.addEventListener('touchcancel', () => {
        if (!isDragging) return;
        isDragging = false;
        cardsContainer.classList.remove('no-transition');
        const offset = getOffset(currentSlide + 1);
        setPosition(offset, false);
        startAutoScroll();
    }, { passive: true });
}
