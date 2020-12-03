import { btnLevel, contentLogo, contentFooter, itemLevel, editorHtml, editorCss } from './layout';
import { check } from './utils';
import { CSS_TRAINING_DATA } from './data-css';

function init(): void {
  const boxLevel = document.createElement('div');
  boxLevel.classList.add('content_level-block');
  boxLevel.innerHTML = btnLevel();

  const navLevel = document.createElement('ul');
  navLevel.classList.add('content__box');

  const logo = document.createElement('div');
  logo.classList.add('header-content_logo');
  logo.innerHTML = contentLogo();
  boxLevel.append(logo, navLevel);

  const { tasks } = CSS_TRAINING_DATA;
  for (let i = 0; i < tasks.length; i += 1) {
    const item = document.createElement('li');
    // <div data-item="${item + 1}"  class="level__item">
    const { notation } = tasks[i];
    item.innerHTML = itemLevel(i, notation);
    item.setAttribute('data-item', `${i + 1}`);
    item.setAttribute('data-check', 'false');
    item.classList.add('level__item');
    navLevel.append(item);
  }

  const fieldGame = document.createElement('div');
  fieldGame.classList.add('content_game-block');

  const fieldEditor = document.createElement('div');
  fieldEditor.classList.add('content_editor-block');

  const html = document.createElement('div');
  html.classList.add('content_editor-block__html');
  html.innerHTML = editorHtml();

  const css = document.createElement('div');
  css.classList.add('content_editor-block__css');
  css.innerHTML = editorCss();
  fieldEditor.append(css, html);

  const footer = document.createElement('footer');
  footer.innerHTML = contentFooter();

  const content = document.createElement('content');
  content.append(boxLevel, fieldGame, fieldEditor);

  const root = document.querySelector('#root');
  root?.append(content);
  document.body.append(footer);
}

init();

window.addEventListener(
  'input',
  function (e) {
    const code = e.target as HTMLInputElement;
    check(1, code.value);
  },
  false,
);
