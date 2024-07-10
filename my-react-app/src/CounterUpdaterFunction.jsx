// updater function = a function passed as an argument to setState() usually
//               ex. setYear(arrow funciton)
//               Allow for safe updates based on the previuous state
//               Used with multiple state updates and asynchronously functions
//               Good practice to use updater functions



import react,{useState} from 'react'
function CounterUpdaterFunction(){


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c +1);
        setCount(c => c +1);
        setCount(c => c +1);

    }
    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
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
export default CounterUpdaterFunction