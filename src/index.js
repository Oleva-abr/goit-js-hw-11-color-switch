import './styles.css';

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

// console.log(startBtn);
// console.log(stopBtn);

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

body.style.background = randomIntegerFromInterval(colors);

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на
// случайное значение из массива используя инлайн - стиль.При нажатии на кнопку Stop, изменение
// цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока
// изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов),
// используй функцию randomIntegerFromInterval.
