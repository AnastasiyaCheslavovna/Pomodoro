import { state } from "./state.js";

const audio = {
  work: new Audio("audio/epic.mp3"),
  break: new Audio("audio/dudu.mp3"),
  relax: new Audio("audio/eralash.mp3"),
};

export const alarm = () => {
  audio[state.status].play();
};
