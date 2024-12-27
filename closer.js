const items = {
    clothes: ["Часть одежды", "Головной убор", "Верхняя одежда", "Обувь"],
    color: ["Цветовая гамма", "Тёплые цвета", "Холодные цвета"],
    style: ["Стиль", "Классический", "Современный", "Спортивный", "Отдых"],
    photo: [0, 1, 2] // Индексы активных прямоугольников
};

const currentIndexes = {
    clothes: 0,
    color: 0,
    style: 0,
    photo: 1 // Текущий индекс для карусели изображений
};

function updateSelection(type) {
    document.getElementById(`selection-${type}`).innerText = items[type][currentIndexes[type]];
}

function updateCarousel() {
    const rectangles = document.querySelectorAll('.rectang-foto');
    rectangles.forEach((rectangle, index) => {
        rectangle.classList.remove('active'); // Убираем активный класс у всех
        if (index === currentIndexes.photo) {
            rectangle.classList.add('active'); // Добавляем активный класс к текущему
        }
    });
}

function prevItem(type) {
    if (type === 'photo') {
        currentIndexes[type] = (currentIndexes[type] === 0) ? items[type].length - 1 : currentIndexes[type] - 1;
        updateCarousel();
    } else {
        currentIndexes[type] = (currentIndexes[type] === 0) ? items[type].length - 1 : currentIndexes[type] - 1;
        updateSelection(type);
    }
}

function nextItem(type) {
    if (type === 'photo') {
        currentIndexes[type] = (currentIndexes[type] === items[type].length - 1) ? 0 : currentIndexes[type] + 1;
        updateCarousel();
    } else {
        currentIndexes[type] = (currentIndexes[type] === items[type].length - 1) ? 0 : currentIndexes[type] + 1;
        updateSelection(type);
    }
}

// Инициализация
updateSelection('clothes');
updateSelection('color');
updateSelection('style');
updateCarousel(); // Инициализация карусели изображений
