import React,{useState, useEffect, useRef} from 'react'

function UseRefHook(){

    // let [number, setnumber] = useState(0);
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(()=>{
        console.log('componet renetere');
        console.log(inputRef);
    });

    function handleClick(){
        // setnumber(n =>n +1);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'Yellow';
        inputRef1.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = '';
    }
    function handleClick1(){
        // setnumber(n =>n +1);
        inputRef1.current.focus();
        inputRef.current.style.backgroundColor = '';
        inputRef1.current.style.backgroundColor = 'Yellow';
        inputRef2.current.style.backgroundColor = '';
    }
    function handleClick2(){
        // setnumber(n =>n +1);
        inputRef2.current.focus();
        inputRef.current.style.backgroundColor = '';
        inputRef2.current.style.backgroundColor = 'Yellow';
        inputRef1.current.style.backgroundColor = '';
    }

    return (<>
    <button onClick={handleClick}>Click Me</button><br/>
    <input ref={inputRef}/>
    <button onClick={handleClick1}>Click Me1</button><br/>
    <input ref={inputRef1}/>
    <button onClick={handleClick2}>Click Me2</button><br/>
    <input ref={inputRef2}/>
    </>);
}

export default UseRefHook;