import React from "react"
import {Grid} from '@material-ui/core'

import logo from "../assets/homeLogo.svg"
import search from '../assets/search.png'

import '../App.css'

export default function Home() {
    return(
        <div className = "home">
            <div>
                <img src={logo} alt="ENS Logo" className="homeLogo" />
            </div>
            <h1 style = {{marginTop:"-30px"}}><span style = {{fontSize:"100px", color:"#008ae6"}}>F</span>ANTOM DNS</h1>
            <div className = "dns-text">Now available for claiming</div>
            <div className = "" style = {{marginTop:"30px"}}>
                <input 
                    type = "text"
                    placeholder = "Search Names or Addresses..."
                    className = "searchbar"
                />
                <img src={search} alt="icon" className="seach-icon" />
            </div>
        </div>
    )
}