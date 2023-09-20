import SidebarButton from "./components/SidebarButton";
import { steps } from "./utils/variables";

function App() {
  return (
    <div className="container">
      <div className="sidebar-container">
        {steps.map(({ step, title }) => (
          <SidebarButton key={step} step={step} title={title} />
        ))}
      </div>
      <div className="plan-container"></div>
    </div>
  );
}

export default App;
