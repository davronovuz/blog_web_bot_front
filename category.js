const newsData = [
    {
        id: 1,
        title: "Dunyo bo'ylab yangiliklar",
        description: "Dunyo bo'ylab so'nggi yangiliklar va voqealar haqida ma'lumot. Bu yerda global miqyosda muhim voqealar, siyosiy o'zgarishlar va iqtisodiy yangiliklar haqida to'liq ma'lumot topasiz.",
        image: "https://via.placeholder.com/300x200",
        date: "01.06.2025",
        category: "world"
    },
    {
        id: 2,
        title: "Texnologiya sohasidagi yangiliklar",
        description: "Yangi texnologiyalar va innovatsiyalar haqida so'nggi xabarlar. AI, blockchain va boshqa zamonaviy texnologiyalar haqida bilib oling.",
        image: "https://via.placeholder.com/300x200",
        date: "01.06.2025",
        category: "tech"
    },
    {
        id: 3,
        title: "Sport yangiliklari",
        description: "Sport olamidagi so'nggi voqealar va natijalar. Futbol, basketbol va boshqa sport turlari bo'yicha eng yangi ma'lumotlar.",
        image: "https://via.placeholder.com/300x200",
        date: "01.06.2025",
        category: "sports"
    }
];

function renderNews(containerSelector, filterCategory = 'all') {
    const newsGrid = document.querySelector(containerSelector);
    if (!newsGrid) return;

    newsGrid.innerHTML = '';
    const filteredNews = filterCategory === 'all' 
        ? newsData 
        : newsData.filter(news => news.category === filterCategory);

    filteredNews.forEach((news, index) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.style.setProperty('--i', index);
        newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <div class="news-card-content">
                <h3>${news.title}</h3>
                <p>${news.description.substring(0, 100)}...</p>
                <p class="date">${news.date}</p>
            </div>
        `;
        newsCard.addEventListener('click', () => {
            window.location.href = `detail.html?id=${news.id}`;
        });
        newsGrid.appendChild(newsCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.dataset.category;
            renderNews('.news-grid', category);
        });
    });

    renderNews('.news-grid', 'all');

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle?.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.innerHTML = nav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
});