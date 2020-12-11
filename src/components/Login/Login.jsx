import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const submitHandler =(e)=>{
        e.preventDefault();
        //dispatch(login(email,password));
    }
    return (
        <div className="formContain">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2 className="title">Welcome</h2>
                    </li>
                  
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" /*onChange={(e)=>setEmail(e.target.value)}*/></input>

                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" /*onChange={(e)=> setPassword(e.target.value)}*/></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">
                                Login 
                        </button>
                    </li>
                    <li>
                       <Link to="/forgotPass/" className="forgot">Forgotten password?</Link> 
                    </li>
                    <li className="sign-up">
                        <p>
                            Don't have an account?
                            <Link to="" className="borders" >
                                Sign Up
                            </Link>
                        </p>
                        
                    </li>
                    <li className="facebook">
                        <p>
                            Login with 
                           <Link to="/"> <img className="img-fa" src="/images/fb.png" alt=""/></Link> 
                            <Link to="/"><img className="img-gg" src="/images/google.jpg" alt=""/></Link>
                        </p>
                        
                    </li>
                </ul>
             </form> 
            </div>
    );
};

export default Login;