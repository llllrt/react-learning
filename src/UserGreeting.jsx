import PropTypes from 'prop-types';

function UserGreeting({isLoggedIn = false, username="Guest"}) {
    
    // if (props.isLoggedIn) {
    //     return <h2>Welcome back {props.username}!</h2>
    // }
    // return <h2>Please log in to continue</h2>

    const welcomeMessage = <h2 className="welcome-message">Welcome back {username}!</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>
    return(isLoggedIn ? welcomeMessage  :  loginPrompt  );
                               
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
export default UserGreeting;
