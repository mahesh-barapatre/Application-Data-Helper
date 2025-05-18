import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import JobApplicationForm from "./forms/JobApplicationForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      this is a web used to simplify job application
      <JobApplicationForm />
    </>
  );
}

export default App;
