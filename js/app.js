const url = "https://api.mediehuset.net/sdg/goals"; //Url med de 17 verdensmaal
const maincontainer = document.getElementById('maincontainer'); //henter id elementet maincontainer ind fra html

function ListController() { // Function kaldet ListController
    removeHTML(); //fjerner alt i html
    fetch(url) //fetcher url ind som er sat ind i linje 1 
    .then(response => response.json()) //Skal have det om til json format
    .then(data => { 
        for(let item of data.items) { //For of loop med item 
            const {id, title, byline, color, icon: svg} = item; //En variabel med de oplysninger jeg skal bruge fra billedet
            ListView(id, title, byline, color, svg);
        }
    })
    }

    function ListView (id, title, byline, color, svg) {
        const div = document.createElement('div');
        div.setAttribute('id', `${id}`);
        div.style.backgroundColor = `#${color}`;
        div.innerHTML = svg;

        const h3 = document.createElement('h3');
        h3.innerText = title;
        div.appendChild(h3);
        h3.setAttribute('class', `heading`)

        const span_byline = document.createElement('span');
        span_byline.innerText = byline;
        div.appendChild(span_byline);
        span_byline.setAttribute('class', `byline`)

        div.onclick = () => {
            DetailController(id);
        }
        maincontainer.appendChild(div);
    }

    function DetailController(id) {
        fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            removeHTML();
            Detailview(data.item);
        })
    }

    function Detailview({id, title, description, image, color} = data) {
        const div = document.createElement('div');
        div.style.backgroundColor = `#${color}`;

        const h1 = document.createElement('h1');
        h1.innertext = title;
        div.appendChild(h1);

        const a = document.createElement('a');
        a.href = '#';
        a.innertext = '&laquo; Tilbage Til Oversigt';
        a.onclick = () => {
            ListController();
        }
        div.appendChild(a);

        const img = document.createElement('img');
        img.src = image;
        div.appendChild(img);

        const p = document.createElement('p');
        p.innertext = description;
        div.appendChild(img);

        maincontainer.appendChild(div);
    }

    function removeHTML() {
        maincontainer.innerHTML = '';
    }
    ListController();