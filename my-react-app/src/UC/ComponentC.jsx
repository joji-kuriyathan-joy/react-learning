import styles from './UC.module.css';
import ComponentD  from './ComponentD.jsx';
function ComponentC(){

    return(<div className={styles.box}>
        <h1>ComponentC</h1>
        <ComponentD/>
    </div>)
}

export default ComponentC;