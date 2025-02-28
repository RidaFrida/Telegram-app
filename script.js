document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand(); // Расширяет веб-приложение на весь экран
});

function sendRequest() {
    const topic = document.getElementById("topicInput").value.trim();
    if (!topic) {
        alert("Введите тему перед отправкой!");
        return;
    }
    
    const userId = Telegram.WebApp.initDataUnsafe?.user?.id || "unknown";

    // Показываем user_id перед отправкой (отладка)
    alert("User ID: " + userId); 

    const payload = { user_id: userId, topic: topic };

    fetch("https://hook.eu2.make.com/lhop6lhk2bu4clra2uf2h6696nu78fiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => alert("Запрос отправлен!"))
    .catch(error => alert("Ошибка отправки запроса."));

    Telegram.WebApp.close(); // Закрытие Web App после отправки
}

function sendSimpleRequest(action) {
    fetch("https://hook.eu2.make.com/" + action, { method: "POST" })
        .then(response => alert("Запрос отправлен!"))
        .catch(error => alert("Ошибка отправки запроса."));
    
    Telegram.WebApp.close();
}
