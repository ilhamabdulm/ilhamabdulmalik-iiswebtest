import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "./redux/store";
import Main from "./pages/Main";

function App() {
  return (
    <Provider store={store}>
      <main className="layout">
        <Main />
      </main>
    </Provider>
  );
}

export default App;
