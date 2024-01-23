import React from "react";
import SignupCSS from "./styles/signup.module.css";
import { Link } from "react-router-dom";
const Index = () => {
    return (
      <section className={SignupCSS.index}>
        <div className={SignupCSS.Formbox}>
            <div className={SignupCSS.formbox}>
                <form action="/">
                    <div className={SignupCSS.inputbox}>
                        <input type="text" required/>
                        <label>Name</label>
                    </div>
                    <div className={SignupCSS.inputbox}>
                        <input type="text" required/>
                        <label>Email</label>
                    </div>
                <p>Already have an account <Link to="/login">Login</Link> </p>
                <button className={SignupCSS.enter}>ENTER</button>
                </form>
            </div>
        </div>
      </section>
    );
  }

export default Index;