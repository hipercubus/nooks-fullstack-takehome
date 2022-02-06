import React from "react";
import Main from "./components/Main";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Main />
      </MainLayout>
    </div>
  );
}

export default App;
