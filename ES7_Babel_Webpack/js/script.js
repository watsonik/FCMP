let request = (category = 'business') => {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6017a840ef644f4fb0a521c8674c5b4a`, {
        method: 'get'
    })
        .then((responce) => {
            if (responce.ok) {
                return responce.json();
            }
            throw new Error(responce.statusText);

        });
};

function cleanNewsNodes(data) {
    let news = document.getElementById('news');
    while (news && news.firstChild) {
        news.removeChild(news.firstChild)
    }
}

let template = (post) => {
    let li = document.createElement('li');
    let title = document.createElement('h1');
    let date = document.createElement('p');
    let author = document.createElement('h2');
    let image = document.createElement('img');
    let text = document.createElement('p');
    let a = document.createElement('a');

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

function createNewsNodes(data) {
    let news = document.getElementById('news');
    data.articles.forEach(article => news.appendChild(template(article)));

}

let showError = e => {
    let app = document.getElementById('app');
    let p = document.createElement('p');
    p.innerHTML = e;
    app.appendChild(p);
}

let fetchNews = (category) => {
    request(category)
        .then(data => {
            console.log(data);
            cleanNewsNodes();
            createNewsNodes(data);
        })
        .catch(e => showError(e));
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
let main = () => {
    createCategoryList();
};

main();