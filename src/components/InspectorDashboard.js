import React, { useState } from "react";
import "../index.css";
export default function InspectorDashboard({ onBack }) {
    const [step, setStep] = useState("choice"); // choice, auth, risk, predict
    const [selectedAction, setSelectedAction] = useState(null);
    const [code, setCode] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);

    const handleAuth = () => {
        if (code.length === 6) {
            setStep(selectedAction);
        } else {
            alert("Please enter a 6-digit number");
        }
    };
    const resetFlow = () => {
        setStep("choice");
        setSelectedAction(null);
        setCode("");
        setShowAnswer(false);
    };

    return (
        <div className="dashboard">

           
            {step === "choice" && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h2>Inspector Options</h2>
                        <button
                            onClick={() => {
                                setSelectedAction("risk");
                                setStep("auth");
                            }}
                        >
                            Restaurant at Risk
                        </button>

                        <button
                            className="secondary"
                            onClick={() => {
                                setSelectedAction("predict");
                                setStep("auth");
                            }}
                        >
                            Predict
                        </button>
                        <button
                            className="secondary"
                            onClick={onBack}
                        >
                            Back
                        </button>
                    </div>
                </div>
            )}

            
            {step === "auth" && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <h2>Enter your Inspection id</h2>
                        <input
                            type="number"
                            placeholder="000000"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <button onClick={handleAuth}>Continue</button>
                    </div>
                </div>
            )}

            
            {step === "risk" && (
                <>
                    <h2>Inspector Dashboard</h2>
                    <div className="dashboard-grid">
                        <div className="panel">Inspector Trends (Line Chart)</div>
                        <div className="panel">Inspector Comparison (Bar Chart)</div>
                        <div className="panel">Inspector Distribution (Pie Chart)</div>
                        <div className="panel">Inspector Records (Table)</div>
                        {/* <button className="modal-box" onClick={resetFlow}>Back</button> */}
                    </div>
                </>
            )}

           
            {step === "predict" && (
                <div className="prediction-panel">
  <div className="prediction-header">
    <div>
      <h2>Pass or Closure?</h2>
      <p className="prediction-sub">
        Quickly estimate restaurant risk based on key factors.
      </p>
    </div>
    {/* <button className="ghost-btn" onClick={resetFlow}>
      Back
    </button> */}
  </div>

  <div className="prediction-grid">
    <div className="field">
      <label>Inspection Type</label>
      <select className="select-inspection"
  defaultValue="">
        <option value="" disabled >Select Inspection Type</option>
        <option>Routine Inspection</option>
        <option>Follow-up Inspection</option>
        <option>Complaint Inspection</option>
      </select>
    </div>

    <div className="field">
      <label>Voilation Count</label>
      <input placeholder="Enter a number" />
    </div>

    <div className="field">
      <label>Average Voilation</label>
      <input placeholder="Last three outcomes" />
    </div>

    <div className="field">
      <label>Last Inspection</label>
      <input placeholder="Number of days since the last inspection" />
    </div>
    <div className="field">
      <label>Trend</label>
      <input placeholder="-ve if growth is good else +ve" />
    </div>
  </div>

  <button
    className="primary-btn"
    onClick={() => setShowAnswer(true)}
  >
    Run prediction
  </button>

  {showAnswer && (
    <div className="answer">
      <h3>Prediction Result</h3>
      <p>Restaurant Risk: <span className="risk-low">LOW</span></p>
    </div>
  )}
</div>

            )}
        </div>
    );
}
