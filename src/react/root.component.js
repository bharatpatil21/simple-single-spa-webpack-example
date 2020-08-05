
import React from "react";
class Login extends React.Component {
  render() {
    const handleSubmit = () => {
      singleSpaNavigate('/app1')
    };
    return (
      <div>
        <h1>Register</h1>
        <button onClick={handleSubmit} type="button">
          Login
        </button>
      </div>
    );
  }
}
export default Login;
