/* eslint-disable func-names */
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
  wrongAnswer,
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
  'change',
  function (e: Event): void {
    const code = e.target as HTMLInputElement;
    const { currLevel } = stateGame.position;
    const isCorrect = checkAnswer(currLevel, code.value);
    if (isCorrect) {
      const { state } = stateGame.position;
      state[stateGame.position.currLevel - 1].completed = true;
    } else {
      wrongAnswer();
    }
  },
  false,
);

const itemLevel = document.querySelectorAll('li');
Array.from(itemLevel).forEach(element =>
  element.addEventListener('click', function (): void {
    const item = this.id.slice(1);
    removeAllClassActive();
    element.classList.add('level__item--active');
    stateGame.setCurrentLevel(parseInt(item, 10));
    printHtmlCode(parseInt(item, 10));
    showHtmlCode(parseInt(item, 10));
  }),
);

const help = document.querySelector('#help');
help.addEventListener('click', function (): void {
  fieldInput.classList.remove('blink-input');
  const correct = getAnswer(stateGame.position.currLevel);
  printAnswer(correct);
  const { state } = stateGame.position;
  state[stateGame.position.currLevel - 1].help = true;
});

const enter = document.querySelector('#code');
const keyCodeEnter = 13;
enter.addEventListener('keyup', event => {
  event.preventDefault();
  if (event.which || event.keyCode) {
    if (event.which === keyCodeEnter || event.keyCode === keyCodeEnter) {
      document.getElementById('check').click();
    }
  }
});

const check = document.querySelector('#check');
check.addEventListener('click', function (): void {
  const { currLevel, state } = stateGame.position;
  const level = document.querySelector(`#l${currLevel}`);

  if (state[currLevel - 1].completed) {
    level.classList.add('level__item--check');
  }
  if (state[currLevel - 1].help) {
    level.classList.add('level__item--help');
  }
  if (state[currLevel - 1].completed || state[currLevel - 1].help) {
    level.classList.remove('level__item--active');
    document.querySelector(`#l${currLevel + 1}`).classList.add('level__item--active');
    stateGame.setCurrentLevel(currLevel + 1);
    printHtmlCode(currLevel + 1);
    showHtmlCode(currLevel + 1);
  }
  clearFieldInput();
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', function (): void {
  removeAllClass();
  clearFieldInput();
  localStorage.removeItem('trainCss');
  const firstItem = document.querySelector('li');
  firstItem.classList.add('level__item--active');
  const newSession = initParamTrain();
  stateGame.setCurrentState(newSession);
  stateGame.setCurrentLevel(newSession.currLevel);
  printHtmlCode(newSession.currLevel);
  showHtmlCode(newSession.currLevel);
});

const toggleLevel = document.querySelector('.level__btn') as HTMLElement;
const elList = document.getElementById('levelList') as HTMLDivElement;
toggleLevel.addEventListener('click', function (): void {
  elList.classList.toggle('open');
});

// showLevelInTitle(currLevel);
