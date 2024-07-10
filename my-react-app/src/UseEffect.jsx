// useEffect() = React Hook that tells React to DO THIS CODE WHEN (Pick One)

//            This component re-renderes
//            This component mounts
//            The state of the value changes



// useEffect(function, [dependencies])
// used to run a side code when the component changes 


//1. useEffect(() => {}) // Runs after every re-render
//2. useEffect(() => {}, [])   Runs only on mount
//3. useEffect(() => {}, [value]) Runs on mount + when the value changes

//USES
//1. Event Listeners
//2. DOM Manupilation
//3. Subscription (real time updates)
//4. Fetching data from an API
//5. Clean uo when the component unmounts

import React, {useState, useEffect} from 'react';


function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    useEffect(()=> {
        document.title = `count: ${count} and ${color}`;
    },[count, color]);


    function addCount(){
        setCount(c=>c+1);
    }
    function subtarctCount(){
        setCount(c=>c-1);
    }
    function changeColor(){
        setColor(c=> c=== "green" ? "red" : "green");
    }
    return (<>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtarctCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
    </>)
}

export default UseEffect;