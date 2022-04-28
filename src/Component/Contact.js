import React from "react";
import '../assets/Contact.css'
import { Datacontact } from "Data";

export default function Contact() {
    return (
        <div className="wap_contac">
            
                <div className="contact_layout">

                    {Datacontact.map((data, index) => {
                        return (
                            <div key={index} className="contact_item">
                                <img className="contact_img" alt="" src ={data.urlitem}></img>

                            </div>

                        )
                    })}


                </div>

            
        </div>
    )


}