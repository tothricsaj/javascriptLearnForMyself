Event Delegation
================

So, what is it? The correct answer is not known. Actually, I don't know nevertheless having made some experiments I got some asnwewres.

Let"s see what are made...here the html:

```html
    <div class="parent">
        <div class="child child-1">
            <div class="grandchild"></div>
        </div>
        <div class="child child-2"></div>
    </div>
```

We have one parent with two childe and one grandchild. Nothing extraordinary, of course. Now, let's see the javascript.

```javascript
let el = document.querySelector('.parent');

el.addEventListener('click', function () {
    console.log('%cClicked.....', 'background: orange; color: black; padding: 5px;');
});
```

Before you would say no extraordinary staff again I admit....yes, I know. Ok....what the bloody horse lungs? If you check the site in a browser (tested with Firefox), you will see four box with different colors and dimensions and the magic comes now....the click event is triggered by every box but we added the listener only parent. So, the eventlistener is added to every offspring and in my view, this is the event delegation.

Happy coding!!!
