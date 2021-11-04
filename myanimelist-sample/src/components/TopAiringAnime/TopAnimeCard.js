import React from 'react'
import './TopAnimeCard.css'
const TopAnimeCard = props => {
    const style = {
        width: 100,
        // hight: 40
    };
    return (
        <>
            <div class="flip-card ">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={props.image} alt="Avatar" style={style} />
                    </div>
                    <div class="flip-card-back center">
                        <p>{props.title}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopAnimeCard;