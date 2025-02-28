document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand();
});

document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand();
});

function sendRequest(command) {
    const topic = document.getElementById("topicInput").value.trim();
    if (!topic) {
        alert("Введите тему перед отправкой!");
        return;
    }

    const userId = Telegram.WebApp.initDataUnsafe?.user?.id || "unknown";
    const payload = JSON.stringify({ 
        user_id: userId, 
        topic: topic, 
        command: command // <-- добавляем команду
    });

    alert("Отправляю команду " + command + " с данными:\n" + payload);

    Telegram.WebApp.sendData(payload);
}

function sendSimpleRequest(action) {
    fetch("https://hook.eu2.make.com/" + action, { method: "POST" })
        .then(response => alert("Запрос отправлен!"))
        .catch(error => alert("Ошибка отправки запроса."));
    
    Telegram.WebApp.close();
}
