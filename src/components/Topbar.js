import React from "react"
import {Grid} from '@material-ui/core'
// import styled from "@emotion/styled"
import logoText from "../assets/ensLogoText.svg"
import '../App.css'


export default function Topbar() {
	return (
		<div className = "topBar">
			<Grid container>
				<Grid item xs = {10} sm = {8} md = {7} lg = {6}>
					{/* <img src={logo} alt="ENS Logo" className="ens-logo" /> */}
					<img src={logoText} alt="ENS Logo text" className="ens-logo" />
				</Grid>
				<Grid item xs = {2} sm = {4} md = {5} lg = {6}>
					<button style = {{float:"right"}} className = "connect-button">CONNECT</button>
				</Grid>
			</Grid>
		</div>
	)
}
