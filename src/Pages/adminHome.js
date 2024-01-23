import {React } from "react";
import adminHomeCSS from "./styles/adminHome.module.css";
import Popup from "reactjs-popup";
const AdminHome=() => {

    return(
   
        <section className={adminHomeCSS.adminPage}>
            <Popup trigger={<button className={adminHomeCSS.adminButton}>ADMIN</button>}>
                <div>
                    <button>SUGGESTIONS</button>
                </div>
            </Popup>
            <Popup trigger={<button className={adminHomeCSS.addPlaces}>ADD PLACES</button>}>
                <div className={adminHomeCSS.addBox}>
                    <form action="/" className={adminHomeCSS.formbox}>
                        <div className={adminHomeCSS.inputbox}>
                            <input type="text" required/>
                            <label>NAME</label>
                        </div>
                        <div className={adminHomeCSS.inputbox}>
                            <input type="text" required/>
                            <label>LOCATION</label>
                         </div>
                         <div className={adminHomeCSS.inputbox}>
                            <textarea rows="10" cols="100"></textarea>
                            <label>DESCRIPTION</label>
                         </div>
                        <button className={adminHomeCSS.enter}>ENTER</button>
                    </form>
                </div>
            </Popup>
            <Popup trigger={<button className={adminHomeCSS.updatePlaces}>UPDATE PLACES</button>}>
                <div className={adminHomeCSS.updateBox}>
                <form action="/" className={adminHomeCSS.formbox}>
                        <div className={adminHomeCSS.inputbox}>
                            <input type="text" required/>
                            <label>NAME</label>
                        </div>
                        <div className={adminHomeCSS.inputbox}>
                            <input type="text" required/>
                            <label>LOCATION</label>
                         </div>
                         <div className={adminHomeCSS.inputbox}>
                            <textarea rows="10" cols="100"></textarea>
                            <label>DESCRIPTION</label>
                         </div>
                        <button className={adminHomeCSS.enter}>ENTER</button>
                    </form>
                </div>
            </Popup>
            <Popup trigger={<button className={adminHomeCSS.deletePlaces}>DELETE PLACES</button>}>
                <div className={adminHomeCSS.deleteBox}>
                <form action="/" className={adminHomeCSS.formbox}>
                        <div className={adminHomeCSS.inputbox}>
                            <input type="text" required/>
                            <label>NAME</label>
                        </div>
                        <div className={adminHomeCSS.inputbox}>
                            <input type="text" required/>
                            <label>LOCATION</label>
                         </div>
                         <div className={adminHomeCSS.inputbox}>
                            <textarea rows="10" cols="100"></textarea>
                            <label>DESCRIPTION</label>
                         </div>
                        <button className={adminHomeCSS.enter}>ENTER</button>
                    </form>
                </div>
            </Popup>

        </section>

    );
}
export default AdminHome;