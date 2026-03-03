import {
    defineConfig,
    presetWind4,
    presetIcons,
    presetTypography,
} from 'unocss';

export default defineConfig({
    presets: [
        presetWind4(),
        presetIcons({
            scale: 1.2,
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
        }),
        presetTypography({
            cssExtend: {
                'a': {
                    'color': '#3d7bbf', // Slightly lighter blue for links
                    'text-decoration': 'none',
                    'border-bottom': '1px solid rgba(61, 123, 191, 0.3)',
                    'transition': 'all 0.3s ease',
                    'font-weight': '500',
                },
                'a:hover': {
                    'color': '#00509d',
                    'border-bottom-color': '#00509d',
                    'background-color': 'rgba(212, 232, 255, 0.2)',
                },
                'strong': { 'color': '#002952', 'font-weight': '700' },
                'h2': {
                    'margin-top': '3rem',
                    'margin-bottom': '1.5rem',
                    'line-height': '1.2',
                    'font-family': '"Fraunces", serif',
                    'font-weight': '600',
                    'color': '#002952',
                },
                'h3': {
                    'margin-top': '2.5rem',
                    'margin-bottom': '1.25rem',
                    'line-height': '1.3',
                    'font-family': '"Fraunces", serif',
                    'font-weight': '500',
                    'color': '#002952',
                },
                'h4': {
                    'margin-top': '2rem',
                    'margin-bottom': '1rem',
                    'font-family': '"Fraunces", serif',
                    'font-weight': '500',
                    'color': '#002952',
                },
                'p': {
                    'margin-bottom': '1.75rem',
                    'line-height': '1.8',
                    'color': '#334155', // slate-700
                },
                'ul, ol': {
                    'margin-bottom': '2rem',
                    'padding-left': '1.25rem',
                },
                'li': {
                    'margin-bottom': '0.75rem',
                    'line-height': '1.7',
                },
                'img': {
                    'margin-top': '3rem',
                    'margin-bottom': '3rem',
                    'border-radius': '1.5rem',
                    'box-shadow': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                },
            },
        }),
    ],
    theme: {
        colors: {
            brand: {
                50: '#eef4ff',   // Very light blue — brand-tinted backgrounds
                100: '#d4e8ff',  // Light blue — selection, hover tints
                200: '#a9d0ff',  // Soft blue
                300: '#7ab8e0',  // Medium blue
                400: '#3d7bbf',  // Medium-dark blue
                500: '#00509d',  // Primary blue
                600: '#003f88',  // Dark blue
                700: '#002952',  // Deep blue
                800: '#001a33',
                900: '#000d1a',
            },
            accent: {
                gold: '#b8860b',
                muted: '#fcfaf7',
                warm: '#faf6f1',
            }
        },
    },
    rules: [
        ['font-display', { 'font-family': '"Fraunces", serif' }],
        ['font-body', { 'font-family': '"DM Sans", sans-serif' }],
    ],
    shortcuts: {
        // Buttons — brand blue
        'btn-primary': 'bg-brand-600 text-white px-8 py-5 rounded-full font-bold hover:bg-brand-700 transition-all duration-500 shadow-xl shadow-brand-500/20 inline-flex items-center gap-4 transform hover:-translate-y-1 uppercase tracking-widest text-xs',
        'btn-ghost': 'border-2 border-brand-500 text-brand-500 px-8 py-5 rounded-full font-bold hover:bg-brand-50 transition-all inline-flex items-center gap-4 uppercase tracking-widest text-xs',
        // Button — WhatsApp green (standard variant)
        'btn-whatsapp': 'bg-[#25D366] text-white px-10 py-5 rounded-full font-bold inline-flex items-center gap-4 hover:bg-[#128C7E] transition-all shadow-xl uppercase tracking-widest text-xs no-underline',
        // Layout
        'section-padding': 'py-[clamp(4rem,10vw,8rem)]',
        'container': 'max-w-7xl mx-auto px-[clamp(1.5rem,6vw,4rem)]',
        // Headings — updated to match actual usage across the site
        // Headings & Text Standardized
        'heading-1': 'font-display font-700 text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] text-brand-700',
        'heading-2': 'font-display font-600 text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] text-brand-700 tracking-tight',
        'heading-3': 'font-display font-medium text-[clamp(1.5rem,3vw,2rem)] text-brand-700 leading-snug',
        'text-main': 'font-body text-[clamp(1.125rem,2vw,1.25rem)] leading-relaxed text-slate-600 font-400',
        'text-base-site': 'font-body text-base leading-relaxed text-slate-500',
        'text-label': 'text-xs font-bold tracking-[0.2em] text-slate-400 uppercase',
    },
});
