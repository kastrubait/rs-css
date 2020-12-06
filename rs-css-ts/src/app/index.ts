import { init } from './init';
import { checkAnswer, printHtmlCode, showHtmlCode } from './utils';

let isVisibele = false;

init();

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

const toggleLevel = document.querySelector('.btn-level');
const elList = document.querySelector('.level-block__list') as HTMLElement;
const elGame = document.querySelector('.content_game-block') as HTMLElement;
toggleLevel.addEventListener('click', function (): void {
  // const { visible } = elList.dataset;
  console.log(isVisibele);
  if (!isVisibele) {
    elList.style.width = '250px';
    elGame.style.marginLeft = '250px';
  }
  // else {
  //   elList.style.width = '0px';
  //   elGame.style.marginLeft = '0px';
  //   // console.log('-', elList);
  // }
  isVisibele = !isVisibele;
});
