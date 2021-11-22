import React from "react"
import {Grid} from '@material-ui/core'

import logo from "../assets/homeLogo.svg"
import search from '../assets/search.png'
import warning from '../assets/warning.png'

import '../App.css'

export default function Home() {
    return(
        <div className = "home">
            <div>
                <img src={logo} alt="ENS Logo" className="homeLogo" />
            </div>
            {/* <h1 style = {{marginTop:"-30px"}}><span style = {{fontSize:"100px", color:"#008ae6"}}>F</span>ANTOM DNS</h1> */}
            <div className = "dns-text">
                <span><img src={warning} alt="warningIcon" className="warningIcon"/></span>
                 We will be COMING SOON
            </div>
            <div className = "search-section">
                <input 
                    type = "text"
                    placeholder = "Search Names or Addresses..."
                    className = "searchbar"
                    disabled
                />
                <img src={search} alt="icon" className="seach-icon" />
            </div>
        </div>
    )
}