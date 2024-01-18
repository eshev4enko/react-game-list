import React from 'react';

const GameGallery = ({ images }) => {
    const gallery = images.map((image, index) =>
        <img src={ image } alt='preview' key={index} />
    );

    return (
        <div className='game-gallery'>
            { gallery }
        </div>
    );
};

export default GameGallery;