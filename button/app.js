let tg = window.Telegram.WebApp;
tg.expand();

let item = "";

document.getElementById("addMovieBtn").addEventListener("click", function() {
    let title = prompt("Введите название фильма:");
    let genre = prompt("Введите жанр фильма:");
    if (title && genre) {
        item = `${title},${genre}`;
        tg.sendData(item);
    }
});

document.getElementById("chooseGenreBtn").addEventListener("click", function() {
    let genre = prompt("Введите жанр для получения рекомендации:");
    tg.sendData(genre);
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
});
