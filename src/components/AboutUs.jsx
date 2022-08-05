import React from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

export default function AboutUs() {
    return (
        <>
            <a id="about-us"></a>
            
            <LeftCard 
            title="About us"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            img="place.jpg"
            link="https://www.fortsilvan.ro/guesthouse"
            linkButton="Main inspiration"
            />

            <RightCard
            title="Traditions"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            img="tradition.jpg"
            link="http://winetraditions.com/home/"
            linkButton="Traditions"
            />

            <LeftCard 
            title="Eveniments room, hotel, restaurant at the same place"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            img="restaurant-terrace.jpg"
            link="https://unsplash.com/"
            linkButton="The source of photos"
            />
        </>
    );
}

