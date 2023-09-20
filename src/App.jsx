function App() {
  return (
    <div className="container">
      <div className="step-container">
        <div className="choice-container">
          <button className="step-btn">1</button>
          <div>
            <p className="step-number">STEP 1</p>
            <p className="step-title">YOUR INFO</p>
          </div>
        </div>
        <div className="choice-container">
          <button className="step-btn">2</button>
          <div>
            <p className="step-number">STEP 2</p>
            <p className="step-title">SELECT PLAN</p>
          </div>
        </div>
        <div className="choice-container">
          <button className="step-btn">3</button>
          <div>
            <p className="step-number">STEP 3</p>
            <p className="step-title">ADD-ONS</p>
          </div>
        </div>
        <div className="choice-container">
          <button className="step-btn">4</button>
          <div>
            <p className="step-number">STEP 4</p>
            <p className="step-title">SUMMARY</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
