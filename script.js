document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand(); // Расширяет веб-приложение на весь экран
});

function sendRequest(action) {
    const tg = Telegram.WebApp;
    tg.sendData(action); // Отправка данных боту
    tg.close(); // Закрытие Web App после отправки
}
