import "./App.css";
import { useRef } from "react";
import { auth } from "./firebase";

function App() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const registerUser = () => {
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then(() => alert("Created User"))
			.catch((err) => alert(err.message));
	};

	const loginUser = () => {
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then(() => alert("Logged in User"))
			.catch((err) => alert(err.message));
	};

	const logoutUser = () => {
		auth
			.signOut()
			.then(() => alert("Logged out User"))
			.catch((err) => alert(err.message));
	};

	return (
		<div className="app">
			<h1>Firebase Authentication using React</h1>
			<div className="app__wrapper">
				<input
					ref={emailRef}
					type="text"
					placeholder="Email"
					className="app__input"
				/>
				<input
					ref={passwordRef}
					type="password"
					placeholder="Password"
					className="app__input"
				/>
				<div className="app__buttons">
					<button id="register" onClick={registerUser}>
						<p>Register</p>
					</button>
					<button id="login" onClick={loginUser}>
						<p>Login</p>
					</button>
					<button id="logout" onClick={logoutUser}>
						<p>Logout</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
