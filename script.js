document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand(); // Расширяет веб-приложение на весь экран
});

function sendRequest(url) {
    fetch(url, { method: "POST" })
        .then(response => alert("Запрос отправлен!"))
        .catch(error => alert("Ошибка отправки запроса."));
    Telegram.WebApp.close(); // Закрытие Web App после отправки
}
