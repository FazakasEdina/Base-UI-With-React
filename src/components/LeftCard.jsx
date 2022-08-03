import React from 'react'

export default function LeftCard(props) {
    const {title, description, img, link, linkButton} = props;

    return (
        <div className="card-size">
            <div className="card-text">
                <h2> {title}</h2>
                <p>
                    {description}
                </p>
                <a href={link}>
                    {linkButton}
                </a>
            </div>
            <div className="card-image-right" style={{backgroundImage: `url(${img})`}}>
            </div>
        </div>
    );
}