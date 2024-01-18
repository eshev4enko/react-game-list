import React from 'react';
import GameGallery from "../GameGallery/GameGallery";

const GameRow = ({ game }) => {
    return (
        <li className='game-row'>
            <span className='game-name'>{ game.name }</span>
            { game.inWishList && <span className='game-in-whish-list'>В желаемом</span> }

            <GameGallery images={game.images}/>
            <span className='game-price'>{ game.price }</span>
        </li>
    );
};

export default GameRow;