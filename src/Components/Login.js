import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firbase'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    
  
    const handleSubmission = () => {
      if (!values.email || !values.password) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
          
          console.log("hello")
          navigate("/home");
        })
        .catch((err) => {
          
          setErrorMsg(err.message);
        });
    };
    

    return (
        <div className="bg-login flex items-center justify-center min-h-screen">
            
           
            <div className="w-full max-w-xl">
            <p></p>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                            Enter Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Enter Email" type="email" placeholder="Username" onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))} />
                        <p className="text-red-500 text-xs italic">{errorMsg}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmission}>
                            Sign In
                        </button>
                        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/forgot">
                            Forgot Password?
                        </Link>
                        
                    </div>
                    <div className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">create account 
                        <Link to="/signUp">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white ml-5 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
                            Sign Up
                        </button>
                        </Link></div>
                </form>
            </div> 
            </div>
            )
}
