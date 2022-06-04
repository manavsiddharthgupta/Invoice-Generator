import React from "react";
import "./App.css";
import Form from "./components/Form";
import { AuthContextProvider } from "./stores/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Form />
    </AuthContextProvider>
  );
}
export default App;
