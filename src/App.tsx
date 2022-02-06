import React from "react";
import Main from "./components/Main";
import { GlobalContextProvider } from "./context/GlobalContext";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <MainLayout>
          <Main />
        </MainLayout>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
