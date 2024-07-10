
// STYLE REACT COMPONENTS WITH CSS
//------------------------------------ 
// 1. EXTERNAL - Using the main.css file refering to the className of the element
// 2. MODULE - By creating a seperate folde and mmoving the component to it also css fiel with the name 
//              of the component.module.css 
// 3. INLINE - create a js object and to the style attribute use a set of curly brackets to insert a dynamic value
//             here its [styles object] that i declared. Inline css are more convenient and easy.
            // Note when using inline css all the values are string and comma separated

function Button (){

    const styles={
        backgroundColor: "rgb(118, 100, 238)",
        color:"white",
        padding: "10px 20px",
        borderRadius: "5px",
        border:"none",
        cursor: "pointer",
    }

    return(
        <button style={styles}>Click Me!</button>
    );
}

export default Button;