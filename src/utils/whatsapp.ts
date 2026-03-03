export const getWhatsappUrl = (pathname: string) => {
    const messages: Record<string, string> = {
        '/': 'Olá Dra. Cleide, vim pelo site e gostaria de saber mais sobre as consultas de psicanálise.',
        '/sobre/': 'Olá Dra. Cleide, li sobre sua trajetória no site e gostaria de agendar uma consulta.',
        '/tratamentos/': 'Olá Dra. Cleide, gostaria de informações sobre os tratamentos específicos que vi no site.',
        '/blog/': 'Olá Dra. Cleide, estou acompanhando seu blog e gostaria de agendar uma conversa.',
        '/contato/': 'Olá Dra. Cleide, gostaria de agendar uma consulta presencial/online.'
    };

    const currentMessage = messages[pathname] || messages['/'];
    return `https://wa.me/5511998059125?text=${encodeURIComponent(currentMessage)}`;
};
