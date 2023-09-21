import { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "./components";
import SidebarButton from "./components/SidebarButton";
import { steps } from "./utils/variables";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  const handleClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="container">
      <div className="sidebar-container">
        {steps.map(({ step, title }) => (
          <SidebarButton
            key={step}
            step={step}
            title={title}
            isActive={activeStep === step}
            handleClick={() => handleClick(step)}
          />
        ))}
      </div>
      <div className="plan-container">
        {activeStep === 1 && <Step1 handleClick={handleClick} />}
        {activeStep === 2 && <Step2 handleClick={handleClick} />}
        {activeStep === 3 && <Step3 handleClick={handleClick} />}
        {activeStep === 4 && <Step4 handleClick={handleClick} />}
      </div>
    </div>
  );
}

export default App;
