import React from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

class Login extends React.Component {

  render() {
    return (
      <div className="h-screen p-5 md:flex md:justify-around md:items-center bg-green-300">
        <div className="flex flex-col">
          <div className="text-2xl font-bold my-5">Login</div>
          <Input type="text" placeholder="Enter email" />
          <Input type="password" placeholder="Password" />
          <div className="text-sm text-gray-600">
            <span className="cursor-pointer float-right text-sm">
              Forgot Password
            </span>
          </div>
          <Button title="Signin" color="bg-primary" textColor="text-light" />
          <div className="flex items-center mx-auto my-2 text-gray-600">
            <span>
              If dont have an account?{" "}
              <Link to="/auth/signup">
                <span
                  className="cursor-pointer text-sm font-bold"
                >
                  {" "}
                  Sing Up
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
