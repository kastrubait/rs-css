import { btnLevel, contentLogo, contentFooter, itemLevel, editorHtml, editorCss } from './layout';
import { CSS_TRAINING_DATA } from './data-css';

// eslint-disable-next-line import/prefer-default-export
export function init(): void {
  const boxLevel = document.createElement('div');
  boxLevel.classList.add('content_level-block');
  boxLevel.innerHTML = btnLevel();

  const title = document.createElement('div');
  // title.textContent = 'Тренажер css-селекторов';
  // title.classList.add('title-level');
  boxLevel.append(title);

  const navLevel = document.createElement('ul');
  navLevel.classList.add('level-block__list');
  navLevel.setAttribute('data-visible', 'false');
  boxLevel.append(navLevel);

  const logo = document.createElement('div');
  logo.classList.add('header-content_logo');
  logo.innerHTML = contentLogo();

  const { tasks } = CSS_TRAINING_DATA;
  for (let i = 0; i < tasks.length; i += 1) {
    const item = document.createElement('li');
    const { notation } = tasks[i];
    item.innerHTML = itemLevel(i, notation);
    item.setAttribute('data-item', `${i + 1}`);
    item.setAttribute('data-check', 'false');
    item.classList.add('level__item');
    navLevel.append(item);
  }

  const fieldGame = document.createElement('div');
  fieldGame.classList.add('content_game-block');
  fieldGame.append(logo);

  const btnHint = document.createElement('button');
  btnHint.setAttribute('id', `hint`);
  btnHint.textContent = 'Подсказка';
  const btnHelp = document.createElement('button');
  btnHelp.setAttribute('id', `help`);
  btnHelp.textContent = 'Помощь';
  fieldGame.append(btnHint, btnHelp);

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
