// Seleciona todos os elementos com a classe 'hover-text'
const hoverElements = document.querySelectorAll('.hover-text');

// Adiciona os eventos de 'mouseenter' e 'mouseleave'
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.color = '#FFD700'; // Nova cor ao passar o mouse
    });

    element.addEventListener('mouseleave', () => {
        element.style.color = ''; // Volta à cor original ao tirar o mouse
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('swing-image');

    // Adiciona a classe para começar o balanço
    img.addEventListener('mouseenter', () => {
        img.classList.add('swing-active');
    });

    // Remove a classe para parar o balanço
    img.addEventListener('mouseleave', () => {
        img.classList.remove('swing-active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bannerImage = document.getElementById('float-image');

    // Adiciona a classe para iniciar a animação quando a imagem for visível
    bannerImage.classList.add('float-active');
});
