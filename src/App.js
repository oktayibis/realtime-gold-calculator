import React from "react";
import "./App.css";
import MainPage from "./pages/main.page";
import TotalProvider from "./context/total.provider";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Hello</p>
			</header>
			<main>
				<TotalProvider>
					<MainPage />
				</TotalProvider>
			</main>
		</div>
	);
}

export default App;
