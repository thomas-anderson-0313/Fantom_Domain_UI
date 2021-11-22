import React from "react"
import {Grid} from '@material-ui/core'

import twitter from "../assets/twitter.svg"
import github from "../assets/github.svg"
import medium from "../assets/medium.svg"
import logo from "../assets/ensLogo.svg"
import telegram from "../assets/telegram.svg"

export default function Footer() {
	return (
		<div className = "footer">
			<Grid container>
				<Grid item xs = {2} sm = {2} md = {2} lg = {2}>
					<img src={logo} alt="ENS Logo" className="footer-logo" />
				</Grid>
				<Grid item xs = {1} sm = {1} md = {1} lg = {1}>
				</Grid>
				<Grid item xs = {6} sm = {6} md = {6} lg = {6}>
						<div className = "inline border-right">
							<a href = "https://twitter.com/" target = "_blank">
								<img src={twitter} alt="twitter" className="footer-twitter" />
								<span className = "social-links">Twitter</span>
							</a>
						</div>
						<div className = "inline border-right">
							<a href = "https://medium.com/" target = "_blank">
								<img src={medium} alt="medium" className="footer-medium" />
								<span className = "social-links" >Medium</span>
							</a>
						</div>
						<div className = "inline border-right">
							<a href = "https://github.com/" target = "_blank">
								<img src={github} alt="github" className="footer-github" />
								<span className = "social-links">Github</span>
							</a>
						</div>
						<div className = "inline">
							<a href = "https://telegram.com/" target = "_blank">
								<img src={telegram} alt="telegram" className="footer-telegram" />
								<span className = "social-links" >Telegram</span>
							</a>
						</div>
				</Grid>
				<Grid item xs = {1} sm = {1} md = {1} lg = {1}>
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
