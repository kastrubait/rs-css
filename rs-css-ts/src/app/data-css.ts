import ITrainingData from './modeles';

// eslint-disable-next-line import/prefer-default-export
export const CSS_TRAINING_DATA: ITrainingData = {
  theme: 'Css selectors',
  hint:
    'The simulator consists of several game levels. Each level includes an example of layout and html-code that corresponds to the current level. Your task is to write   a css selector that corresponds to all selected layout elements',
  tasks: [
    {
      title: 'CSS Селекторы',
      notation: '<code>A</code>',
      description: `Селектор элементов выбирает HTML элементы на основе имени элемента. Здесь все элементы <p> на странице будут выровнены по центру, с красным цветом текста:`,
      exemples: [
        `p {
          text-align: center;
          color: red;
        }`,
      ],
      exercise: 'Выберите всех птиц',
      exerciseView: '',
      answer: 'bird',
    },
    {
      title: 'CSS Селекторы',
      notation: ' <code>#A</code>',
      description: `Селектор идентификаторов использует атрибут идентификатора HTML элемента для выбора конкретного элемента.
      Идентификатор элемента уникален в пределах страницы, поэтому селектор идентификаторов используется для выбора одного уникального элемента!
      Чтобы выбрать элемент с определенным идентификатором, напишите символ хэша ( # ), за которым следует идентификатор элемента.
      Приведенное ниже правило CSS будет применено к HTML элементу id="region":`,
      exemples: [
        `#region {
          text-align: center;
          color: red;
        }`,
      ],
      exercise: 'Выберите птицу в очках ',
      exerciseView: '',
      answer: '#glass',
    },
    {
      title: 'CSS Комбинаторы',
      notation: '<code>A B</code>',
      description: `Комбинатор - это то, что объясняет взаимосвязь между селекторами. Селектор потомок сопоставляется всем элементам, которые являются потомками указанного элемента.
      Следующий пример выбирает все элементы <p> внутри элемента <div>:`,
      exemples: [
        `div p {
          background-color: yellow;
        }`,
      ],
      exercise: 'Выберите всех всех птц на проводе',
      exerciseView: `
        <div>&lt;div class="table"&gt;
          <div class="">&lt;bento&gt;
            <div class="">&lt;apple  class="small" /&gt;</div>
            &lt;/bento&gt;
          </div>
          <div class="">&lt;plate /&gt;</div>
          <div>&lt;apple  class="small" /&gt;</div>
          <div>&lt;plate /&gt;</div>
          <div>&lt;apple /&gt;</div>
          <div>&lt;apple  class="small" /&gt;</div>
          <div>&lt;apple  class="small" /&gt;</div>
          &lt;/div&gt;
        </div>`,
      answer: 'bird wire',
    },
    {
      title: 'CSS Комбинаторы',
      notation: '<code>A > B</code>',
      description: `Комбинатор - это то, что объясняет взаимосвязь между селекторами. Селектор ребенок выбирает все элементы, которые являются непосредственными детьми указанного элемента.
      Следующий пример выбирает все элементы <p> внутри элемента <div>:`,
      exemples: [
        `div > p {
          background-color: yellow;
        }`,
      ],
      exercise: '',
      exerciseView: `<pre><code class="html">
<div class="table">
  <bento>
    <apple class="small" />
  </bento>
  <plate />
  <apple class="small" />
  <plate />
  <apple />
  <apple class="small" />
  <apple class="small" />
</div>
      </code></pre>`,
      answer: '',
    },
    {
      title: 'CSS Комбинаторы',
      notation: '<code>A + B</code>',
      description: `Комбинатор - это то, что объясняет взаимосвязь между селекторами. Селектор соседний брат выбирает все элементы, которые являются смежными элементами указанного элемента.
      Дочерние элементы должны иметь тот же родительский элемент, "соседний" значит "сразу же после". Следующий пример выбирает все элементы <p>, которые размещаются сразу после элемента <div>:`,
      exemples: [
        `div + p {
          background-color: yellow;
        }`,
      ],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'CSS Комбинаторы',
      notation: '<code>A ~ B</code>',
      description: `Комбинатор - это то, что объясняет взаимосвязь между селекторами. Селектор общий брат выбирает все элементы, которые являются элементами указанного элемента.
      Дочерние элементы должны иметь тот же родительский элемент, "соседний" значит "сразу же после". Следующий пример выбирает все элементы <p>, что являются братьями и сестрами элемента <div>:`,
      exemples: [
        `div ~ p {
          background-color: yellow;
        }`,
      ],
      exercise: 'Select the pickle on the fancy plate',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Class Selector',
      notation: '<code>A ~ B</code>',
      description:
        'Select elements by their class/ The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
      exemples: ['.neato selects all elements with class="neato"'],
      exercise: 'Select the small apples',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
    {
      title: 'Type Selector',
      notation: '<code>A ~ B</code>',
      description: 'Select elements by their type',
      exemples: ['div selects all div elements', 'p selects all p elements'],
      exercise: '',
      exerciseView: '',
      answer: '',
    },
  ],
};
