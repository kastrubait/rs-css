import { btnLevel, contentLogo, contentFooter, itemLevel } from './layout';
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
    const { notation } = tasks[i];
    // const item = navLevel.childNodes[i];
    item.innerHTML = itemLevel(i, notation);
    navLevel.append(item);
  }

  const fieldGame = document.createElement('div');
  fieldGame.classList.add('content_game-block');

  const fieldEditor = document.createElement('div');
  fieldEditor.classList.add('content_editor-block');

  const footer = document.createElement('footer');
  footer.innerHTML = contentFooter();

  const content = document.createElement('content');
  content.append(boxLevel, fieldGame, fieldEditor);

  const root = document.querySelector('#root');
  root?.append(content);
  document.body.append(footer);
}

init();

// document.addEventListener('DOMContentLoaded', init());
