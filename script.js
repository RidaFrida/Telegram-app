document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand();
});

document.addEventListener("DOMContentLoaded", function () {
    Telegram.WebApp.expand();
});

unction sendRequest(command) {
    const topic = document.getElementById("topicInput").value.trim();
    if (!topic) {
        alert("Введите тему перед отправкой!");
        return;
    }

    const userId = Telegram.WebApp.initDataUnsafe?.user?.id || "unknown";
    const message = Команда: ${command}\nТема: ${topic};

    alert("Отправляю через sendMessage:\n" + message);

    fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${userId}&text=${encodeURIComponent(message)})
        .then(response => response.json())
        .then(data => console.log("Ответ Telegram:", data))
        .catch(error => console.error("Ошибка:", error));
}
function sendSimpleRequest(action) {
    fetch("https://hook.eu2.make.com/" + action, { method: "POST" })
        .then(response => alert("Запрос отправлен!"))
        .catch(error => alert("Ошибка отправки запроса."));
    
    Telegram.WebApp.close();
}
