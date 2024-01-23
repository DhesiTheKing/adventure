import React from "react";
import IndexCss from'./styles/index.module.css';
import Navpar from "./navpar";
function Home(){
    return(
        <>
       <Navpar/>
        <section className={IndexCss.Home}>
            <div className={IndexCss.title}>
                <h1>ADVENTURE</h1>
                <h1>ASPIRANTS</h1>
            </div> 
        </section> 
        </>
    );
}
export default Home;