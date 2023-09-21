import { useState } from "react";
import SidebarButton from "./components/SidebarButton";
import { steps } from "./utils/variables";

function App() {
  const [activeStep, setActiveStep] = useState();

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
      <div className="plan-container"></div>
    </div>
  );
}

export default App;
