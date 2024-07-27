import { useState } from "react";
const INITIAL_INVESTMENT = {
  initial_investment: 10000,
  annual_investment: 6000,
  duration: 10,
  expected_return: 6,
};
export default function UserInput() {
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initial_investment}
            onChange={(event) =>
              handleInputChange("initial_investment", event.target.value)
            }
          />

          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annual_investment}
            onChange={(event) =>
              handleInputChange("annual_investment", event.target.value)
            }
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
          />

          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expected_duration}
            onChange={(event) =>
              handleInputChange("expected_return", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
