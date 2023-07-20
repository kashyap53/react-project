import React from "react";
import logo from './logo.png';
import { useState, useEffect, useRef } from "react";

const Login = () => {   
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSucess(true);
    }
    console.log(logo);
    return(
            <>
                {success ?(
                    <section>
                        <h1>You are logged in!</h1>
                        <br/>
                        <p>
                            <a href="#">Go to Home</a>
                        </p>
                    </section>
                ) : (

        <section class="login-form">
            <div className="auth-form">
                <div class="text-center mb-3">
                    <img src={logo} width={150} />
                    <h4 class="text-center mb-4">Sign in your account</h4>
                    <form action="index.html">
                            <div className="form-row">
                            
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                id="email" 
                                ref={userRef} 
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                         </div>
                         <div className="form-row">
                          <label htmlFor="password">Password</label>
                          <input 
                            type="password" 
                            id="password" 
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            />
                        </div>
                        <button>Sign me In</button>
                        <p>Don't have an account? <a href="#">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
                )}
                </>
    )
} 
export default Login
