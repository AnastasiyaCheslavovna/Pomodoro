import { state } from "./state.js";
import { alarm } from "./alarm.js";
import { addZero } from "./util.js";
import { changeActiveBtn } from "./controle.js";
import { showTodo, updateTodo } from "./todo.js";
const minutesElem = document.querySelector(".time__minutes");
const seconsdElem = document.querySelector(".time__seconds");

export const showTime = (seconds) => {
  minutesElem.textContent = addZero(Math.floor(seconds / 60));
  seconsdElem.textContent = addZero(seconds % 60);
};
export const startTimer = () => {
  state.timeLeft -= 1;

  showTime(state.timeLeft);
  if (state.timeLeft > 0 && state.isActive) {
    state.timerId = setTimeout(startTimer, 1000);
  }
  if (state.timeLeft <= 0) {
    alarm();
    if (state.status === "work") {
      state.activeTodo.pomodoro += 1;

      updateTodo(state.activeTodo);

      if (state.activeTodo.pomodoro % state.count) {
        state.status = "break";
      } else {
        state.status = "relax";
      }

      state.status = "break";
    } else {
      state.status = "work";
    }
    state.timeLeft = state[state.status] * 60;
    changeActiveBtn(state.status);
    showTodo();
    startTimer();
  }
};
