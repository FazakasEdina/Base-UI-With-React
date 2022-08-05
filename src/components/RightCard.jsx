import React from 'react'

export default function RightCard(props) {
    const {title, description, img, link, linkButton} = props;

    return (
        <div className="card-size">
            <div className="card-image-left" style={{backgroundImage: `url(${img})`}}>
            </div>
            <div className="card-text">
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <a href={link} className='button'>
                    {linkButton}
                </a>
            </div>
        </div>
    );
}