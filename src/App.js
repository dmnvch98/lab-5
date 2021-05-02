import React, {useEffect, useState} from 'react';
import Card from "./Components/Card";
import Filter from "./Components/Filter";
import NoArticles from "./Components/NoArcticles";
import LoaderSpinner from "./Components/LoaderSpinner";

export const APIKey = "1af9413564284f8bacb7eb94c4a392c8";

function App() {
    let [news, setNews] = useState([]);
    let [title, setTitle] = useState('');
    let [page, setPage] = useState('2');
    let [source, setSource] = useState('');
    const [isTopNews, setIsTopNews] = useState(true);
    const [isFetching, setIsFetching] = useState(false);

    function retrieveNews() {
        let newsUrl = `https://newsapi.org/v2/everything?q=${title}&apiKey=${APIKey}&pageSize=5&page=1&sources=${source}`;
        fetch(newsUrl).then((res) => {
            return res.json();
        }).then((data) => {
            setNews(data.articles);
            setIsTopNews(false);
            window.scrollTo(0, 0);
        })
    }

    function loadMore() {
        if (page < 9) {
            let newsUrl = isTopNews
                ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKey}&pageSize=5&page=${page}`
                : `https://newsapi.org/v2/everything?q=${title}&apiKey=${APIKey}&pageSize=5&page=${page}&sources=${source}`;
            fetch(newsUrl).then((res) => {
                return res.json();
            }).then((data) => {
                let arrayNews = news;
                data.articles.forEach(item => arrayNews.push(item));
                setNews(arrayNews);
                setPage(Number(page) + 1);
            })
        }
        return 0;
    }

    async function retrieveTopNews() {
        let newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKey}&pageSize=5`;

        setIsFetching(true);
        const data = await fetch(newsUrl).then((res) => res.json())
        setNews(data.articles);
        setIsFetching(false);
        setIsTopNews(true);
    }

    useEffect(() => {
            (
                async () => {
                    setIsFetching(true);
                    await retrieveTopNews();
                    setIsFetching(false);
                }
            )();
        }, []
    );


    return <div className="wrapper">
        <Filter setTitle={setTitle} title={title} retrieveNews={retrieveNews} loadMore={loadMore} setSource={setSource}
                setIsTopNews={setIsTopNews}/>
        <div>
            {news.length ? news.map(card => (
                <Card card={card}/>
            )) : (isFetching ? <LoaderSpinner/> : <NoArticles/>)}
        </div>
    </div>
}

export default App;




