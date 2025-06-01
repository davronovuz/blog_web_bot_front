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
    }
];

function renderAdminNews() {
    const newsList = document.getElementById('adminNewsList');
    if (!newsList) return;

    newsList.innerHTML = '';
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
                <button onclick="deleteNews(${index})" class="btn">O'chirish</button>
            </div>
        `;
        newsList.appendChild(newsCard);
    });
}

function deleteNews(index) {
    if (confirm('Bu yangilikni o\'chirishni xohlaysizmi?')) {
        newsData.splice(index, 1);
        renderAdminNews();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const newsForm = document.getElementById('newsForm');
    if (newsForm) {
        newsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('newsTitle').value;
            const description = document.getElementById('newsDescription').value;
            const image = document.getElementById('newsImage').value || 'https://via.placeholder.com/300x200';
            const date = new Date().toLocaleDateString('uz-UZ');

            newsData.push({ title, description, image, date });
            renderAdminNews();
            newsForm.reset();
            alert('Yangilik muvaffaqiyatli qo\'shildi!');
        });
    }

    renderAdminNews();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle?.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.innerHTML = nav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
});