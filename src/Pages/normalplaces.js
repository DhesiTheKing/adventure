import React from "react";
import NormalCss from "./styles/normal.module.css";
import { Link } from "react-router-dom";
const Normal = () => {
    return (
    <section className={NormalCss.Law}>
        <div className={NormalCss.homepage}>
            <Link to="/home" ><button className={NormalCss.Nav}>HOME</button></Link>
            <Link to="/nomal" ><button className={NormalCss.bu1}>NORMAL ADVENTURE</button></Link>
            <Link to="/haunted" ><button className={NormalCss.Nav}>HAUNTED ADVENTURE</button></Link>
            <Link to="/about" ><button className={NormalCss.Nav}>ABOUT</button></Link>
        </div> 
    </section>
    );
};
 
export default Normal;