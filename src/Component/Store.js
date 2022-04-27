import React from "react";
import Data from "Data";
import '../assets/Store.css'



export default function Store() {
    return (
        <div className="container">
           
        <div className="grid">
        <h1>Ell Ell Store</h1>
            <div className="layout">

                {Data.map((dt, index) => {
                    return (
                        <div key={index} className="layout_item">
                            <img 
                            className="layout_img"
                            src={dt.urlitem}
                            alt=""        
                            >
                            </img>
                            <p className="layout_title">{dt.Title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}