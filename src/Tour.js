import React, { useState } from 'react';

export default function Tour(props){
    const { image, id, name, info, price, removeTour } = props;
    const [readMore, setReadMore ] = useState(false);

    return (
        <article className="single-tour">
            <img src={image} className="img" alt={name}/>
            <span className="tour-price">{price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {readMore ? info : `${info.substring(0, 150)}...`}
                    <button className="info-btn" 
                    onClick={()=> setReadMore(!readMore)}>
                        {readMore ? "show less" : "read more"}
                    </button>
                </p>
                <button className="btn btn-block delete-btn"
                onClick={()=> removeTour(id)}
                >
                    not interested
                </button>
            </div>
        </article>
    )
}