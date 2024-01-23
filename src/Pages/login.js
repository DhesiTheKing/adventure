import {React , useState} from "react";
import LoginCss from "./styles/login.module.css"

const Login=() => {
    let [id,setId]=useState("");
    let ad="admin"
    return(
        <section className={LoginCss.main}>
            <div className={LoginCss.page}>
                <form action={id===ad ? "/adminHome":"/"}>
                    <div className={LoginCss.AdvId}>
                        <input type="text" required onChange={(e)=>setId(e.target.value)}/>
                        <label>ADVENTURE ID</label>
                    </div>
                    <button>LOGIN</button>
                </form>
            </div>
        </section>
    );
}
export default Login;