import React from "react";
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

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h2>Sign in your account</h2>
            <form onSubmit={handleSubmit}>
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
                <button>Sign In</button>
            </form>
            <p>Need an account ? <br/>
                <span className="line">
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
                )}
                </>
    )
} 
export default Login
