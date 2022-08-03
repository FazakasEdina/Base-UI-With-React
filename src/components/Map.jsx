import React from 'react'


export default function Map() {
    /* i didn't want to generate a google api key so I put a picture with the specitic position about the map
    and link for the place */
    return (
        <div className='card-size'>
            <a href='https://goo.gl/maps/AwYZENfWof15WuvH9'>
                <img src="location-on-map.png" className='map'></img>
            </a>
            <div className='card-text'>
                <h1> Find us</h1>
                <p>
                    Location: ...
                </p>
                <p>
                    Email: ...
                </p>
                <p>
                    Phone: ...
                </p>
                <p>
                    Orar: ...

                </p>
            </div>
        </div>
    )
}
