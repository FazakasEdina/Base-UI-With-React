import React, {useState, useEffect, useCallback} from 'react'

const images = [
    {
        title: "A traditional vineyard",
        subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
        img: "carousel-images/place.jpg"
    },
    {
        title: "Wine tasting",
        subtitle: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
        img: "carousel-images/wine-taste.jpg"
    },
    {
        title: "More than 1,000 employees work in the vineyard",
        subtitle: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "carousel-images/grape.jpg"
    },
    {
        title: "Venue for events",
        subtitle: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        img: "carousel-images/weddings.jpg"
    }
]

export default function Carousel() {
    const [currImg, setCurrImg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(`This will be called every ${currImg}`);
            setCurrImg((prevCurrImg) => prevCurrImg < images.length - 1 ? prevCurrImg + 1 : 0);
        }, 5000);
      
        return () => clearInterval(interval);
      }, []);

    return (
        <div className='carousel'>
            <div 
                className='carousel-inner' 
                style={{backgroundImage:`url(${images[currImg].img})`}}
            >
                <div 
                    className='left-side-of-carousel'
                    onClick={() => {currImg > 0 ? setCurrImg(currImg - 1) : setCurrImg(images.length - 1);}}
                >
                    <img src='left-arrow.png' className='arrow-icons'></img>
                </div>
                <div className='center-carousel'>
                    <div className='information-box'>
                        <h1> {images[currImg].title}</h1>
                        <p>
                            {images[currImg].subtitle}
                        </p>
                    </div>
                </div>
                <div 
                    className='right-side-of-carousel'
                    onClick={() => {currImg < images.length - 1 ? setCurrImg(currImg + 1) : setCurrImg(0);}}
                >
                    <img src='right-arrow.png' className='arrow-icons'></img>
                </div>
            </div>
        </div>
    );
}