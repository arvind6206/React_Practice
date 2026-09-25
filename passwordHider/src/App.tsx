import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handlePasswordChange(e: any) {
    setPassword(e.target.value);
  }

  function handleToggle() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div>
      <h1>Password Hider</h1>

      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter Password"
      />

      <br />
      <br />

      <button onClick={handleToggle}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default App;