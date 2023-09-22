import { useState } from "react";
import { Step1, Step2, Step3, Step4 } from "./components";
import SidebarButton from "./components/SidebarButton";
import { steps } from "./utils/variables";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    plan: "Arcade",
    planDuration: "month",
    addOns: [
      {
        name: "Online service",
        description: "Access to multiplayer games",
        price: 1,
        isSelected: false,
      },
      {
        name: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: 2,
        isSelected: false,
      },
      {
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: 2,
        isSelected: false,
      },
    ],
  });

  const handleFormData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

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
        {activeStep === 1 && (
          <Step1
            handleClick={handleClick}
            handleFormData={handleFormData}
            {...formData}
          />
        )}
        {activeStep === 2 && (
          <Step2
            handleClick={handleClick}
            handleFormData={handleFormData}
            {...formData}
          />
        )}
        {activeStep === 3 && (
          <Step3
            handleClick={handleClick}
            handleFormData={handleFormData}
            {...formData}
          />
        )}
        {activeStep === 4 && (
          <Step4
            handleClick={handleClick}
            handleFormData={handleFormData}
            {...formData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
