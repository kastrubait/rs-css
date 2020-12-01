export function btnLevel(): string {
  return `<div class="btn-level">
    <input id="level__toggle" type="checkbox" />
    <label class="level__btn" for="level__toggle">
      <span></span>
    </label>
  </div>`;
}

export function contentEditor(): string {
  return `<div id="html" class="editor-html">
    <div class="editor-html_line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10</div>
    </div class="editor-html_content">editor html</div>
  </div>`;
}

export function itemLevel(item: number, text: string): string {
  return `<a id="${item + 1}"  class="level__item">
    <i class="fa fa-fw fa-wrench"></i><span>${item + 1}</span><span>${text}</span>
  </a>`;
}

export function contentLogo(): string {
  return `<span>RS</span><span>-CSS</span>`;
}

export function contentFooter(): string {
  return `<div class="footer-content">
    <div>
      <a class="footer-content_logo">RS CSS</a>
      <p class="footer-content_copyright">Copyright © 2020 RS CSS | All Rights Reserved</p>
    </div>
    <div>
      <a href="https://rs.school/js/"><img src="assets/inline/rs_school_js.svg"></a>
    </div>
    <div>
      <h2>About</h2>
      <p class="footer-content_about">This project is a simulator for learning css selectors.</p>
      <a class="footer-content_about" href="https://github.com/rolling-scopes-school/kastrubait-JS2020Q3">create by Kastrubai T</a>
    </div>
  </div>`;
}
