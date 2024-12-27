// Функция для сохранения имени
function saveName() {
    const nameInput = document.getElementById('nameInput');
    const nameValue = nameInput.value; // Получаем значение из поля ввода
    localStorage.setItem('userName', nameValue); // Сохраняем имя в localStorage
    displayName(); // Обновляем отображение имени
    nameInput.value = ''; // Очищаем поле ввода после сохранения
}

// Функция для отображения имени
function displayName() {
    const storedName = localStorage.getItem('userName');
    const nameDisplay = document.getElementById('nameDisplay');
    if (storedName) {
        nameDisplay.textContent = storedName; // Устанавливаем текст элемента на сохраненное имя
    } else {
        nameDisplay.textContent = 'ИМЯ'; // Если имя не сохранено, показываем "ИМЯ"
    }
}

document.getElementById('saveButton').addEventListener('click', saveName);
