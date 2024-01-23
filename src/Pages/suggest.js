import React from "react";
import Navpar from "./navpar";
import SuggestCss from "./styles/suggest.module.css"
const Reports = () => {
    return(
    <>
    <Navpar/>   
    <section className={SuggestCss.suggest}>
        <div className={SuggestCss.suggestData}>
            <form>
                <label>PLACE NAME</label>
                <input type="text" autoFocus required/><br/>
                <label>LOCATION</label>
                <input type="text" required/><br/>

                <p> <label>DESCRIPTION:</label></p>
                <textarea name="Description" required/><br/>
                <label for="TYPE">CATEGORY</label>
                <select id="TYPE" required>
                    <option value="NORMAL">NORMAL</option>
                    <option value="THRILLER">THRILLER</option>
                </select><br/>
                <label>SAMPLE PICTURES</label>
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" required/><br/>
                <button>SUBMIT</button>
            </form>
        </div>
    </section> 
    </>
    );
};
 
export default Reports;