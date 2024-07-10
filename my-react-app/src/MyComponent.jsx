import React,{useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () =>{
        setName("Spill");
    }

    const incrementAge = () =>{
        setAge(age +1);
    }

    const toggleEmpployedStatus = () =>{
        setIsEmployed(!isEmployed);
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>increment Age</button>
        <p>Is Employed : {isEmployed ? "yes":"No" }</p>
        <button onClick={toggleEmpployedStatus}>Toggle Status</button>
    
    </div>)

}
export default MyComponent