import React from "react";
import Dashboard from "./pages/dashboard";
import Logs from "./pages/logs";
import Header from "./components/Header";


const App = () => {

  return (
    <>
      <Header title="EcoTrack - Environment Impact Trackery" />

      <main style={{ padding: "1rem" }}>
        <Dashboard />
        <Logs />
      </main>
    </>
  );
};

export default App;
