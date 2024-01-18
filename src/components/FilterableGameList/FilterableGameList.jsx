import React, {useState} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import GameList from "../GameList/GameList";

const FilterableGameList = ({ games }) => {
    const [filterText, setFilterText] = useState('');
    const [inWishListOnly, setInWishListOnly] = useState(false);

    return (
        <div className='filterable-game-list'>
            <SearchBar
                filterText={filterText}
                inWishListOnly={inWishListOnly}
                setFilterText={setFilterText}
                setInWishListOnly={setInWishListOnly}
            />
            <GameList
                games={ games }
                filterText={filterText}
                inWishListOnly={inWishListOnly}
            />
        </div>
    );
};

export default FilterableGameList;