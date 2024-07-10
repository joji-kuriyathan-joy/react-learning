import styles from './UC.module.css';
import ComponentC from './ComponentC.jsx';

import React,{useContext} from 'react';
import { UserContext } from './ComponentA';
function ComponentB(){

    const user = useContext(UserContext)
    return(<div className={styles.box}>
        <h1>ComponentB</h1>
        <h2>{`Hello again ${user}`}</h2>
        <ComponentC/>
    </div>)
}

export default ComponentB;