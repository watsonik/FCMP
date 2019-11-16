import {ErrorsHandler} from "./errorsHandler";
import {FetchFactory} from "./fetchFactory";

let request = (category = 'business', type = 'GET') => {
    const factory = new FetchFactory();

    // ------------ PROXY ----------------------

    const factoryProxy = new Proxy(factory, {
        get(target, key) {
            const propertyValue = target[key];
            return (...args) => {
                console.log("method: " + type);
                console.log("category: " + category);
                return propertyValue.apply(target, args);
            };
        }
    });
    return factoryProxy.sendRequest(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6017a840ef644f4fb0a521c8674c5b4a`, `${type}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
};

const cleanNewsNodes = () => {
    const news = document.getElementById('news');
    if (news.firstChild) {
        news.innerHTML = "";
    }
};

const template = (post) => {
    const li = document.createElement('li');
    const title = document.createElement('h1');
    const date = document.createElement('h5');
    const author = document.createElement('h2');
    const image = document.createElement('img');
    const text = document.createElement('p');
    const a = document.createElement('a');

    title.innerHTML = post.title;
    author.innerHTML = post.author;
    date.innerHTML = new Date(post.publishedAt);
    image.src = post.urlToImage;
    text.innerHTML = post.description;
    a.setAttribute('href', post.url);
    a.innerHTML = "more";

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(date);
    li.appendChild(image);
    li.appendChild(text);
    li.appendChild(a);

    return li;
};

const createNewsNodes = data => {
    const news = document.getElementById('news');
    data.articles.forEach(article => news.appendChild(template(article)));

};

let showError = e => {
    let app = document.getElementById('app');
    let p = document.createElement('p');
    p.innerHTML = e;
    app.appendChild(p);
};

let fetchNews = (category) => {
    request(category)
        .then(data => {
            cleanNewsNodes();
            createNewsNodes(data);
        })
        .catch((error) => {
            new ErrorsHandler().handle(error);
        });
};

let createCategoryList = () => {
    let menu = document.getElementById('menu');
    let list = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

    list.forEach(el => {
        const li = document.createElement('li');
        li.setAttribute('data', el);
        li.innerHTML = el;
        menu.appendChild(li);
    });
    menu.addEventListener("click", (category) => {
        fetchNews(category.target.getAttribute('data'));
    })

};

createCategoryList();
