/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ES7_Babel_Webpack/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ES7_Babel_Webpack/js/script.js":
/*!****************************************!*\
  !*** ./ES7_Babel_Webpack/js/script.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let request = (category = 'business') => {
    return fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6017a840ef644f4fb0a521c8674c5b4a`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
};

const cleanNewsNodes = () => {
    const news = document.getElementById('news');
    while (news && news.firstChild) {
        news.removeChild(news.firstChild)
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
    let news = document.getElementById('news');
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

createCategoryList();


/***/ })

/******/ });
//# sourceMappingURL=main.js.map