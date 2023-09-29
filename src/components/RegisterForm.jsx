import React from "react";
import { useState } from "react";

export default function Register () {
  
 const [username, setUsername] = useState ("");
 const [password, setPassword] = useState("");




const handleSubmit = async (e) => {
  e.preventDefault();


  try {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: e.target.username.value,
          password: e.target.password.value
        }
      })
    });
    if (response.ok) {
      const result = await response.json();
      window.localStorage.setItem("token",result.data.token);
  } else {
    console.error('Registration failed');
  }
  

  } catch (err) {
    console.error(err);
  }
}

return (
<form onSubmit={handleSubmit}>
  <label>Username:</label>
    <input type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} required/>
  <div>
  <label>
  Password:
    <input type='text' name='password' value={password} onChange={e => setPassword(e.target.value)} required/>
  </label>
  </div>
  <button type="submit">Sign Up</button>
</form>
  )
}

