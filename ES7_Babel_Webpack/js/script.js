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

let createCategoryList = () => {
    let menu = document.getElementById('menu');
    let list = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];

    list.forEach(el => {
        const li = document.createElement('li');
        li.setAttribute('data', el);
        li.innerHTML = el;
        menu.appendChild(li);
    });


};
let main = () => {
    createCategoryList();
};

main();