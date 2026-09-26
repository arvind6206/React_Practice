import { useState} from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  

  function handleSubmit(e: any) {
    e.preventDefault()
    navigate("/dashboard")

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" 
      placeholder="Enter Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password"
       placeholder="Enter Your Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Login</button>
    </form>
  );
};

export default App;
