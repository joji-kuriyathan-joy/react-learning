//onChange = event handle used primarily for Form Elements
//           ex; <input>, <select>, <textarea>, <radio>
//           Trrigers every time the value of the input changes.

import React, { useState } from 'react'

function MyComponentOnChange() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuanity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuanity(event.target.value);
    }
    return (<div>
        <input value={name} onChange={handleNameChange}></input>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type='number'></input>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructioins'></textarea>
        <p>Comment: {comment}</p>


        <select value={payment} onChange={handlePaymentChange}>

            <option value="">Select an options</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="GiftCard">GiftCard</option>

        </select>

        <p>Payment: {payment}</p>

        <label>
            <input type='radio' value='Pick Up'
                checked={shipping === "Pick Up"}
                onChange={handleShippingChange}>

            </input>
            Pick Up</label>
        <br></br>
        <label>
            <input type='radio' value='Delivery'
                checked={shipping === "Delivery"}
                onChange={handleShippingChange}>

            </input>
            Delivery</label>

        <p>Shipping: {shipping}</p>


    </div>)
}

export default MyComponentOnChange