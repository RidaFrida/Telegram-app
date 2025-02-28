document.addEventListener("DOMContentLoaded", function () {    
    Telegram.WebApp.expand();
});

const BOT_TOKEN = "7897837524:AAGlLEZsypPDzZGa1sMdxuP7SPAXjW5_xAE"; // Вставь сюда свой токен

function sendRequest(command) {
    const topic = document.getElementById("topicInput").value.trim();
    if (!topic) {
        alert("Введите тему перед отправкой!");
        return;
    }

    const userId = Telegram.WebApp.initDataUnsafe?.user?.id || "unknown";
    const payload = JSON.stringify({ user_id: userId, topic: topic, command: command });

    alert("Отправляю sendData:\n" + payload);

    Telegram.WebApp.sendData(payload);
}

function sendSimpleRequest(action) {
    fetch("https://hook.eu2.make.com/" + action, { method: "POST" })
        .then(response => {
            alert("Запрос отправлен!");
            Telegram.WebApp.close();
        })
        .catch(error => {
            alert("Ошибка отправки запроса.");
        });
}
