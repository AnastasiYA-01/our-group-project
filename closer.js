const items = {
    clothes: ["Часть одежды", "Головной убор", "Верхняя одежда", "Обувь",],
    color: ["Цветовая гамма", "Тёплые цвета", "Холодные цвета"],
    style: ["Стиль", "Классический", "Современный", "Спортивный"]
};

const currentIndexes = {
    clothes: 0,
    color: 0,
    style: 0
};

function updateSelection(type) {
    document.getElementById(`selection-${type}`).innerText = items[type][currentIndexes[type]];
}

function prevItem(type) {
    currentIndexes[type] = (currentIndexes[type] === 0) ? items[type].length - 1 : currentIndexes[type] - 1;
    updateSelection(type);
}

function nextItem(type) {
    currentIndexes[type] = (currentIndexes[type] === items[type].length - 1) ? 0 : currentIndexes[type] + 1;
    updateSelection(type);
}

// Инициализация
updateSelection('clothes');
updateSelection('color');
updateSelection('style');
