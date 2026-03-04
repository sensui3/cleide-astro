// Global initialization for Cleide Sarkis website
export const setupRevealObserver = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('aos-animate');
                // Unobserve after animation (plays only once for performance)
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const observeElements = () => {
        document.querySelectorAll('.reveal, [data-aos]').forEach(el => observer.observe(el));
    };

    observeElements();
};

// Initialize everything
const initAll = () => {
    setupRevealObserver();

    // Log for debugging performance
    console.log('✨ [Cleide Sarkis] Scripts otimizados carregados.');
};

// Run on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}
