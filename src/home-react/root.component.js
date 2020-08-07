import React from "react";

class Home extends React.Component {
  render() {
    const handleLogClick = () => {
      singleSpaNavigate("/home");
    };
    const handleLogin = () => {
      singleSpaNavigate("/auth/login");
    };
    const handleSignUp = () => {
      singleSpaNavigate("/auth/signup");
    };
    return (
      <div className="flex h-screen flex-col">
        <div className="flex justify-between items-center p-3 top-0 left-0">
          <div className="flex w-full">
            <img src="images/logo.gif" className="w-56 flex-row" onClick={handleLogClick}/>
          </div>
          <div className="flex flex-row items-center mx-3">
            <span
              onClick={handleLogin}
              className="font-bold cursor-pointer mx-2 px-2 py-1 text-sm rounded border border-gray-300 hover:shadow-sm hover:border-transparent">
              Login
            </span>
            <span
              onClick={handleSignUp}
              className="font-bold cursor-pointer mx-2 px-2 py-1 text-sm rounded border border-gray-300 hover:shadow-sm hover:border-transparent">
              Singup
            </span>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <img src="images/bg-homepage.jpg" className="w-full" />
        </div>
      </div>
    );
  }
}

export default Home;
