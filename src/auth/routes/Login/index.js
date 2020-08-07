import React from "react";
import { Link, withRouter } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit() {
    this.props.history.push("/dashboard");
  }
  render() {
    return (
      <div className="flex h-screen flex-col">
        <div className="flex w-full p-3">
          <Link to="/home">
            <img src="images/logo.gif" className="w-56 flex-row" />
          </Link>
        </div>
        <div className="flex flex-col w-1/4 p-10">
          <div className="text-2xl font-bold my-5">Login</div>
          <Input type="text" inputType="underline" placeholder="Enter email" />
          <Input type="password" inputType="underline" placeholder="Password" />
          <div className="text-sm text-gray-600">
            <span className="cursor-pointer float-right text-sm">
              Forgot Password
            </span>
          </div>
          <Button
            title="Signin"
            color="bg-primary"
            textColor="text-light"
            handleClick={() => this.onSubmit()}
          />
          <div className="flex items-center mx-auto my-2 text-gray-600">
            <span>
              If dont have an account?{" "}
              <Link to="/auth/signup">
                <span className="cursor-pointer text-sm font-bold">
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
export default withRouter(Login);
