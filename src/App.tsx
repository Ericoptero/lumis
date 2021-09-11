import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./config/globalStyle";

import { Contact } from "./pages/Contact";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
