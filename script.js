// Elementos do DOM
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchInput');

// Função para criar um card
function createCard(platform) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = platform.id;
    card.dataset.title = platform.title.toLowerCase();
    card.dataset.description = platform.description.toLowerCase();
    card.dataset.tags = platform.tags.join(' ').toLowerCase();

    const tagsHTML = platform.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    card.innerHTML = `
        <div class="card-icon">${platform.icon}</div>
        <h2 class="card-title">${platform.title}</h2>
        <p class="card-description">${platform.description}</p>
        <div class="card-tags">${tagsHTML}</div>
        <a href="${platform.url}" class="card-link" target="_blank" rel="noopener noreferrer">Acessar plataforma</a>
    `;

    // Adicionar animação de entrada
    card.style.animation = 'fadeIn 0.5s ease';

    return card;
}

// Função para renderizar todos os cards
function renderCards(platforms) {
    cardsGrid.innerHTML = '';

    if (platforms.length === 0) {
        cardsGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <p class="empty-state-text">Nenhuma plataforma encontrada</p>
            </div>
        `;
        return;
    }

    platforms.forEach(platform => {
        const card = createCard(platform);
        cardsGrid.appendChild(card);
    });
}

// Função de busca e filtro
function filterCards(searchTerm) {
    const term = searchTerm.toLowerCase().trim();

    if (term === '') {
        renderCards(platformsData);
        return;
    }

    const filtered = platformsData.filter(platform => {
        const titleMatch = platform.title.toLowerCase().includes(term);
        const descriptionMatch = platform.description.toLowerCase().includes(term);
        const tagsMatch = platform.tags.some(tag => tag.toLowerCase().includes(term));

        return titleMatch || descriptionMatch || tagsMatch;
    });

    renderCards(filtered);
}

// Event listener para busca
searchInput.addEventListener('input', (e) => {
    filterCards(e.target.value);
});

// Event listener para busca com Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filterCards(e.target.value);
    }
});

// Adicionar animação suave ao clicar nos cards
cardsGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    }
});

// Inicializar o portal
document.addEventListener('DOMContentLoaded', () => {
    renderCards(platformsData);

    // Adicionar foco no campo de busca com atalho (/)
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }

        // Limpar busca com ESC
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.value = '';
            filterCards('');
            searchInput.blur();
        }
    });

    // Mensagem de boas-vindas no console
    console.log('%c🎓 Portal INEMA ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;');
    console.log('Portal carregado com sucesso! 🚀');
    console.log(`Total de plataformas: ${platformsData.length}`);
});

// Função auxiliar para adicionar novas plataformas dinamicamente
function addPlatform(platform) {
    platformsData.push(platform);
    renderCards(platformsData);
}

// Exportar funções para uso externo (se necessário)
window.PortalINEMA = {
    addPlatform,
    renderCards,
    filterCards,
    platformsData
};
