function init() {
  const p = document.createElement('p');
  p.textContent = `The simulator consists of several game levels. Each level includes an example of
                  layout and html-code that corresponds to the current level. Your task is to write
                  a css selector that corresponds to all selected layout elements`;

  const heading = document.createElement('h1');
  heading.textContent = 'RS CSS';

  const img = document.createElement('img');
  img.src = './assets/images/logo_192x192.png';

  const root = document.querySelector('#root');
  root?.append(heading, p, img);
}
init();

// document.addEventListener('DOMContentLoaded', init());
