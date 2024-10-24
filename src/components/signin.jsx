import { useState } from "react";

function Signup({ onChange, data, onSubmit }) {
  const [showPass, setShowPass] = useState(true);

  const toggleShowPass = () => {
    setShowPass((showPass) => !showPass);
  };

  return (
    <form className="flex flex-col gap-4">


      <div>
        <input
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={data.email}
          onChange={onChange}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center border border-gray-300 rounded-md w-full">
          <input
            className="p-2 flex-grow outline-none rounded-md"
            type={showPass ? "password" : "text"}
            placeholder="Password"
            id="password"
            name="password"
            value={data.password}
            onChange={onChange}
          />
          <span
            className={` p-2 cursor-pointer text-gray-500 ${
              showPass ? "text-gray-500" : "text-blue-700"
            } `}
            onClick={toggleShowPass}
          >
            {showPass ? (
              <i className="ri-eye-off-line"></i>
            ) : (
              <i className="ri-eye-line"></i>
            )}
          </span>
        </div>
        <div className="flex justify-center">
          <h3 className="text-blue-400 cursor-pointer hover:text-blue-500 transition duration-200">
            forget password?
          </h3>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onSubmit}
          type="submit"
          className="w-full bg-blue-500 text-white  rounded-lg hover:bg-blue-500 transition duration-200 px-7 py-3"
        >
          Log in
        </button>
      </div>

    </form>
  );
}
export default Signup;
