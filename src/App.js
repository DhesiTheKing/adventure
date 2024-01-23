import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Normal from "./Pages/normal";
import NormalPlaces from "./Pages/normalplaces";
import Suggest from "./Pages/suggest";
import Haunted from "./Pages/haunted";
import HantedPlaces from "./Pages/hauntedplaces";
import Signup from "./Pages/signup"
import Index from "./Pages/index";
import Login from "./Pages/login";
import AdminHome from "./Pages/adminHome";
 
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/adminHome" element={<AdminHome />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="/normal" element={<Normal />} />
                <Route path="/normalplaces" element={<NormalPlaces />} />
                <Route path="/suggest" element={<Suggest />} />
                <Route path="/haunted" element={<Haunted />} />
                <Route path="/hauntedplaces" element={<HantedPlaces />} />
            </Routes>
        </Router>
    );
}
 
export default App;