tg.expand();

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
    tg.sendData("action"); // Отправляем жанр "Экшен"
});

btn2.addEventListener("click", function () {
    tg.sendData("comedy"); // Отправляем жанр "Комедия"
});
