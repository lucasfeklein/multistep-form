const SidebarButton = ({ step, title, isActive, handleClick }) => {
  const buttonStyle = {
    color: isActive ? "black" : "white",
    background: isActive ? "hsl(206, 94%, 87%)" : "none",
  };

  return (
    <div className="choice-container">
      <button className="step-btn" onClick={handleClick} style={buttonStyle}>
        {step}
      </button>
      <div>
        <p className="step-number">STEP {step}</p>
        <p className="step-title">{title}</p>
      </div>
    </div>
  );
};

export default SidebarButton;
