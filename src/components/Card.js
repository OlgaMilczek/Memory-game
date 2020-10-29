import React from 'react';

const Card = (props) => {
    return (
        <div onClick={() => props.onClick(props.card.id)}  className ='card'>
            <img src={props.card.url} alt={props.card.name}/>
            <h3 className ='card-name'>{props.card.name}</h3>
        </div>
    );
};

export default Card;