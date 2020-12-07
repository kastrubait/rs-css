/* eslint-disable import/prefer-default-export */
import { CSS_TRAINING_DATA } from './data-css';
import { IStateGame, IitemLevel } from './modeles';

function checkAnswer(item: number, value: string): boolean {
  const { answer } = CSS_TRAINING_DATA.tasks[item - 1];
  const newValue = value.trim();
  if (newValue.includes('. ') && newValue.includes('# ')) {
    return false;
  }
  if (newValue.split(' ').length !== answer.split(' ').length) {
    return false;
  }
  if (newValue.replace(/\s+/g, '') !== answer.replace(/\s+/g, '')) {
    return false;
  }
  return value.trim() === answer;
}

function getAnswer(item: number): string {
  const { answer } = CSS_TRAINING_DATA.tasks[item - 1];
  return answer;
}

function printAnswer(answer: string): void {
  const code = document.querySelector('#code') as HTMLInputElement;
  code.value = '';
  for (let i = 0; i < answer.length; i += 1) {
    (function (p) {
      setTimeout(function () {
        code.value += answer[p];
      }, 175 * i);
    })(i);
  }
  const btnCheck = document.querySelector('#check');
  btnCheck.classList.remove('disabled');
}

function printHtmlCode(item: number): void {
  const { exerciseView } = CSS_TRAINING_DATA.tasks[item - 1];
  const code = document.querySelector('.editor-html_content');
  code.innerHTML = exerciseView;
}

function showHtmlCode(item: number): void {
  const { exerciseView } = CSS_TRAINING_DATA.tasks[item - 1];
}

function removeAllClassActive(): void {
  const itemLevel = document.querySelectorAll('li');
  Array.from(itemLevel).forEach(element => {
    element.classList.remove('level__item--active');
  });
}

function removeAllClass(): void {
  const itemLevel = document.querySelectorAll('li');
  Array.from(itemLevel).forEach(element => {
    element.classList.remove('level__item--active');
    element.classList.remove('level__item--check');
    element.classList.remove('level__item--help');
  });
}

function clearFieldInput(): void {
  const input = document.querySelector('#code') as HTMLInputElement;
  input.value = '';
}

function initParamTrain(): IStateGame {
  let newTraine: IStateGame;
  if (localStorage.getItem('trainCss') !== null) {
    newTraine = JSON.parse(localStorage.getItem('trainCss'));
  } else {
    const { tasks } = CSS_TRAINING_DATA;
    const currLevel = 3;
    const state: IitemLevel[] = [];
    for (let i = 0; i < tasks.length; i += 1) {
      state.push({ item: i + 1, completed: false, help: false });
    }
    newTraine = {
      state,
      currLevel,
    };
  }
  return newTraine;
}

// function chooseLevel(): void {}
// function showLevelInTitle(n) {}

export {
  checkAnswer,
  printHtmlCode,
  showHtmlCode,
  getAnswer,
  printAnswer,
  removeAllClassActive,
  initParamTrain,
  removeAllClass,
  clearFieldInput,
};
