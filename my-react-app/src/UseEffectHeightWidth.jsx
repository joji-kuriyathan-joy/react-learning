
import React, {useEffect, useState} from "react";
function UseEffectHeightWidth(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize", handleResize);
        console.log("Event added");

        return () =>{
            window.removeEventListener("resize", handleResize);
            console.log("Event removed");
        }
    },[]);
    
    useEffect(() =>{
        document.title = `Size: ${width} x ${height}`;
    },[width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
    
        <p>Window Width : {width}</p>
        <p>Window Height : {height}</p>

    </>);
}

export default UseEffectHeightWidth;