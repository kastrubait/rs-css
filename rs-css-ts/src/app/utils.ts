/* eslint-disable import/prefer-default-export */
import { CSS_TRAINING_DATA } from './data-css';

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
    (function (i) {
      setTimeout(function () {
        code.value += answer[i];
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

// function chooseLevel(): void {}

export { checkAnswer, printHtmlCode, showHtmlCode, getAnswer, printAnswer, removeAllClassActive };
