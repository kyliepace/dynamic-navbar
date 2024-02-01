import React from "react";

// Import the Home page component
import Home from "./pages/home.jsx";
import Nav from "./components/nav.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

export default function App() {
  // user_type specific to selected agency
  const user = {
    user_type: {
      id: 1,
      name: "Administrator",
    },
  };
  return (
    <>
      <Nav user={user} />
      <Home />
    </>
  );
}
