// I import the React library
import React from "react";
// In this line I imported the SignInForm component
import SignInForm from "./components/SignInForm";
// I import Tailwind CSS styles
import "./index.css";

// I have defined the main App component
function App() {
  return (
    // This is the wrapper div with Tailwind CSS classes
    <div className="App">
      {/* I render the SignInForm component */}
      <SignInForm />
    </div>
  );
}

// I exported the App component as the default export
export default App;
