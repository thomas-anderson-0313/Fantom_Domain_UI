import React from 'react';
import Particles from "react-particles-js";

import Topbar from './components/Topbar';
import Home from './components/home'
import Footer from './components/Footer'

import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
		 {/* <Particles
				height="100%"
				width="100%"
				params={{
					// background:{
					//   color: "#0d0d0d",
					//   width: "100vh" 
					// },
					particles: {
						color: {
							value: "#333333"
						},
						line_linked: {
							color: {
								value: "#66c2ff"
							}
						},
						number: {
							value: 80
						},
						size: {
							value: 2
						}
					}
				}}
				style = {{
					position: "absolute"
				}}
		/> */}
			<div>
				<Topbar />
			</div>
			<div>
				<Home />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
