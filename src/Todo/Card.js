import React from 'react';
import Filter from "./Filter";

export default function Card({card}) {
    return (
        <div className="news-cards">
                <div className="rrr">
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
                        <a href={card.url} target="_blank">
                            <button className="read-more-btn btn">Read more</button>
                        </a>

                    </div>

                </div>
            <br/>
        </div>
    )
}

