const cardsData = [
  {
      imageUrl: 'img/img2.png',
      title: 'نقص نحاس',
      link: 'https://www.example.com/crops'
  },
  {
    imageUrl: 'img/img2.png',
    title: 'ارتفاع حرارة',
      link: 'https://www.example.com/pests'
  },
  {
    imageUrl: 'img/img2.png',
    title: 'زيادة رطوبة',
      link: 'https://www.example.com/pests'
  },
  {
    imageUrl: 'img/img2.png',
    title: 'تلوث التربة',
      link: 'https://www.example.com/pests'
  },
  // يمكنك إضافة المزيد من البطاقات هنا
];

const cardsContainer = document.querySelector('.cards-container');

function renderCards(data) {
  cardsContainer.innerHTML = ''; // مسح المحتوى السابق
  data.forEach(cardData => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
          <img draggable="false" class="imgsec" src="${cardData.imageUrl}" alt="${cardData.title}">
          <div class="card-content">
              <h2>${cardData.title}</h2>
              <a target="_blank" href="${cardData.link}">اقرأ المزيد</a>
          </div>
      `;

      cardsContainer.appendChild(card);
  });
}

// عرض جميع البطاقات عند تحميل الصفحة لأول مرة
renderCards(cardsData);

var typed = new Typed(".secText", {
  strings: ["السلام عليك", " في المكتبة الزراعية", "صلي على النبي",],
  typeSpeed: 90,
  backSpeed: 10,
  loop: true
});

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

function searchCrops() {
  const searchTerm = searchInput.value.toLowerCase();

  // تصفية البطاقات التي تحتوي على النص الذي تم البحث عنه
  const filteredCards = cardsData.filter(card => card.title.toLowerCase().includes(searchTerm));

  if (filteredCards.length > 0) {
      renderCards(filteredCards); // عرض البطاقات المطابقة
  } else {
      cardsContainer.innerHTML = '<p>لا توجد نتائج بحث.</p>'; // عرض رسالة في حالة عدم وجود نتائج
  }
}

searchButton.addEventListener('click', searchCrops);