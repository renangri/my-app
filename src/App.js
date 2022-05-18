// IMports
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componentes
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';

//las Views
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
	return (
		<Router>
			<div className="App">
				
				<Header />
					{/*  navbar */}
					<NavBar></NavBar>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/detail/:id" element={<ItemDetailContainer />} />
					</Routes>
				
			</div>
		</Router>
	);
}

export default App;
