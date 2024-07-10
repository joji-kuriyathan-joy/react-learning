function ButtonClick(){

    // Below code explains how a click event can be done in react and 
    // output can be found in the console of the browser.

    // ***When using an function with parameter use a arrow function or function expression 

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count <3) {
    //         count ++;
    //         console.log(`${name} you clicked me ${count} times!!`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // }
    // return(<button onClick={()=>handleClick('BroCode')}>Click Me</button>)

    //EVENT CLICK FUNCITIONS EXAMPLE

    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(<button onDoubleClick={(e)=>handleClick(e)}>Click Me</button>)
}

export default ButtonClick