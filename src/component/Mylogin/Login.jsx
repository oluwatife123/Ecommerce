// src/Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../firebase-config";
import {Link} from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			alert("Login successful!");
			setEmail("");
			setPassword("");
			navigate("/");
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className=" bg-[grey] w-[100%] h-[100vh]" id="login">
				<div className="w-[100%] pt-[50%]  sm:pt-[30%] lg:pt-[10%] p-4 flex justify-center ">
					{/* Main login div */}
					<div className="border border-gray-300 rounded bg-[white] opacity-70 shadow-2xl w-full lg:w-[30%] p-4">
						<h2 className="text-[red] text-center font-bold text-lg mb-2 mt-5">
							Login
						</h2>
						<div className="flex justify-center mb-5">
							<hr className="text-[blue] w-[15%] rounded h-[1vh] bg-[red] text-center" />
						</div>

						{error && <p className="text-red-500 mb-4">{error}</p>}
						<form onSubmit={handleLogin}>
							<div className="mb-4">
								<label className="font-semibold text-lg text-[red]">
									Email:
								</label>
								<input
									className="border border-gray-300 p-2 rounded w-full"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="mb-4">
								<label className="font-semibold text-lg text-[red]">
									Password:
								</label>
								<input
									className="border border-gray-300 p-2 rounded w-full"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							{/* my button */}
							<div className="flex justify-center place-items-center">
                <div>
                <div className="flex justify-center">
									<button
										type="submit"
										className="hover:text-[1.1rem] bg-red-500 text-white p-2 mb-4 mt-2 hover:bg-red-800 rounded"
										disabled={loading} // Disable button while loading
									>
										{loading ? "Logging in..." : "Login"}
									</button>
                  
								</div>

                <p className='mt-2'>
                        Create an account here 
                        <Link to='/register' className="text-lg text-blue-600 animate-bounce"> register</Link>
                        
                        
                  </p>
                </div>
								
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
