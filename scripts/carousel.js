// Carousel — ticker repositioning for seamless infinite scrolling
// Inspired by Motion.dev's autoplay carousel: items reposition dynamically
// instead of cloning, so there's never a jump or glitch.
const originalCards = document.querySelectorAll('.project-card');
const cardsContainer = document.querySelector('.project-cards');
const wrapper = document.querySelector('.carousel-wrapper');
const totalSlides = originalCards.length;

let currentSlide = 0;
let autoScrollInterval;

// Layout measurements (computed once, updated on resize)
let cardPitch = 0;
let cardWidth = 0;
let firstCardLeft = 0;
let totalTrackWidth = 0;

function measureLayout() {
    cardWidth = originalCards[0].offsetWidth;
    firstCardLeft = originalCards[0].offsetLeft;
    if (totalSlides > 1) {
        cardPitch = originalCards[1].offsetLeft - originalCards[0].offsetLeft;
    } else {
        cardPitch = cardWidth;
    }
    totalTrackWidth = totalSlides * cardPitch;
}

// Calculate the translateX offset to center a slide at a given continuous index.
// The index can go beyond [0, totalSlides) — that's how infinite scrolling works.
function getOffset(slideIndex) {
    const wrapperWidth = wrapper.clientWidth;
    const cardCenter = firstCardLeft + slideIndex * cardPitch + cardWidth / 2;
    return -(cardCenter - wrapperWidth / 2);
}

// Reposition cards that have scrolled off-screen to the opposite side.
// Each card gets a `left` offset via position:relative, which is instant
// (not transitioned) so the repositioning is invisible.
function repositionCards(containerOffset) {
    const wrapperWidth = wrapper.clientWidth;

    originalCards.forEach((card, i) => {
        const baseLeft = firstCardLeft + i * cardPitch;
        let tickerOffset = parseFloat(card.dataset.tickerOffset) || 0;
        let visualLeft = baseLeft + tickerOffset + containerOffset;

        // If card is completely off the left edge, wrap it to the right
        while (visualLeft + cardWidth < -cardWidth) {
            tickerOffset += totalTrackWidth;
            visualLeft += totalTrackWidth;
        }
        // If card is completely off the right edge, wrap it to the left
        while (visualLeft > wrapperWidth + cardWidth) {
            tickerOffset -= totalTrackWidth;
            visualLeft -= totalTrackWidth;
        }

        if (parseFloat(card.dataset.tickerOffset || 0) !== tickerOffset) {
            card.dataset.tickerOffset = tickerOffset;
            card.style.left = tickerOffset + 'px';
        }
    });
}

function setPosition(offset, instant) {
    if (instant) {
        cardsContainer.classList.add('no-transition');
    }
    cardsContainer.style.transform = `translateX(${offset}px)`;
    repositionCards(offset);
    if (instant) {
        void cardsContainer.offsetHeight;
        cardsContainer.classList.remove('no-transition');
    }
}

// Update active card styling and indicators
function updateActiveStates(realIndex) {
    originalCards.forEach((card, i) => {
        card.classList.toggle('active', i === realIndex);
    });

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
    stopAutoScroll();
    currentSlide = index;

    const realIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    updateActiveStates(realIndex);

    const offset = getOffset(index);
    setPosition(offset, false);
    startAutoScroll();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
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
        dot.addEventListener('click', () => {
            // Navigate via the shortest path
            const realCurrent = ((currentSlide % totalSlides) + totalSlides) % totalSlides;
            const diff = i - realCurrent;
            goToSlide(currentSlide + diff);
        });
        container.appendChild(dot);
    }
}

// Auto-scroll
function autoAdvance() {
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
            const realCurrent = ((currentSlide % totalSlides) + totalSlides) % totalSlides;
            if (index !== realCurrent) {
                const diff = index - realCurrent;
                goToSlide(currentSlide + diff);
            }
        });
        card.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', (e) => e.stopPropagation());
        });
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'ArrowRight') nextSlide();
});

// Initialize
measureLayout();
createIndicators();
addCardClickHandlers();

// Set initial position
updateActiveStates(0);
setPosition(getOffset(0), true);
startAutoScroll();

// Recalculate on resize
window.addEventListener('resize', () => {
    measureLayout();
    setPosition(getOffset(currentSlide), true);
});

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
let swipeLocked = false;

if (cardsContainer) {
    cardsContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchCurrentX = touchStartX;
        isDragging = true;
        swipeLocked = false;
        dragStartOffset = getOffset(currentSlide);
        stopAutoScroll();
        cardsContainer.classList.add('no-transition');
    }, { passive: true });

    cardsContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const dx = e.touches[0].clientX - touchStartX;
        const dy = e.touches[0].clientY - touchStartY;

        if (!swipeLocked) {
            if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
                swipeLocked = true;
                if (Math.abs(dy) > Math.abs(dx)) {
                    isDragging = false;
                    cardsContainer.classList.remove('no-transition');
                    startAutoScroll();
                    return;
                }
            } else {
                return;
            }
        }

        e.preventDefault();
        touchCurrentX = e.touches[0].clientX;
        const dragDelta = touchCurrentX - touchStartX;
        const currentOffset = dragStartOffset + dragDelta;
        cardsContainer.style.transform = `translateX(${currentOffset}px)`;
        repositionCards(currentOffset);
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
            const offset = getOffset(currentSlide);
            setPosition(offset, false);
            startAutoScroll();
        }
    }, { passive: true });

    cardsContainer.addEventListener('touchcancel', () => {
        if (!isDragging) return;
        isDragging = false;
        cardsContainer.classList.remove('no-transition');
        setPosition(getOffset(currentSlide), false);
        startAutoScroll();
    }, { passive: true });
}
