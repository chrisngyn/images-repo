import React from 'react';

const Images = (props) => {
    const pictures = props.images.map((element) => {
        return <img key={element.id} src={element.urls.small} alt={element.description}></img>
    });

    return(
        <div className="image-list">
            {pictures}
        </div>
    );
}

export default Images;