fetch('https://raw.githubusercontent.com/ideagmb/Web-middle/master/ping.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Помилка запиту: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Отримані дані:", data);
    })
    .catch(err => {
        console.error("Сталася помилка:", err);
    });