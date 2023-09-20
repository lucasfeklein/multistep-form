const SidebarButton = ({ step, title }) => {
  return (
    <div className="choice-container">
      <button className="step-btn">{step}</button>
      <div>
        <p className="step-number">STEP {step}</p>
        <p className="step-title">{title}</p>
      </div>
    </div>
  );
};

export default SidebarButton;
