import React, {useState, useEffect} from 'react';
import {APIKey} from "../App";

export default function Filter({retrieveNews, setTitle, setSource, loadMore, title, setIsTopNews}) {

    let [sources, setSources] = useState([]);

    function retrieveSources(){
        let sourcesURL = `https://newsapi.org/v2/sources?apiKey=${APIKey}&language=en`;

        fetch(sourcesURL).then((res) => {
            return res.json();
        }).then((data) => {
            setSources(data.sources)
           // setIsTopNews(false);
        });
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && title.trim()) {
                retrieveNews();
        }
    }

    useEffect(() => {
        retrieveSources()
    },[]
        );

    return (
        <div className="search-form">
            <div className="label-input label">
                <label htmlFor="input">Keyword*</label>
            </div>

            <div className="input">
                <input type="text" className="input" onKeyDown={handleKeyDown} onChange={event => setTitle(event.target.value)}/>
            </div>

            <div className="label-sources">
                <label htmlFor="sources">Source</label>
            </div>

            <div className="menu">
                <select name="sources" className="sources" onChange={event => setSource(event.target.value)}>
                    <option value="" className="all-option">All</option>
                    {sources.map((item) => (
                        <option value={item.id} > {item.name} </option>
                    ))}
                </select>
            </div>

            <div className="search">
                <button className="search-btn btn" onClick={retrieveNews} disabled={!title || !title.trim()}>
                    Search
                </button>
            </div>

            <div className="load">
                <button className="load-more-btn btn" onClick={loadMore}> Load more</button>
            </div>

        </div>

    )
}