document.addEventListener('DOMContentLoaded', () => {
    // Manejo de la búsqueda de recetas
    const searchInput = document.getElementById('search');
    const recipeCards = document.querySelectorAll('.recipe-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        recipeCards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Manejo de la navegación de "Ver más"
    const viewMoreLinks = document.querySelectorAll('.view-more');
    viewMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
