
import React from "react";
class Login extends React.Component {
  render() {
    const handleSubmit = () => {
      singleSpaNavigate('/app2')
    };
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={handleSubmit} type="button">
          Login
        </button>
      </div>
    );
  }
}
export default Login;
