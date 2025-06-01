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
                <p>${news.description.substring(0, 100)}...</p>
                <p class="date">${news.date}</p>
                <button onclick="deleteNews(${news.id})" class="btn">O'chirish</button>
            </div>
        `;
        newsCard.addEventListener('click', () => {
            window.location.href = `detail.html?id=${news.id}`;
        });
        newsList.appendChild(newsCard);
    });
}

function deleteNews(id) {
    if (confirm('Bu yangilikni o\'chirishni xohlaysizmi?')) {
        const index = newsData.findIndex(news => news.id === id);
        if (index !== -1) {
            newsData.splice(index, 1);
            renderAdminNews();
        }
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
            const category = document.getElementById('newsCategory').value;
            const date = new Date().toLocaleDateString('uz-UZ');
            const id = newsData.length ? Math.max(...newsData.map(n => n.id)) + 1 : 1;

            newsData.push({ id, title, description, image, date, category });
            renderAdminNews();
            newsForm.reset();
            alert('Yangilik muvaffaqiyatli qo\'shildi!');
        });
    }

    renderAdminNews();

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle?.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.innerHTML = nav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
});