import React from "react"
import {Grid} from '@material-ui/core'

import twitter from "../assets/twitter.svg"
import github from "../assets/github.svg"
import medium from "../assets/medium.svg"
import logo from "../assets/ensLogo.svg"
import telegram from "../assets/telegram.webp"

export default function Footer() {
	return (
		<div className = "footer">
			<Grid container>
				<Grid item xs = {2} sm = {2} md = {2} lg = {2}>
					<img src={logo} alt="ENS Logo" className="footer-logo" />
				</Grid>
				<Grid item xs = {1} sm = {2} md = {2} lg = {2}>
				</Grid>
				<Grid item xs = {6} sm = {4} md = {4} lg = {4}>
						<div className = "inline">
							<a href = "https://twitter.com/">
								<img src={twitter} alt="twitter" className="footer-twitter" />
								<span style = {{fontSize:"25px", color:"white", marginLeft:"10px",}}>Twitter</span>
							</a>
						</div>
						<div className = "inline">
							<a href = "https://medium.com/">
								<img src={medium} alt="medium" className="footer-medium" />
								<span style = {{fontSize:"25px", color:"white", marginLeft:"10px",}}>Medium</span>
							</a>
						</div>
						<div className = "inline">
							<a href = "https://github.com/">
								<img src={github} alt="github" className="footer-github" />
								<span style = {{fontSize:"25px", color:"white", marginLeft:"10px",}}>Github</span>
							</a>
						</div>
						<div className = "inline">
							<a href = "https://telegram.com/">
								<img src={telegram} alt="telegram" className="footer-telegram" />
								<span style = {{fontSize:"25px", color:"white", marginLeft:"10px",}}>Telegram</span>
							</a>
						</div>
				</Grid>
				<Grid item xs = {1} sm = {2} md = {2} lg = {2}>
				</Grid>
				<Grid item xs = {2} sm = {2} md = {2} lg = {2}>
					<div>
						<a>press@ens.domains</a><br />
						<a>Bug Bounty</a>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}
