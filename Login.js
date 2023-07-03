import Navbar1 from './navbar';
import React, { useState } from 'react';
import "./Login.css";



function Login() {
   
	const [uname,setUname] = useState("");

    
    const [pass,setPass] = useState("");
   

    const [email,setEmail] = useState("");
    const [psw, setPassword] = useState("");
	
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const handleSignUpClick = () => {
      setIsSignUpActive(true);
    };
	
	const handleForm = async(e) => {
		console.log(uname);
		e.preventDefault()
	var jsonData = {
		"uname": uname.toString(),
		"email": email.toString(),
		"password": pass.toString(),
		
		
	}
	fetch('http://localhost:8000/people', {  // Enter your IP address here

                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData) 
			})
		}
  
    const handleSignInClick = () => {
      setIsSignUpActive(false);
    };
    /*const submit = async(e) =>{
        e.preventDefault()
        let response = axios.get('http://localhost:8000/people' )
            let data = (await response).data
            console.log(data)

        if (email=="admin@admin.com" && psw == "admin") {
                history.push("/welcome")
            }
			

        //else if (data){
        //        sessionStorage.setItem("email", email);

          //  }



        else{
                alert("Incorrect email or password")
            }
            console.log(email);
            console.log(psw);
*/


    //}

    return ( 
       <body>
        
<div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
  <div className="RegisterLogin">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" placeholder="User Name" id="uname"  required
                        onChange={e => setUname(e.target.value)} />
			<input type="text" placeholder="First Name" id="fname"  required
                        onChange={e => setUname(e.target.value)} />
			<input type="text" placeholder="Last Name" id="lname"  required
                        onChange={e => setUname(e.target.value)} />
			<input type="email" placeholder="Email" id="email" required
                        onChange={e => setEmail(e.target.value)} />
			<input type="password" placeholder="Password" id="pass"  required
                        onChange={e => setPass(e.target.value)}/>
			 
			<input type="password" placeholder="Confirm Password" id="confirmpass"  required
                        onChange={e => setPass(e.target.value)}/>
			<input
                        type="date" placeholder="Birth Date" id="bdate"
                        required
                        
                         />
			 <select required>
                     <option value="1">Student</option>
                     <option value="2">Professor</option>
                    </select>
			<button onClick={handleForm}>Sign Up</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button  onClick={handleSignInClick} class="ghost" id="signIn" >Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Don't Have Account</h1>
				<p>Create your account and start journey with us</p>
				<button  onClick={handleSignUpClick} class="ghost" id="signUp" >Sign Up</button>
			</div>
		</div>
	</div>
	</div>
</div>

<footer>
	
</footer>
       </body>
     );
}

export default Login;