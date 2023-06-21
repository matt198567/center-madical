// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = document.querySelectorAll(".slide-reviews__image-ibg");

  imageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const youtubeVideoId = link.dataset.videoId;
      const iframeSrc = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;

      const videoContainer = document.createElement("div");
      videoContainer.className = "video-container";

      const iframe = document.createElement("iframe");
      iframe.src = iframeSrc;
      iframe.width = "560";
      iframe.height = "315";
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      videoContainer.appendChild(iframe);

      // Центрируем видео по вертикали и горизонтали
      videoContainer.style.display = "flex";
      videoContainer.style.justifyContent = "center";
      videoContainer.style.alignItems = "center";
      videoContainer.style.position = "fixed";
      videoContainer.style.top = "0";
      videoContainer.style.left = "0";
      videoContainer.style.width = "100%";
      videoContainer.style.height = "100%";
      videoContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      videoContainer.style.zIndex = "9999";

      const body = document.querySelector("body");
      body.appendChild(videoContainer);

      videoContainer.addEventListener("click", () => {
        body.removeChild(videoContainer);
      });
    });
  });
});

//========================================================================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const activeImageLinks = document.querySelectorAll(".services__image-ibg");

  activeImageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const youtubeVideoId = link.dataset.videoId;
      const iframeSrc = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;

      const videoContainer = document.createElement("div");
      videoContainer.className = "video-container";

      const iframe = document.createElement("iframe");
      iframe.src = iframeSrc;
      iframe.width = "560";
      iframe.height = "315";
      iframe.title = "YouTube video player";
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;

      videoContainer.appendChild(iframe);

      // Центрируем видео по вертикали и горизонтали
      videoContainer.style.display = "flex";
      videoContainer.style.justifyContent = "center";
      videoContainer.style.alignItems = "center";
      videoContainer.style.position = "fixed";
      videoContainer.style.top = "0";
      videoContainer.style.left = "0";
      videoContainer.style.width = "100%";
      videoContainer.style.height = "100%";
      videoContainer.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      videoContainer.style.zIndex = "9999";

      const body = document.querySelector("body");
      body.appendChild(videoContainer);

      videoContainer.addEventListener("click", () => {
        body.removeChild(videoContainer);
      });
    });
  });
});

//========================================================================================================================================================

const links = document.querySelectorAll(".services__link");
const images = document.querySelectorAll(".services__image-ibg");

function handleHover(event) {
  event.preventDefault();

  const index = Array.from(links).indexOf(event.target);

  if (index >= 0 && index < images.length) {
    images.forEach((image) => {
      image.classList.remove("active");
      image.style.display = "none";
    });

    images[index].classList.add("active");
    images[index].style.display = "block";
  }
}

links.forEach((link) => {
  link.addEventListener("mouseenter", handleHover);
});

function handleClick(event) {
  event.preventDefault();

  const link = event.target;
  const index = Array.from(links).indexOf(link);

  if (index >= 0 && index < images.length) {
    images.forEach((image) => {
      image.classList.remove("active");
      image.style.display = "none";
    });

    images[index].classList.add("active");
    images[index].style.display = "block";
  }
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});

//========================================================================================================================================================

// Получаем все кнопки с классом "services__btn"
const buttons = document.querySelectorAll(".services__btn");

// Получаем все элементы с классом spollers__item
const spollers = document.querySelectorAll(".spollers");

// Скрываем все элементы spollers__item, кроме первого активного
for (let i = 1; i < spollers.length; i++) {
  const spoller = spollers[i];
  spoller.style.display = "none";
}

// Добавляем обработчики событий клика к каждой кнопке
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Получаем значение атрибута data-filter кликнутой кнопки
    const filter = button.getAttribute("data-filter");

    // Удаляем класс "active" у всех кнопок
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Добавляем класс "active" к кликнутой кнопке
    button.classList.add("active");

    // Показываем или скрываем элементы spollers__item в зависимости от значения атрибута data-filter
    spollers.forEach((spoller, i) => {
      if (spoller.getAttribute("data-filter") === filter) {
        spoller.style.display = "block";
      } else {
        spoller.style.display = "none";
      }
    });
  });

  // При загрузке страницы активируем первую кнопку и соответствующий элемент spollers__item
  if (index === 0) {
    button.classList.add("active");
    spollers[0].style.display = "block";
  }
});

//========================================================================================================================================================

const cards = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("is-flipped");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

//========================================================================================================================================================

// Получаем все кнопки фильтра
const filterButtons = document.querySelectorAll(".doctors__btn");

// Получаем все элементы контента
const contentItems = document.querySelectorAll(".doctors__inner");

// Изначально скрываем все элементы контента, кроме первого
for (let i = 1; i < contentItems.length; i++) {
  contentItems[i].style.display = "none";
}

// Добавляем обработчик события клика на каждую кнопку
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Удаляем класс "active" у всех кнопок
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Добавляем класс "active" для текущей кнопки
    button.classList.add("active");

    // Получаем значение атрибута "data-filter" текущей кнопки
    const filterValue = button.getAttribute("data-filter");

    // Перебираем все элементы контента
    contentItems.forEach((item) => {
      // Проверяем, соответствует ли атрибут "data-filter" элемента значению фильтра
      if (item.getAttribute("data-filter") === filterValue) {
        // Если соответствует, отображаем элемент
        item.style.display = "flex";
      } else {
        // Если не соответствует, скрываем элемент
        item.style.display = "none";
      }
    });
  });
});
