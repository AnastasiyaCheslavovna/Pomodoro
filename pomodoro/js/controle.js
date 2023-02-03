import { state } from "./state.js";
import { showTime, startTimer } from "./timer.js";
const btnStart = document.querySelector(".control__btn_start");
const btnStop = document.querySelector(".control__btn_stop");
const navigationsBtns = document.querySelectorAll(".navigation__btn");

export const changeActiveBtn = (dataUse) => {
  state.status = dataUse;
  for (let i = 0; i < navigationsBtns.length; i++) {
    if (navigationsBtns[i].dataset.use === dataUse) {
      navigationsBtns[i].classList.add("navigation__btn_active");
    } else {
      navigationsBtns[i].classList.remove("navigation__btn_active");
    }
  }
};
export const stop = () => {
  clearTimeout(state.timerId);
  state.isActive = false;
  btnStart.textContent = "Старт";
  state.timeLeft = state[state.status] * 60;
  showTime(state.timeLeft);
};

export const initControl = () => {
  btnStart.addEventListener("click", () => {
    if (state.isActive) {
      clearTimeout(state.timerId);
      state.isActive = false;
      btnStart.textContent = "Старт";
    } else {
      state.isActive = true;
      btnStart.textContent = "Пауза";
      startTimer();
    }
  });

  btnStop.addEventListener("click", stop);

  for (let i = 0; i < navigationsBtns.length; i++) {
    navigationsBtns[i].addEventListener("click", () => {
      changeActiveBtn(navigationsBtns[i].dataset.use);
      stop(0);
    });
  }
  showTime(state.timeLeft);
};
