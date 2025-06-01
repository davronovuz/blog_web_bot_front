const newsData = [
    {
        title: "Dunyo bo'ylab yangiliklar",
        description: "Dunyo bo'ylab so'nggi yangiliklar va voqealar haqida ma'lumot.",
        image: "https://via.placeholder.com/300x200",
        date: "01.06.2025"
    },
    {
        title: "Texnologiya sohasidagi yangiliklar",
        description: "Yangi texnologiyalar va innovatsiyalar haqida so'nggi xabarlar.",
        image: "https://via.placeholder.com/300x200",
        date: "01.06.2025"
    },
    {
        title: "Sport yangiliklari",
        description: "Sport olamidagi so'nggi voqealar va natijalar.",
        image: "https://via.placeholder.com/300x200",
        date: "01.06.2025"
    }
];

function renderNews(containerSelector) {
    const newsGrid = document.querySelector(containerSelector);
    if (!newsGrid) return;

    newsGrid.innerHTML = '';
    newsData.forEach((news, index) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.style.setProperty('--i', index);
        newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <div class="news-card-content">
                <h3>${news.title}</h3>
                <p>${news.description}</p>
                <p class="date">${news.date}</p>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

function subscribeToBot() {
    const chatId = document.getElementById('chatId')?.value;
    if (chatId) {
        // Replace with actual Telegram bot API integration
        alert(`Siz ${chatId} ID orqali obuna bo'ldingiz!`);
        document.getElementById('chatId').value = '';
    } else {
        alert('Iltimos, Telegram Chat ID kiriting!');
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle?.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.innerHTML = nav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Render news on both index and news pages
    renderNews('.news-grid');
});