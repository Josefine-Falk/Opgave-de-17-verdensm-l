const url = "https://api.mediehuset.net/sdg/goals"; //Url api til de 17 verdensmaal
const maincontainer = document.getElementById('maincontainer'); //Henter div elementet ind med id som er maincontainer

function ListController() { //Function kaldt listcontroller
    removeHTML(); //Opryder html
    fetch(url) //Fetcher min url, henter det ind
    .then(response => response.json()) //laver det om til json format
    .then(data => {
       for(let item of data.items) { //For of loop af item data
           const {id, title, byline, color, icon: svg} = item; //variabel med de ting jeg skal bruge fra api
           ListView(id, title, byline, color, svg); //liste over de ting
       }
    })
}

function ListView (id, title, byline, color, svg) { //function med de ting fra linje 11
    const div = document.createElement('div'); //Opretter et nyt element som er en div
    div.setAttribute('id',`goal${id}`); //Giver dem en attribute med en id goal
    div.style.backgroundColor = `#${color}`; //laver baggrundsfarve
    div.innerHTML = svg; //Svg 

    const h3 = document.createElement('h3'); //Opretter en h3 
    h3.innerText = title; //Giver h3 en title
    div.appendChild(h3); //Opretter den på siden
    h3.setAttribute('class', `heading`) //Giver h3 attribute class som er heading
    
    const span_byline = document.createElement('span'); //Opretter et element som er en span
    span_byline.innerText = byline; //Byline
    div.appendChild(span_byline);//Opretter den på siden
    span_byline.setAttribute('class', `byline`) //Giver span_byline en attribute med en class som er byline

    div.onclick = () => { //Onclick function
        DetailController(id);//
    }
    maincontainer.appendChild(div);//Opretter den på siden
}

function DetailController(id) { //Function med Detailcontroller
    fetch(`${url}/${id}`) //Fetch url og id
    .then(response => response.json()) //laver det om til json format
    .then(data => {
        removeHTML();//Clear html
        DetailView(data.item);
    })
}

function DetailView({id, title, description, image, color} = data) { //Function med detailview med id, title, description, image, color
    const div = document.createElement('div');//opretter et nyt div element
    div.style.backgroundColor = `#${color}`;//Laver baggrundsfarve

    const h1 = document.createElement('h1');//Opretter en h1
    h1.innerText = title;//Title til h1
    div.appendChild(h1);//Sætter ind på siden

    const a = document.createElement('a');//Opretter et a tag
    a.href = '#'; //Giver a.href #
    a.innerText = 'Tilbage til Oversigt';//Giver a.href en title
    a.onclick = () => { //Onlcik på a
        ListController();
    }
    div.appendChild(a);//Sætter ind på siden

    const img = document.createElement('img'); //Opretter nyt img element
    img.src = image;//src til billedet
    div.appendChild(img);//Sætter ind på siden

    const p = document.createElement('p');//Opretter nyt p element
    p.innerText = description;//Giver p en descirption 
    div.appendChild(p);//Sættter ind på siden

    maincontainer.appendChild(div);//Sætter div ind i min maincontainer
}

function removeHTML() { //Clear html
    maincontainer.innerHTML = '';
}
ListController();