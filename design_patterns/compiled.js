"use strict";

var request = function request() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'business';
  return fetch("https://newsapi.org/v2/top-headlines?country=us&category=".concat(category, "&apiKey=6017a840ef644f4fb0a521c8674c5b4a")).then(function (response) {
    if (response.ok) {
      return response.json();
    }
  });
};

var cleanNewsNodes = function cleanNewsNodes() {
  var news = document.getElementById('news');

  if (news.firstChild) {
    news.innerHTML = "";
  }
};

var template = function template(post) {
  var li = document.createElement('li');
  var title = document.createElement('h1');
  var date = document.createElement('h5');
  var author = document.createElement('h2');
  var image = document.createElement('img');
  var text = document.createElement('p');
  var a = document.createElement('a');
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

var createNewsNodes = function createNewsNodes(data) {
  var news = document.getElementById('news');
  data.articles.forEach(function (article) {
    return news.appendChild(template(article));
  });
};

var showError = function showError(e) {
  var app = document.getElementById('app');
  var p = document.createElement('p');
  p.innerHTML = e;
  app.appendChild(p);
};

var fetchNews = function fetchNews(category) {
  request(category).then(function (data) {
    cleanNewsNodes();
    createNewsNodes(data);
  }).catch(function (e) {
    return showError(e);
  });
};

var createCategoryList = function createCategoryList() {
  var menu = document.getElementById('menu');
  var list = ['business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  list.forEach(function (el) {
    var li = document.createElement('li');
    li.setAttribute('data', el);
    li.innerHTML = el;
    menu.appendChild(li);
  });
  menu.addEventListener("click", function (category) {
    fetchNews(category.target.getAttribute('data'));
  });
};

createCategoryList();
