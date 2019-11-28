class NewsDAO{
    constructor(){
        this.data = [
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "U.S. jobless claims tumble to 213,000 just before Thanksgiving, back near post recession low - MarketWatch",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMid2h0dHBzOi8vd3d3Lm1hcmtldHdhdGNoLmNvbS9zdG9yeS9qb2JsZXNzLWNsYWltcy10dW1ibGUtMTUwMDAtdG8tMjEzMDAwLWFuZC1mYWxsLWJhY2stbmVhci1wb3N0cmVjZXNzaW9uLWxvdy0yMDE5LTExLTI30gFPaHR0cHM6Ly93d3cubWFya2V0d2F0Y2guY29tL2FtcC9zdG9yeS9ndWlkLzE1ODk5ODA4LTEwNjUtMTFFQS1BNDlELTM4MUNCNzA1NjYxNg?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T16:30:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "fox-news",
                    "name": "Fox News"
                },
                "author": "Alexandria Hein",
                "title": "Romaine lettuce E. coli outbreak tied to California region hits 67 cases - Fox News",
                "description": "The number of cases rose by 27 since the last update was given on Nov. 22.",
                "url": "https://www.foxnews.com/health/romaine-lettuce-e-coli-outbreak-california-region-67-cases",
                "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2019/01/ContentBroker_contentid-96c9cb961b6f4161842c27883e036ab7.png",
                "publishedAt": "2019-11-27T15:24:08Z",
                "content": "The number of E. coli cases tied to romaine lettuce from Salinas, Calif., has risen to 67 across 19 states, with the majority of cases occurring in Wisconsin. According to the Centers for Disease Control and Prevention (CDC), 39 of those cases required hospit… [+2149 chars]"
            },
            {
                "source": {
                    "id": "cnbc",
                    "name": "CNBC"
                },
                "author": "Diana Olick",
                "title": "Pending home sales fall 1.7% in October, as housing shortage worsens - CNBC",
                "description": "Demand for housing is high, but there aren't enough homes for sale to meet it. Pending home sales fell 1.7% in October month-to-month, according to the National Association of Realtors.",
                "url": "https://www.cnbc.com/2019/11/27/pending-home-sales-fall-1point7percent-in-october-as-housing-shortage-worsens.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/102945585-GettyImages-484768968r.jpg?v=1574866221",
                "publishedAt": "2019-11-27T15:00:00Z",
                "content": "Demand for housing is high, but there aren't enough homes for sale to meet it. \r\nPending home sales, which measure signed contracts, fell 1.7% in October month-to-month, according to the National Association of Realtors. Sales were 4.4% higher annually, likel… [+1775 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Bernie Sanders channels Lizzo as he slow jams the news - CNN",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiaGh0dHBzOi8vd3d3LmNubi5jb20vdmlkZW9zL21lZGlhLzIwMTkvMTEvMjcvYmVybmllLXNhbmRlcnMtc2xvdy1qYW1zLW5ld3MtbGF0ZS1uaWdodC1sYXVnaHMtb3JpZy12cHguY25u0gFsaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vdmlkZW9zL21lZGlhLzIwMTkvMTEvMjcvYmVybmllLXNhbmRlcnMtc2xvdy1qYW1zLW5ld3MtbGF0ZS1uaWdodC1sYXVnaHMtb3JpZy12cHguY25u?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T14:48:49Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Stocks hit record highs as US economy tops expectations - Fox Business",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiOWh0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tYXJrZXRzL3VzLXN0b2Nrcy1ub3YtMjctMjAxOdIBPWh0dHBzOi8vd3d3LmZveGJ1c2luZXNzLmNvbS9tYXJrZXRzL3VzLXN0b2Nrcy1ub3YtMjctMjAxOS5hbXA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T14:39:04Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Wall Street opens at record highs on trade optimism, upbeat data - Investing.com",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMifWh0dHBzOi8vd3d3LmludmVzdGluZy5jb20vbmV3cy9zdG9jay1tYXJrZXQtbmV3cy93YWxsLXN0cmVldC1zZXQtdG8tZWRnZS1oaWdoZXItYXQtb3Blbi1vbi10cmFkZS1vcHRpbWlzbS11cGJlYXQtZGF0YS0yMDI5MjY00gEA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T14:37:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "Adam Clark Estes",
                "title": "Our Favorite Cheap 4K TV Looks Even Better With Quantum Dot Technology - Gizmodo",
                "description": "“Quantum dot” technology sounds like a fake invention, something made up by a well-meaning marketing team. Well, it is, and it isn’t. Although different companies have different brand names for their own recipes, quantum dot displays are a real innovation tha…",
                "url": "https://gizmodo.com/our-favorite-cheap-4k-tv-looks-even-better-with-quantum-1839618719",
                "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/vztabmmq6a0gqxmij5v8.jpg",
                "publishedAt": "2019-11-27T14:32:00Z",
                "content": "Quantum dot technology sounds like a fake invention, something made up by a well-meaning marketing team. Well, it is, and it isnt. Although different companies have different brand names for their own recipes, quantum dot displays are a real innovation that a… [+6576 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "SoulCycle CEO Melanie Whelan resigns - Bizwomen - The Business Journals",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiZ2h0dHBzOi8vd3d3LmJpempvdXJuYWxzLmNvbS9iaXp3b21lbi9uZXdzL2xhdGVzdC1uZXdzLzIwMTkvMTEvc291bGN5Y2xlLWNlby1tZWxhbmllLXdoZWxhbi1yZXNpZ25zLmh0bWzSAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T14:32:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Experts at Turkey Talk Line can answer all of your last-minute questions - KOMO News",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiamh0dHA6Ly9rb21vbmV3cy5jb20vbmV3cy9jb25zdW1lci9leHBlcnRzLWF0LXR1cmtleS10YWxrLWxpbmUtY2FuLWFuc3dlci1hbGwtb2YteW91ci1sYXN0LW1pbnV0ZS1xdWVzdGlvbnPSAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T14:30:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "In major rebranding, Partners HealthCare to change name to Mass General Brigham - The Boston Globe",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMilgFodHRwczovL3d3dy5ib3N0b25nbG9iZS5jb20vYnVzaW5lc3MvMjAxOS8xMS8yNy9tYWpvci1yZWJyYW5kaW5nLXBhcnRuZXJzLWhlYXRoY2FyZS1jaGFuZ2UtbmFtZS1tYXNzLWdlbmVyYWwtYnJpZ2hhbS9FaDVFbXB1MDVZNlVoTjN3RTJXcWRKL3N0b3J5Lmh0bWzSAaUBaHR0cHM6Ly93d3cuYm9zdG9uZ2xvYmUuY29tL2J1c2luZXNzLzIwMTkvMTEvMjcvbWFqb3ItcmVicmFuZGluZy1wYXJ0bmVycy1oZWF0aGNhcmUtY2hhbmdlLW5hbWUtbWFzcy1nZW5lcmFsLWJyaWdoYW0vRWg1RW1wdTA1WTZVaE4zd0UyV3FkSi9zdG9yeS5odG1sP291dHB1dFR5cGU9YW1w?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T14:16:21Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Florida airport TSA finds high-capacity magazines hidden in baby toy - Fox News",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiQmh0dHBzOi8vd3d3LmZveG5ld3MuY29tL3RyYXZlbC9mbG9yaWRhLWFpcnBvcnQtdHNhLWhpZGRlbi1iYWJ5LXRvedIBRmh0dHBzOi8vd3d3LmZveG5ld3MuY29tL3RyYXZlbC9mbG9yaWRhLWFpcnBvcnQtdHNhLWhpZGRlbi1iYWJ5LXRveS5hbXA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T14:16:10Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "US economy grew at a moderate 2.1% annual rate last quarter - The Associated Press",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiM2h0dHBzOi8vYXBuZXdzLmNvbS8xN2MxMDIzYjQyODk0ZjZjYWVkM2RhNjIzY2I1MDkxONIBAA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T14:03:50Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "December selloff warning from strategist who predicted last year’s rout - MarketWatch",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMic2h0dHBzOi8vd3d3Lm1hcmtldHdhdGNoLmNvbS9zdG9yeS9kZWNlbWJlci1zZWxsb2ZmLXdhcm5pbmctZnJvbS1zdHJhdGVnaXN0LXdoby1wcmVkaWN0ZWQtbGFzdC15ZWFycy1yb3V0LTIwMTktMTEtMjfSAU9odHRwczovL3d3dy5tYXJrZXR3YXRjaC5jb20vYW1wL3N0b3J5L2d1aWQvOUZGREM3NTAtMTBEQS0xMUVBLUE0OUQtMzgxQ0I3MDU2NjE2?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T13:46:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Lego burns Tesla's Cybertruck with brickmobile - Fox News",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiRWh0dHBzOi8vd3d3LmZveG5ld3MuY29tL2F1dG8vbGVnby1idXJucy10ZXNsYXMtY3liZXJ0cnVjay1icmlja21vYmlsZdIBSWh0dHBzOi8vd3d3LmZveG5ld3MuY29tL2F1dG8vbGVnby1idXJucy10ZXNsYXMtY3liZXJ0cnVjay1icmlja21vYmlsZS5hbXA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T13:42:10Z",
                "content": null
            },
            {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Cameron Faulkner",
                "title": "These are the best Black Friday and Cyber Monday deals under $40 - The Verge",
                "description": "Black Friday and Cyber Monday are great for scoring huge discounts on expensive tech, such as 4K TVs, laptops, and more. But it’s also good for saving on more affordable items, so we’ve listed several that you can find for less than $40.",
                "url": "https://www.theverge.com/good-deals/2019/11/27/20978404/black-friday-tech-deals-cyber-monday-under-40-cheap-sale-gifts-games-home",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/V1wIM07kv_UQF1WrMpkrQIejuFg=/0x103:2040x1171/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9537475/akrales_171025_2091_0010.jpg",
                "publishedAt": "2019-11-27T13:00:00Z",
                "content": "Six suggestions that wont cost you an arm and a leg\r\nRavpower\r\nThis story is part of a group of stories called \r\nOnly the best deals on Verge-approved gadgets get the Good Deals stamp of approval, so if you're looking for a deal on your next gadget or gift fr… [+3248 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Boeing 777X’s fuselage split dramatically during September stress test - Seattle Times",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMifWh0dHBzOi8vd3d3LnNlYXR0bGV0aW1lcy5jb20vYnVzaW5lc3MvYm9laW5nLWFlcm9zcGFjZS9ib2VpbmctNzc3eHMtZnVzZWxhZ2Utc3BsaXQtZHJhbWF0aWNhbGx5LWR1cmluZy1zZXB0ZW1iZXItc3RyZXNzLXRlc3Qv0gGDAWh0dHBzOi8vd3d3LnNlYXR0bGV0aW1lcy5jb20vYnVzaW5lc3MvYm9laW5nLWFlcm9zcGFjZS9ib2VpbmctNzc3eHMtZnVzZWxhZ2Utc3BsaXQtZHJhbWF0aWNhbGx5LWR1cmluZy1zZXB0ZW1iZXItc3RyZXNzLXRlc3QvP2FtcD0x?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T13:00:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "cnbc",
                    "name": "CNBC"
                },
                "author": "Lauren Thomas",
                "title": "Toys R Us is back. Here's a look inside its first new store - CNBC",
                "description": "This marks the Toys R Us brand's return to bricks-and-mortar retail after the company was forced to liquidate last year, shuttering its entire fleet of stores.",
                "url": "https://www.cnbc.com/2019/11/27/toys-r-us-is-back-heres-a-look-inside-its-first-new-store.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/106268380-1574865296918storefront_086_new.jpg?v=1574865414",
                "publishedAt": "2019-11-27T13:00:00Z",
                "content": "Hoping to bring back feelings of childhood nostalgia this holiday season? If you're lucky enough to be near one of two cities, you'll have the chance to go to a Toys R Us store again.\r\nTwo smaller-format, permanent Toys R Us stores are about to open. The firs… [+2519 chars]"
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "5 things to know before the stock market opens Wednesday - CNBC",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMiZGh0dHBzOi8vd3d3LmNuYmMuY29tLzIwMTkvMTEvMjcvNS10aGluZ3MtdG8ta25vdy1iZWZvcmUtdGhlLXN0b2NrLW1hcmtldC1vcGVucy1ub3ZlbWJlci0yNy0yMDE5Lmh0bWzSAWhodHRwczovL3d3dy5jbmJjLmNvbS9hbXAvMjAxOS8xMS8yNy81LXRoaW5ncy10by1rbm93LWJlZm9yZS10aGUtc3RvY2stbWFya2V0LW9wZW5zLW5vdmVtYmVyLTI3LTIwMTkuaHRtbA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T12:47:00Z",
                "content": null
            },
            {
                "source": {
                    "id": "google-news",
                    "name": "Google News"
                },
                "author": null,
                "title": "Touch-Screen Self-Serve Taps Take Off As Costs Rise For Bars - NPR",
                "description": null,
                "url": "https://news.google.com/__i/rss/rd/articles/CBMibWh0dHBzOi8vd3d3Lm5wci5vcmcvMjAxOS8xMS8yNy83ODMwMzY3MjQvOTktYm90dGxlcy1vZi1iZWVyLW9uLXRoZS10b3VjaC1zY3JlZW4tdGhlLXNwcmVhZC1vZi1zZWxmLXNlcnZlLXRhcHPSAQA?oc=5",
                "urlToImage": null,
                "publishedAt": "2019-11-27T12:39:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Prnewswire.com"
                },
                "author": null,
                "title": "Canopy Growth Outlines \"Cannabis 2.0\" Portfolio - PRNewswire",
                "description": "/PRNewswire/ - On November 28th, 2019, Canopy Growth Corporation (\"Canopy Growth\" or the \"Company\") (TSX: WEED) (NYSE: CGC) will officially unveil its new...",
                "url": "https://www.prnewswire.com/news-releases/canopy-growth-outlines-cannabis-2-0-portfolio-300966065.html",
                "urlToImage": "https://mma.prnewswire.com/media/1036423/Canopy_Growth_Corporation_Canopy_Growth_Outlines__Cannabis_2_0_.jpg?p=facebook",
                "publishedAt": "2019-11-27T12:30:00Z",
                "content": "\"With the coming of Cannabis 2.0, our goal is to provide customers with the best quality products, and I truly believe through the hard work and dedication of our team, we have delivered just that,\" said Mark Zekulin, CEO, Canopy Growth. \"Since our first medi… [+12196 chars]"
            }
        ];
    }
    getNews(){
        return this.data;
    }
}

module.exports = NewsDAO;