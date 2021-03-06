import React from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

class Signup extends React.Component {
  render() {
    return (
      <div className="flex h-screen flex-col">
        <div className="flex w-full p-3">
          <Link to="/home">
            <img src="images/logo.gif" className="w-56 flex-row" />
          </Link>
        </div>
        <div className="flex flex-col w-1/4 p-10">
          <div className="text-2xl font-bold my-5">Welcome to E Learing</div>
          <Input type="text" inputType="underline" placeholder="First name" />
          <Input type="text" inputType="underline" placeholder="Last name" />
          <Input type="text" inputType="underline" placeholder="Enter email" />
          <Input type="password" inputType="underline" placeholder="Password" />
          <Input
            type="password"
            inputType="underline"
            placeholder="Confirm Password"
          />
          <Button title="Sign Up" color="bg-primary" textColor="text-light" />
          <div className="flex items-center mx-auto my-2 text-gray-600">
            <span>
              If dont have an account?{" "}
              <Link to="/auth/login">
                <span className="cursor-pointer text-sm font-bold">
                  {" "}
                  Singin
                </span>
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          {/* <img src={img} className="w-64" /> */}
        </div>
      </div>
    );
  }
}

const img = require("../../../../images/singup.png");
export default Signup;
