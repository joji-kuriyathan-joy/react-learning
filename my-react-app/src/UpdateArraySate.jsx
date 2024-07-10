
import React, { useState } from "react";
function UpdateArraySate() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';
        setFoods(f => [...f, newFood]);

    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, idx) => idx !== index));
    }
    return (<div className="food-container">
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food, index) =>
                <li key={index} >{food} 
                <button className="remove-food" key={index} onClick={()=> handleRemoveFood(index)}>X</button>
                </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button className="add-food" onClick={handleAddFood}>Add Food</button>

    </div>);
}

export default UpdateArraySate;