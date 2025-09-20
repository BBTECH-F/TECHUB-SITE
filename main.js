// ==============================================
// FUNÇÕES PARA ABRIR E FECHAR MENU MOBILE
// ==============================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Função para alternar a visibilidade do menu
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('is-open');
    });

    // Função para fechar o menu quando um link for clicado (útil para navegação "smooth")
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-open')) {
                mainNav.classList.remove('is-open');
            }
        });
    });

    // ==============================================
    // FUNÇÕES DO ACORDEÃO (FAQ)
    // ==============================================
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const title = item.querySelector('.accordion-title');
        title.addEventListener('click', () => {
            // Fecha todos os outros itens do acordeão
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Alterna a classe 'active' para o item clicado
            item.classList.toggle('active');
        });
    });

    // ==============================================
    // OBSERVER PARA ANIMAÇÕES DE ENTRADA
    // ==============================================
    const floatingBoxes = document.querySelectorAll('.floating-box');
    const options = {
        root: null,
        threshold: 0.2, // A animação dispara quando 20% do elemento está visível
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    floatingBoxes.forEach((box, index) => {
        // Adiciona um delay diferente para cada caixa
        box.style.animationDelay = `${index * 0.2}s`;
        box.style.opacity = 0;
        observer.observe(box);
    });
});