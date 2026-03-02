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
                'a': { color: '#00509d' },
                'a:hover': { color: '#003f88' },
                'strong': { color: '#002952' },
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
        'heading-1': 'font-display font-700 text-[clamp(4rem,10vw,7rem)] leading-[0.95] text-brand-700',
        'heading-2': 'font-display font-600 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] text-brand-700 tracking-tight',
        'text-body': 'font-body text-[clamp(1.125rem,2vw,1.25rem)] leading-relaxed text-slate-600 font-400',
    },
});
