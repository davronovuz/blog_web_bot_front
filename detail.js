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

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = parseInt(urlParams.get('id'));
    const news = newsData.find(item => item.id === newsId);

    if (news) {
        document.getElementById('newsTitle').textContent = news.title;
        document.getElementById('newsImage').src = news.image;
        document.getElementById('newsImage').alt = news.title;
        document.getElementById('newsDate').textContent = news.date;
        document.getElementById('newsDescription').textContent = news.description;
    } else {
        document.getElementById('newsDetail').innerHTML = '<p>Yangilik topilmadi!</p>';
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle?.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.innerHTML = nav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
});