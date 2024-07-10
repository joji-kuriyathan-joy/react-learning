
import PropTypes from 'prop-types';
function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.userName}</h2>
    // }
    
    // return <h2>Please Login in to continue</h2>
    
    const welcomeMsg = <h2 className='welcome-msg'>
        Welcome {props.userName}
        </h2>
    const loginPromt = <h2 className='login-promt'>
        Please Login in to continue
        </h2> 

    return(props.isLoggedIn? welcomeMsg:loginPromt);
}

UserGreeting.propTypes={
    isLoggedIn:PropTypes.bool,
    userName: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName:"Guest"
}

export default UserGreeting