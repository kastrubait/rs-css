import { IStateGame, IitemLevel } from './modeles';
import { CSS_TRAINING_DATA } from './data-css';
import { initPage } from './init';
import { checkAnswer, printHtmlCode, showHtmlCode, getAnswer, printAnswer } from './utils';

class SimulatorCss {
  public position: IStateGame;

  public constructor(position: IStateGame) {
    this.position = position;
  }

  getPosition(item: number) {
    const { state } = this.position;
    return state[item];
  }
}

let newGame: IStateGame;
if (localStorage.getItem('trainCss') !== null) {
  newGame = JSON.parse(localStorage.getItem('trainCss'));
} else {
  const { tasks } = CSS_TRAINING_DATA;
  const currLevel = 1;
  const state: IitemLevel[] = [];
  for (let i = 0; i < tasks.length; i += 1) {
    state.push({ item: i + 1, completed: false, help: false });
  }
  newGame = {
    state,
    currLevel,
  };
}

const stateGame = new SimulatorCss(newGame);
const { currLevel } = stateGame.position;

initPage(stateGame.position);

window.addEventListener(
  'input',
  function (e: Event): void {
    const code = e.target as HTMLInputElement;
    checkAnswer(1, code.value);
  },
  false,
);

const li = document.querySelectorAll('li');
Array.from(li).forEach(element =>
  element.addEventListener('click', function (): void {
    const { item } = this.dataset;
    element.classList.add('level__item--active');
    printHtmlCode(parseInt(item, 10));
    showHtmlCode(parseInt(item, 10));
  }),
);

const help = document.querySelector('#help');
help.addEventListener('click', function (): void {
  const correct = getAnswer(currLevel);
  printAnswer(correct);
});
