import React from 'react';

const SearchBar = ({ filterText, inWishListOnly, setFilterText, setInWishListOnly }) => {
    return (
        <form className='filter-form'>
            <input
                type="text"
                className='search-input'
                placeholder='Поиск по названию'
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />

            <label>
                <input
                    type="checkbox"
                    className='in-whish-list-checkbox'
                    value={inWishListOnly}
                    onChange={(e) => setInWishListOnly(e.target.checked)}
                />
                Только в списке желаемого
            </label>
        </form>
    );
};

export default SearchBar;