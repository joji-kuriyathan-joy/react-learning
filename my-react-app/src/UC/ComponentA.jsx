// useContext() = React Hook that allows you to share values 
// between multiple levels of components without passing props
// through each level


//PROVIDE COMPONENT
//1. Import {createContext} from 'react'
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={value}>
//      <child/>
//    </MyContext.Provider>


//CONSUMER COMONETS
//1. import React,{useContext} from 'react';
//   import { MyContext } from './ComponentA'
//2.  const value = useContext(MyContext)



import styles from './UC.module.css';
import ComponentB from './ComponentB.jsx';
import React, { useState, createContext } from 'react';

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState('BroCode');

    return (<div className={styles.box}>
        <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        <UserContext.Provider value={user}>
            <ComponentB />
        </UserContext.Provider>

    </div>)
}

export default ComponentA;