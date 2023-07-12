import React from "react";
import { useState, useEffect, useRef } from "react";
const Login = () => {   
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        useRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    return(
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h2>Sign in your account</h2>
            <form>
                <div className="form-row">
                     <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        ref={useRef} 
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Email</label>
                    <input 
                        type="password" 
                        id="password" 
                        ref={useRef} 
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        />
                </div>
            </form>
        </section>
    )
} 
export default Login;
