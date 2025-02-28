document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand(); // Расширяет веб-приложение на весь экран
});

function sendRequest(action) {
    const tg = Telegram.WebApp;
    tg.sendData(action); // Отправка данных боту
    alert("Запрос отправлен: " + action); // Показываем подтверждение
    tg.close(); // Закрытие Web App после отправки
}
