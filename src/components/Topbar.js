import React from "react"
import {Grid} from '@material-ui/core'
// import styled from "@emotion/styled"

import logoText from "../assets/ensLogoText.svg"
import soon from "../assets/soon.png"
import wait from '../assets/wait.gif'

import '../App.css'


export default function Topbar() {
	return (
		<div className = "topBar">
			<img src={soon} alt="coming soon" className="coming_soon" />
			<img src={wait} alt="coming soon" className="wait" />
			<Grid container>
				<Grid item xs = {10} sm = {8} md = {7} lg = {6}>
					{/* <img src={logo} alt="ENS Logo" className="ens-logo" /> */}
					<img src={logoText} alt="ENS Logo text" className="ens-logo" />
				</Grid>
				<Grid item xs = {2} sm = {4} md = {5} lg = {6}>
					<button style = {{float:"right"}} className = "connect-button" onClick = {() => alert("you need to install metamask")}>CONNECT</button>
				</Grid>
			</Grid>
		</div>
	)
}
