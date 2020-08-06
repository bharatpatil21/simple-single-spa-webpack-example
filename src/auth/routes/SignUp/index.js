import React from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

class SignUp extends React.Component {
  render() {
    return (
      <div className="h-screen p-5 md:flex bg-green-300">
        <div className="w-3/4 float-right">
          <div className="text-2xl font-bold my-5">Welcome to E Learing</div>
          <div className="flex justify-between">
            <Input
              type="text"
              inputType="underline"
              placeholder="First name"
              width="w-56"
            />
            <Input
              type="text"
              inputType="underline"
              placeholder="Last name"
              width="w-56"
            />
          </div>
          <Input type="text" inputType="underline" placeholder="Enter email" />
          <div className="flex justify-between">
            <Input
              type="password"
              inputType="underline"
              placeholder="Password"
              width="w-56"
            />
            <Input
              type="password"
              inputType="underline"
              placeholder="Confirm Password"
              width="w-56"
            />
          </div>
          <div className="mt-5">
            <Button
              title="Signup"
              color="bg-primary"
              textColor="text-light"
              width="w-1/2"
            />
            <div className="my-1 text-gray-700">
              Already have an account?
              <Link to="/auth/login">
                <span className="cursor-pointer font-bold text-secondary pl-3">
                  Sign In
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
