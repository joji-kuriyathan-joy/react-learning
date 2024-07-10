
//React hook = Special function that allows functional components to use
//            React features without writing class compinents
                // (useState, useEffect, useContext, useReducer and more...
//useState() =  A react hook that allows to creation of a stateful variable 
//             AND a setter function to update its value in the virtual |DOM
//             [name, serName]


import react,{useState} from 'react'
function Counter(){


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count +1);
    }
    const decrement = () => {
        setCount(count -1);
    }
    const reset = () => {
        setCount(0);
    }


    return(<div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement}>decrement</button>
        <button className='counter-button' onClick={reset}>reset</button>
        <button className='counter-button' onClick={increment}>increment</button>



    </div>)


}
export default Counter