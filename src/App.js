import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/index" component={Index} />
      </div>
    </Router>
  );
}

export default App;
