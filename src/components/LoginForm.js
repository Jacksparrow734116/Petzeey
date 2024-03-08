import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function LoginForm(){
    return (
<div className="login-container">

    <img className="img-logo" src="https://s3-alpha-sig.figma.com/img/e9a4/ff26/6841dd471b57c7829b5e4a513fc507c4?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kc0H3MWy2F9DXfQacalMwaSGYUC6S6fHYRCzBZvfnrSFem1ga-MHGbLqbTuWRb4xQBvk7RfQtkWawzA5GDwzI6SaNFdB6JGOpF4mDZ857tiTr19fEQ9kw2grJ4fpgiqaxSTk6RnMa8f9kTZzH~-Vl-8a9xmuLbzrynOf30vCI0zh3e6LGZUuOLnWxH3yhMbyi4g839rKL9L-r1j59AC62fnCqUJW10NI9Me--cQMoDmlvWAvJso9~KO2Jc8ONF-SupN4uSkZewii0qWWX-OHG3HZR8RM-fh4VF8F13e~ucdAY0NMygm0-A9ElwWlfjIb~upoSMztlU0fcME5zPn8ew__"></img>
    <h2>Log in to your Account</h2>
    <p id="welcome">Welcome Back! Please enter your details</p><br></br>
<form >
<div className="form-group">
<label htmlFor="Email">Email</label><br></br>
<input type="email" name="email" id="email" placeholder="Enter Email"></input>
</div>
<div className="form-group"> 
<label htmlFor="Password">Password</label><br></br>
<input type="password" name="Password" id="Password" placeholder="Enter Password"></input>
</div>
<div className="form-rem">
    <div className="checkbox">
    <input type="checkbox" name="checkbox" id="checkbox"></input>
<label htmlFor="Remember Me">Remember for 30 days</label>
    </div>

<a href="#">Forgot password</a>
</div>
<div className="form-buttons">
    <Link to="/dashboard">
<button type="submit">Sign in</button>
</Link>
<button type="Sign In with Google">Sign in with Google</button>
</div>
<br></br>
<div className="form-warning">
<p>Don't have an account?</p><a href="#">Sign up</a>
</div>

</form>
</div>
    );
}
export default LoginForm