import F, { exh2tag, createH2tag } from "./modules/h2tag.mjs";

document.body.insertAdjacentHTML('beforeend', createH2tag('Hello my dear friend!!!', 'first-h2'));
document.body.insertAdjacentHTML('beforeend', createH2tag('How can I help you?'));

document.getElementsByClassName('first-h2')[0].style = 'background: orange;';

let tagExplorer = new exh2tag();
tagExplorer.list();

let f = new F(10, 20);
console.log(f.a + f.b);
