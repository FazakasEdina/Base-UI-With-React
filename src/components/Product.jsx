import React from 'react'

export default function Product(props) {
    return (
        <div className="product">
            <img src={props.img}></img>
            <h4> {props.title} </h4>
            <h5> {props.price} lei</h5>
        </div>
    );
}
