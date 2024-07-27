
export default function UserInput({onInputChange, userInput}) {
 
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
                onInputChange("initialInvestment", event.target.value)
            }
          />

          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
                onInputChange("annualInvestment", event.target.value)
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
              handleInponInputChangeutChange("duration", event.target.value)
            }
          />

          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
                onInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}
