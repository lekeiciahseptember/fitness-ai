import React from "react";
// import Login from "./Login.css"
import loginImage from "../../assets/login.jpg"

function Login() {
    return (
        <div style={{ 
            display: 'flex',
            height: '100vh',
            width: '100%'
        }}>  
            <div style={{
                flex: '1',
                height: '100%',
                overflow: 'hidden'
            }}>
                <img 
                    src={loginImage} 
                    alt="Login"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <div style={{
                flex: '1',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <h1>Welcome Back!</h1>
                <p>Log in to continue where you left off.</p>
                <form onSubmit={(e) => e.preventDefault()}>  
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                            Email:
                        </label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="Email"
                            required 
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
                            Password:
                        </label>
                        <input 
                            id="password"
                            type="password" 
                            placeholder="Password"
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <a href="#" style={{ textDecoration: 'none', color: '#666' }}>
                            Forgot Password?
                        </a>
                    </div>
                    <button 
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: 'purple',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;