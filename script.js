document.addEventListener("DOMContentLoaded", function () {    
    Telegram.WebApp.expand();
});

const BOT_TOKEN = "7897837524:AAGlLEZsypPDzZGa1sMdxuP7SPAXjW5_xAE"; // Токен бота

function sendRequest(command) {
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
        .then(data => {
            console.log("Ответ Telegram:", data);
            if (data.ok) {
                alert("Сообщение отправлено!");
            } else {
                alert("Ошибка отправки сообщения: " + data.description);
            }
        })
        .catch(error => {
            console.error("Ошибка:", error);
            alert("Ошибка отправки запроса.");
        });
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
