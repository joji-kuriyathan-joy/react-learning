

//Note that i have used "...c" here the dots is know as the spread operator
// this means that the object is updated without affecting the other key: value pairs and 
// the only the selected key: value is updated. 
// it is best to use an updater function to update the previous value

import React, { useState } from "react";
function UpdateObjState() {

    const [car, setCar] = useState({
        year: 2024, make: 'Ford', model: 'Mustang'
    });

    function handleYearChaneg(event) {
        setCar(c => ({ ...c, year: event.target.value }));
    }

    function handleMakeChaneg(event) {
        setCar(c => ({ ...c, make: event.target.value }));

    }

    function handleModelChaneg(event) {
        setCar(c => ({ ...c, model: event.target.value }));

    }
    return (<div>
        <p>Your Favouri care is :{car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChaneg}></input><br></br>
        <input type="text" value={car.make} onChange={handleMakeChaneg}></input><br></br>
        <input type='text' value={car.model} onChange={handleModelChaneg}></input><br></br>

    </div>);
}

export default UpdateObjState;