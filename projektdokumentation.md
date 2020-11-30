# De 17 verdensmål 
Opgave om de 17 verdensmål ved brug af Arrow functions, Closure, Rest parameter og Destruktuering.

### Arrow Functions
Her bruger jeg en arrow function ved min onclick function på div elementerne. 

```js
div.onclick = () => { //Onclick function
        DetailController(id);
```

### Closure 
Her bruger jeg closure.

```js
const a = document.createElement('a');//Opretter et a tag
    a.href = '#'; //Giver a.href #
    a.innerText = 'Tilbage til Oversigt';//Giver a.href en title
    a.onclick = () => { //Onlcik på a
        ListController();
    };
    div.appendChild(a);//Sætter ind på siden
    const img = document.createElement('img'); //Opretter nyt img element
    img.src = image;//src til billedet
    div.appendChild(img);//Sætter ind på siden
    const p = document.createElement('p');//Opretter nyt p element
    p.innerText = description;//Giver p en descirption 
    div.appendChild(p);//Sættter ind på siden
    maincontainer.appendChild(div);//Sætter div ind i min maincontainer
};
```

### Rest Parameter
Her bruger jeg rest parameter ved min function og id.

```js
async function DetailController(...id) { //Function med Detailcontroller
    let response = await fetch(`${url}/${id}`) //fetch url og id
    .then(response => response.json()) //Laver om til json format
    .then(data => {
        removeHTML();
        DetailView(data.item);
    })
}
```

### Destruktuering 
Her bruger jeg destruktering.
```js
const {id, title, byline, color, icon: svg} = item;
```