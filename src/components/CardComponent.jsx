import React from "react";
import './CardComponent.css';
const CardComponent = () =>{
    return(
        <div className="card">
            <div className="card-header">
                <span className="card-nusmber">1</span>
                <span className="card-title">Agenda/topic</span>
                <span className="card-id">SAAS-0000</span>
        </div>
        <div className="card-body">
            <p>Description of what is done here</p>
        </div>
        <p >Last Updated</p>
        <p>3/8/2020</p>
        </div>
    );
};
export default CardComponent