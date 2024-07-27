import { useState } from "react";

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";


const INITIAL_INVESTMENT = {
  'initialInvestment': 10000,
  'annualInvestment': 6000,
  'duration': 10,
  'expectedReturn': 6,
};

function App() {

  const [userInput, setUserInput] = useState(INITIAL_INVESTMENT);

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <>
   <Header />
   <UserInput userInput={userInput} onInputChange={handleInputChange}/>
   <Results input={userInput}/>
   </>
  )
}

export default App
