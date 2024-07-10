
import styles from './Button.module.css'



// STYLE REACT COMPONENTS WITH CSS
//------------------------------------ 
// 1. EXTERNAL - Using the main.css file refering to the className of the element
// 2. MODULE - By creating a seperate folde and mmoving the component to it also css fiel with the name 
//              of the component.module.css 
// 3. INLINE

function Button (){
    return(
        <button className={styles.button}>Click Me!</button>
    );
}

export default Button;