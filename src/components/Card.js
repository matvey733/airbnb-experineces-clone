import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"

export default function Card(props) {
    console.log(props.id);

    let badge;
    if(props.openSpots === 0) badge = "SOLD OUT"
    else if(props.location === "Online") badge = "ONLINE"

    return (
        <div className="card">
            <div className="card-image-container">
                {badge && <div className="badge">{badge}</div>}
                <img src={process.env.PUBLIC_URL + "/media/" + props.coverImg}
                alt="card"
                className="card-image" />
            </div>

            <div className="rating">
                <FontAwesomeIcon icon={solid("star")}
                style={{color: "#FE395C"}}
                className="card-rating-icon"/>
                <span className="card-rating">{props.stats.rating.toFixed(1)}</span>
                <span className="card-review-count">({props.stats.reviewCount}) &bull; </span>
                <span className="card-country">{props.location}</span>
            </div>

            <div className="card-title">
                <h4>{props.title}</h4>
            </div>

            <div className="price">
                <span className="price-from">From ${props.price} </span>
                <span className="price-per-unit">/ person</span>
            </div>
        </div>
    )
};