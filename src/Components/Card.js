import React from 'react';

export default function Card({card}) {
    return (
        <div className="news-cards">
            <div className="card">
                <div className="title">
                    <h3> {card.title} </h3>
                </div>

                <div className="img">
                    <img src={card.urlToImage} alt=""
                         width={580} height={300}/>
                </div>

                <div className="description">
                    <p>
                        {card.description}
                    </p>
                </div>
                <div className="rmb">
                    <a href={card.url} target="_blank" rel="noreferrer">
                        <button className="read-more-btn btn">Read more</button>
                    </a>
                </div>
            </div>
            <br/>
        </div>
    )
}

