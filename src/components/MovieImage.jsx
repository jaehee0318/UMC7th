import React from 'react';

export const MovieImage= ({src, alt, className}) => {
    return <img src={src} alt={alt} className = {className}/>;
}

export default MovieImage;