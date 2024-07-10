
import React, { useState } from "react";
function ArrayObjectState() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModle, setCarModel] = useState('');

    function handleAddCar() {

        if ((carYear === null || carYear === '')) {
            handleErrorMsg('Enter the car Year');
        }
        else if ((carMake === null || carMake === '')) {
            handleErrorMsg('Enter the car make');
        }
        else if ((carModle === null || carModle === '')) {
            handleErrorMsg('Enter the car model');
        }
        else {

            const newCar = { year: carYear, make: carMake, model: carModle };
            setCars(c => [...c, newCar]);

            //reset the values
            setCarYear(new Date().getFullYear());
            setCarMake('');
            setCarModel('');
            document.getElementById('errorMsg').style.display = 'none';
        }

    }
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event) {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }
    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    function handleErrorMsg(msg) {
        document.getElementById('errorMsg').innerHTML = msg;
        document.getElementById('errorMsg').style.display = 'block';
    }
    return (<div>
        <h2>List of Car Objects</h2>
        <p id="errorMsg" style={{ display: "none", color:'red' }}></p>
        <ul>
            {cars.map((car, index) =>
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
        </ul>
        <input type="number" value={carYear}
            placeholder="enter the car year" onChange={handleYearChange}></input><br></br>
        <input type="text" value={carMake}
            placeholder="enter car make" onChange={handleMakeChange}></input><br></br>
        <input type="text" value={carModle}
            placeholder="enter car model" onChange={handleModelChange}></input><br></br>
        <button onClick={handleAddCar}>Add Car</button>


    </div>)
}

export default ArrayObjectState;