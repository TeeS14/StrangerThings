


export default function Register () {
  // const [register, setRegister] = useState ("");
    const register = async()=> {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: 'superman27',
            password: 'krypt0n0rbust'
          }
        })
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
    } else {
      console.error('Registration failed');
    }
    
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      // console.log(result)
    } catch (err) {
      console.error(err);
    }
  }



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
return(
<form onSubmit={handleSubmit}>
  <label>Username:</label>
    <input type='text' name='username' required/>
  
  <div>
  <label>
  Password:
    <input type='text' name='password' required/>
  </label>
  </div>
  <button type="submit">Sign Up</button>
</form>
  )
}

