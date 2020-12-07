import { IStateGame } from './modeles';
import { initPage } from './init';
import {
  checkAnswer,
  printHtmlCode,
  showHtmlCode,
  getAnswer,
  printAnswer,
  removeAllClassActive,
  initParamTrain,
  removeAllClass,
  clearFieldInput,
} from './utils';

class SimulatorCss {
  public position: IStateGame;

  public constructor(position: IStateGame) {
    this.position = position;
  }

  getPosition(item: number) {
    const { state } = this.position;
    return state[item];
  }

  setCurrentLevel(item: number) {
    this.position.currLevel = item;
  }

  setCurrentState(newTrain: IStateGame) {
    this.position.state = newTrain.state;
  }
}

const newGame: IStateGame = initParamTrain();

const stateGame = new SimulatorCss(newGame);

initPage(stateGame.position);

const fieldInput = document.querySelector('#code') as HTMLDivElement;
const btnCheck = document.querySelector('#check') as HTMLDivElement;
fieldInput.addEventListener(
  'input',
  function (): void {
    fieldInput.classList.remove('blink-input');
    btnCheck.classList.remove('disabled');
  },
  false,
);

window.addEventListener(
  'input',
  function (e: Event): void {
    const code = e.target as HTMLInputElement;
    checkAnswer(1, code.value);
  },
  false,
);

const itemLevel = document.querySelectorAll('li');
Array.from(itemLevel).forEach(element =>
  element.addEventListener('click', function (): void {
    removeAllClassActive();
    element.classList.add('level__item--active');
    const { item } = this.dataset;
    stateGame.setCurrentLevel(parseInt(item, 10));
    printHtmlCode(parseInt(item, 10));
    showHtmlCode(parseInt(item, 10));
  }),
);

const help = document.querySelector('#help');
help.addEventListener('click', function (): void {
  const correct = getAnswer(stateGame.position.currLevel);
  printAnswer(correct);
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', function (): void {
  removeAllClass();
  clearFieldInput();
  localStorage.removeItem('trainCss');
  const firstItem = document.querySelector('li');
  firstItem.classList.add('level__item--active');
  const newSession = initParamTrain();
  printHtmlCode(newSession.currLevel);
  showHtmlCode(newSession.currLevel);
});

const toggleLevel = document.querySelector('.level__btn') as HTMLElement;
const elList = document.getElementById('levelList') as HTMLDivElement;
toggleLevel.addEventListener('click', function (): void {
  elList.classList.toggle('open');
});

// showLevelInTitle(currLevel);
