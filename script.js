document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand();
});

function sendRequest() {
      const topic = document.getElementById("topicInput").value.trim();
    if (!topic) {
        alert("Введите тему перед отправкой!");
        return;
    }

    const userId = Telegram.WebApp.initDataUnsafe?.user?.id || "unknown";

    alert("Отправляю данные...\\nUser ID: " + userId + "\\nТема: " + topic);

    const payload = JSON.stringify({ user_id: userId, topic: topic });

    console.log("Отправляем sendData:", payload); // Логируем отправку

    Telegram.WebApp.sendData(payload);

    Telegram.WebApp.close();
}

function sendSimpleRequest(action) {
    fetch("https://hook.eu2.make.com/" + action, { method: "POST" })
        .then(response => alert("Запрос отправлен!"))
        .catch(error => alert("Ошибка отправки запроса."));
    
    Telegram.WebApp.close();
}
