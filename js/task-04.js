/*
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);
const counterValueEl = document.querySelector('#value');

const counter = {
  value: 0,
  onIncrementBtnClick() {
    this.value += 1;
  },
  onDecrementBtnClick() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener('click', function (event) {
  counter.onDecrementBtnClick(event);
  counterValueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function (event) {
  counter.onIncrementBtnClick(event);
  counterValueEl.textContent = counter.value;
});
