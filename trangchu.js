document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('img');
    const hoverSrc = card.getAttribute('data-hover-src');
    const defaultSrc = card.getAttribute('data-default-src');
    
    card.addEventListener('mouseover', () => {
        img.src = hoverSrc;
    });
    
    card.addEventListener('mouseout', () => {
        img.src = defaultSrc;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const defaultSrc = card.getAttribute('data-default-src');
        const hoverSrc = card.getAttribute('data-hover-src');
        const img = card.querySelector('img');

        card.addEventListener('mouseenter', () => {
            if (hoverSrc) {
                img.src = hoverSrc;
            }
        });

        card.addEventListener('mouseleave', () => {
            if (defaultSrc) {
                img.src = defaultSrc;
            }
        });
    });
});
