// 📌 App.js
import React, { useState } from "react";
import { auth } from "./firebase";
import { login, signup, logout } from "./auth/auth";
import ForexSignals from "./components/ForexSignals";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // 🔹 Track login state
  auth.onAuthStateChanged((currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      <h1>📢 Forex Signal App</h1>

      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <ForexSignals />
          <button onClick={logout}>🚪 Logout</button>
        </>
      ) : (
        <>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => signup(email, password)}>🔑 Signup</button>
          <button onClick={() => login(email, password)}>🔓 Login</button>
        </>
      )}
    </div>
  );
}

export default App;


