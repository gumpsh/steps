import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlesNext() {
    console.log("increment clicked");
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function handlePrevious() {
    console.log("decrement clicked");
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">{messages[step - 1]}</p>

          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handlesNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
