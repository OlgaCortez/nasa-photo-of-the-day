import React from "react";
import "../components/PicCard.scss";
import"../img/nasa.png";

function PicCard(props) {
    console.log(props);
return(
    <div className="pic-card">
        <div className="stars">
        <div className="twinkling"></div>
        <div className="clouds"></div>
        </div>
        <h2>{props.title}</h2>
        <img alt="Nasa's daily" src={props.url} />
        <div className="date">{props.date}</div>
        <div className="typwriter">
        <p>{props.explanation}</p>
        </div>
    </div>
    );
}

export default PicCard;