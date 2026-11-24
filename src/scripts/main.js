// Desativa a memória de scroll do navegador e força o topo em todos os carregamentos
if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
}

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

/**
 * Rastreamento de conversão de cliques no WhatsApp (GA4 / Google Analytics)
 * Registra evento padrão `generate_lead` e evento personalizado `whatsapp_click`
 */
export const setupWhatsAppTracking = () => {
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const anchor = target.closest('a[href*="wa.me"], a[href*="whatsapp.com"], a[href^="whatsapp:"]');
        if (!anchor) return;

        // Contexto da localização do botão
        let location = 'general_link';
        if (anchor.closest('.fixed.bottom-8') || anchor.getAttribute('aria-label')?.includes('WhatsApp')) {
            location = 'floating_cta';
        } else if (anchor.closest('#main-header') || anchor.closest('header')) {
            location = 'header';
        } else if (anchor.closest('footer')) {
            location = 'footer';
        } else if (anchor.closest('#contato')) {
            location = 'contact_section';
        } else if (anchor.closest('#hero')) {
            location = 'hero';
        } else if (anchor.classList.contains('btn-whatsapp')) {
            location = 'body_cta';
        }

        const buttonText = anchor.textContent?.trim().slice(0, 50) || 'Botão WhatsApp';

        // Disparo GA4 oficial
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'generate_lead', {
                event_category: 'Conversion',
                event_label: `WhatsApp (${location})`,
                method: 'WhatsApp',
                page_location: window.location.href,
                value: 1
            });

            window.gtag('event', 'whatsapp_click', {
                location: location,
                button_text: buttonText,
                page_path: window.location.pathname
            });
        }

        // Suporte a DataLayer do GTM/Partytown
        if (window.dataLayer && Array.isArray(window.dataLayer)) {
            window.dataLayer.push({
                event: 'whatsapp_lead_click',
                click_location: location,
                button_text: buttonText,
                page_path: window.location.pathname
            });
        }

        console.log(`[Analytics] Conversão WhatsApp registrada: [${location}] - ${buttonText}`);
    }, { passive: true });
};

// Initialize everything
const initAll = () => {
    setupRevealObserver();
    setupWhatsAppTracking();

    // Log for debugging performance
    console.log('✨ [Cleide Sarkis] Scripts otimizados e rastreamento de conversão carregados.');
};

// Run on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
} else {
    initAll();
}
