import Card from "./components/Card";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Cards() {
  return (
    <div className="cards">
      <Card />
    </div>
  );
}

root.render(<Cards />);
