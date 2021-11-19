import React from 'react'
import  './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { ExpandMore, Language, Search } from '@material-ui/icons';
import { Expand } from '@mui/icons-material';
import { Avatar } from '@mui/material';


function Header() {
    return (
        <div className = "header">
            <img
            className = "header_icon"
            src= "/img/logo.png"
            alt= ""
            /> 

            <div className= "header_center">
                <input type= 'text'/>
                <Search/>
                
            </div>

            <div className = "header_right">
                <p>Become a landlord</p>
                <Language/>
                <ExpandMore/>
                <Avatar/>

            </div>
        </div>


    )
}

export default Header
