document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.side-dot');
    const cards = document.querySelectorAll('.full-project-card');
    
    if (!dots.length || !cards.length) return;
    
    // Update active dot based on scroll position
    function updateActiveDot() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        let activeIndex = 0;
        cards.forEach((card, index) => {
            const cardTop = card.offsetTop;
            const cardBottom = cardTop + card.offsetHeight;
            
            if (scrollPosition >= cardTop && scrollPosition <= cardBottom) {
                activeIndex = index;
            }
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveDot);
    
    // Click dot to scroll to project
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const card = cards[index];
            const offsetTop = card.offsetTop - 100; // Account for navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Set initial active dot
    updateActiveDot();
});