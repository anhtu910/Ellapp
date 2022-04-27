import React from "react";
import '../assets/Header.css'
import logo from '../assets/img/logo.png'
import { NavLink } from "react-router-dom";


export default function Header() {
    return (


        <div className="header">
            <div className="container">
                <div className="header-main">
                    <div className="nav-main">
                    <img className="header-logo" alt="" src={logo}></img>
                    <NavLink
                        exac="true"
                        to=""
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? 700 : '',
                            }
                        }}
                        >Home</NavLink>
                    </div>
                    <div className="nav-contact">
                        <p>Phone: +84 862 860 223</p>
                        <NavLink exac="true" to="Store">Store</NavLink>
                        <NavLink exac="true" to ="2">About</NavLink>
                        <NavLink exac="true" to="3">Conyact</NavLink>
              

                    </div>
                </div>
            </div>

        </div>


    )
}