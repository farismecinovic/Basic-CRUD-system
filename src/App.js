import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
