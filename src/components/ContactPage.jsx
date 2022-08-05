import React from 'react';
import Map from "./Map";

export default function ContactPage() {
    return (
        <>
        <h1 className='title'> Contact us</h1>
            <div className="card-size">
                <form method='POST'>
                    <label htmlFor="name">
                        Full name:
                        <br />
                    <input id="name" type="text" name="name" placeholder="Your name"/>
                    </label>
                    <br />

                    <label htmlFor="email">
                        Email:
                        <br />
                    <input id="email" type="text" name="email" placeholder="example@gmail.com"/>
                    </label>
                    <br />
                    
                    <label htmlFor="sunject">
                        Subject:
                        <br />
                    <input id="subject" type="text" name="subject" placeholder="Subject"/>
                    </label>
                    <br />

                    <label htmlFor="description">
                        Description:
                        <br />
                    <textarea name="description" id="description" cols="30" rows="10" placeholder="Description..."/>
                    </label>
                    <br />

                    <input type="button" value="Submit" className='button'/>
                </form>
                <img src="contact-us.jpg" className='card-image-right '></img>
            </div>
            <br />
            <Map />
        </>
    );
}