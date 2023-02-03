import { initControl } from "./controle.js";
import { state } from "./state.js";
import { initTodo } from "./todo.js";
const initPomodoro = () => {
  initControl();
  initTodo();
};
initPomodoro();
