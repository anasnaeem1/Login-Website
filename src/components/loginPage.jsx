import SignUp from "./signup";
import SignIn from "./signin";
import { useState } from "react";

function loginPage({onSkip}) {
  const [isSignUp, setIsSignUp] = useState(true);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({  
      ...prevData,
      [name]: value 
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the data or perform any action with the form data
    console.log(data);
  };

  const toggleIsSignUp = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-blue-400">
      <div className="flex flex-col gap-3 justify-center items-center p-9 rounded-md bg-white shadow-lg">
        <h1 className="relative text-3xl font-semibold mb-6 before:content-[''] before:border-[2px] before:border-blue-400 before:absolute before:bottom-0 py-2 before:left-0 before:w-[60%] ">
          {isSignUp ? "Sign up" : "Log in"}
        </h1>

        <div className="p-2">
          {isSignUp ? (
            <>
              <SignUp
                onChange={handleChange}
                data={data}
                onSubmit={handleSubmit}
                isSignUp={isSignUp}
              />
            </>
          ) : (
            <>
              <SignIn onChange={handleChange} data={data} onSubmit={handleSubmit} />
            </>
          )}
        </div>

        <div className="flex justify-center gap-4 w-full">
          <p className="flex gap-2">
            {isSignUp ? "Already have an account?" : "Create account"}
            <span
              onClick={toggleIsSignUp}
              type="submit"
              className="text-blue-400 text font-normal cursor-pointer hover:text-blue-700 transition-colors duration-300"
            >
              {isSignUp ? "log in" : "Sign up"}
            </span>
          </p>
        </div>

        {!isSignUp && (
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="w-full flex flex-col gap-3 font-medium">

              <div className="flex items-center border border-gray-200 bg-white text-gray-600">
                <span className="px-2 text-2xl">
                  {" "}
                  <i className="flex items-start ri-google-line"></i>
                </span>
                <button className="flex justify-center px-2 w-full py-2">
                  Login with Google
                </button>
              </div>

              <div className="flex items-center border border-gray-200 bg-blue-500 text-white">
                <span className="px-2 text-2xl">
                  {" "}
                  <i className="flex items-start ri-facebook-circle-fill"></i>
                </span>
                <button className="flex justify-center px-2 w-full py-2">
                Login with Facebook
                </button>
              </div>

            </div>
          </div>
        )}
        <div>
            <h1 onClick={onSkip} className="cursor-pointer hover:text-blue-400 transition duration-300">Skip</h1>
        </div>
      </div>
    </div>
  );
}
export default loginPage;
