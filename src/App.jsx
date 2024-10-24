import { useState } from "react";
import "./App.css";
import Login from "./components/loginPage";


function App() {
  const [loginPage, setloginPage] = useState(true);
  const handleLoginPage = () => {
      setloginPage((prevPage) => {
      (prevPage) => !prevPage
    })
  }


  return (
    <div>
      {
        loginPage &&
      <Login onSkip={handleLoginPage} loginPage={loginPage} />
      }

      <div>hello World</div>
    </div>

  );
}

export default App;
