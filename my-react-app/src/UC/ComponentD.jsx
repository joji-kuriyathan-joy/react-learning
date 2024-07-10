import styles from './UC.module.css';
import React,{useContext} from 'react';
import { UserContext } from './ComponentA';

function ComponentD(){

    const user = useContext(UserContext);
    return(<div className={styles.box}>
        <h1>ComponentD</h1>
        <h2>{`Bye ${user}`}</h2>
    </div>)
}

export default ComponentD;