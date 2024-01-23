import React from "react";
import NavparCss from'./styles/navpar.module.css';
import { Link } from "react-router-dom";
function Navpar(){
    return(
        <section className={NavparCss.Home}>
            <div className={NavparCss.homepage}>
                <button><Link to="/" className={NavparCss.bu1}>HOME</Link></button>
                <button><Link to="/normal" className={NavparCss.bu1}>NORMAL</Link></button>
                <button><Link to="/haunted" className={NavparCss.bu1}>THRILLER</Link></button>
                <button><Link to="/suggest" className={NavparCss.bu1}>SUGGEST</Link></button>
                <button><Link to="/signup" className={NavparCss.bu1}>SIGNUP</Link></button>
                <button><Link to="/login" className={NavparCss.bu1}>LOGIN</Link></button>
            </div>
        </section> 
    );
}
export default Navpar;