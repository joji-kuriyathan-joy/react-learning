

//propTypes =  a mechanism to ensure the paassed values is of correct datatype 
//            if your are using props then its a best practice to use the propTypes
//            if the datatypes dose not match when passing from the component then we will
//            get a warning in the browser console if we inspect it. This dose not prevent the 
//            application from running but insted shows a warning.


//defaultProps = default values for props in case they are not passed from te parent component
//             eg : name: "Guest"


// How to create a propType!!!
// 1. Import tthe propType from the node modules 
//2. Below the functio type Component name dot propTypes
//    then for each propType assign the datatype for eg, name : propType.string
//    which repersent that this is a string value 


import PropTypes from 'prop-types';
function Student(props){

    return(
        <div className="student">
            
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent? "Yes":"No"}</p>
        </div>
    );

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}
Student.defaultProps = {
    name:'Guest',
    age: 0,
    isStudent: false,
}

export default Student