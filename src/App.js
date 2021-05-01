import React, {useEffect, useState} from 'react';
import Card from "./Todo/Card";
import Filter from "./Todo/Filter";

export const APIKey = "7450cb70b6f5490a90332018f03688c6";

function App() {
  let [news, setNews] = useState([]);
  let [title, setTitle] = useState('');
  let [page, setPage] = useState('2');
  let [source, setSource] = useState('');

  function retrieveNews(e) {
    let newsUrl = `https://newsapi.org/v2/everything?q=${title}&apiKey=${APIKey}&pageSize=5&page=1&sources=${source}`;
    e.preventDefault();
    fetch(newsUrl).then((res) => {
      return res.json();
    }).then((data) => {
        setNews(data.articles);
    })

  }

  function loadMore() {
    if (page < 9){
    let newsUrl = `https://newsapi.org/v2/everything?q=${title}&apiKey=${APIKey}&pageSize=5&page=${page}&sources=${source}`;
    fetch(newsUrl).then((res) => {
      return res.json();
    }).then((data) => {
      let arrayNews = news;
      data.articles.forEach(item => arrayNews.push(item));
      setNews(arrayNews);
      setPage(Number(page) + 1);
    })}
    return 0;
  }

  function retrieveTopNews() {
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKey}&pageSize=5`;
   // e.preventDefault();
    fetch(newsUrl).then((res) => {
      return res.json();
    }).then((data) => {
      setNews(data.articles);
    })
  }
  useEffect(() => {
        retrieveTopNews()
      },[]
  );
console.log(news)
  return <div className = "wrapper">
    <Filter setTitle={setTitle} retrieveNews={retrieveNews} loadMore={loadMore} setSource={setSource}/>
    <div>
      {news.map(card => (
          <Card card={card}/>
      ))}
    </div>
  </div>
}

export default App;




