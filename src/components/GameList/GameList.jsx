import React from 'react';
import GameCategoryRow from "../GameCategoryRow/GameCategoryRow";
import GameRow from "../GameRow/GameRow";

const GameList = ({ games, filterText, inWishListOnly }) => {
    const rows = [];
    let lastCategory = '';

    games.forEach((game) => {
        if (game.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (inWishListOnly && !game.inWishList) {
            return;
        }

        if(game.category !== lastCategory) {
            rows.push(
                <GameCategoryRow category={game.category} key={game.category} />
            );
        }

        rows.push(
            <GameRow game={game} key={game.name}/>
        );

        lastCategory = game.category;
    });

    return (
        <ul className='game-list'>
            { rows }
        </ul>
    );
};

export default GameList;