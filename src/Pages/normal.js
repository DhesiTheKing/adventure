import React from "react";
import NormalCss from "./styles/normal.module.css";
import kolukkumalai from "./styles/vid/normal_place_1.jpg";
import Ooty from "./styles/vid/normal_place_2.jpg";
import Hogenakkal from "./styles/vid/normal_place_3.jpg";
import Rameshwaram from "./styles/vid/normal_place_4.jpg";
import Navpar from "./navpar";
const Normal = () => {
    return (
        <>
        <Navpar/>
    <section className={NormalCss.normal}>
        <div className={NormalCss.bctitle}>
            <h1>EXPLORE</h1>
        </div>
        <div className={NormalCss.search}>
            <form>
            <input type="text" autoFocus required ></input>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
            </form>
        </div>
        <div className={NormalCss.place1}>
            <img src={kolukkumalai} alt="KOLUKKUMALAI"/>
            <h1>KOLUKKUMALAI</h1>
            <p>
                The highest tea plantation in the world is located near Munnar in Tamil Nadu called Kokkumalai hamlet in Theni district. 
                If your heart desires to escape to the exhilarating views of distant hills and misty hills, then Kolukkumalai is a perfect weekend getaway.
                It is situated at a height of 7,130 feet above the sea level and effortlessly captures a place in your heart with the most beautiful views of nature.</p> 
            <p>
                Started in the early 1900s, the Kokkumalai Tea Estate is 35 km from Munnar.
                The tea here is brewed using traditional methods at the factory and is known for its freshness and desirable flavors.
            </p>
            <p>
                The panoramic view from Kolukkumalai should be enjoyed especially during sunrise and sunset.
                Adventure seekers can also try trekking and camping in Kolukkumalai.
            </p>
        </div>
        <div className={NormalCss.place2}>
            <img src={Ooty} alt="MOUNTAIN"/>
            <h1>OOTY</h1>
            <p>
                Ooty is situated at an altitude of 2286 m i.e. 7500 feet above sea level.
                Ooty is the capital of the Nilgiris district and a hub for tourism.
                The region of Ooty is located at the confluence of the Eastern Ghats and the Western Ghats.
                Nilgiris is India's first biosphere. The Nilgiris are one of the most important of the 14 hotspots in the world.
            </p>
            <p>
                There are many places to visit in Ooty and many tourist places are near Ooty.
                This will make you a memorable trip on a budget.
                Ooty is a perfect destination for all people who love trekking and hiking.
            </p>
            <p>
                Ooty is one of the many places in India where adventure junkies can experience the thrill of rafting.
                An extraordinary rafting experience at Avalanche Lake is what you need to do when you visit Ooty.
                 With beautiful lakes all around the mountains and hilly terrain full of sharp bends and curves, you must try rafting.
            </p>
        </div>
        <div className={NormalCss.place3}>
            <img src={Hogenakkal} alt="MOUNTAIN"/>
            <h1>HOGENAKKAL</h1>
            <p>
                It is situated at a distance of about 47 KM from Dharmapuri and 16 KM from Pennagaram.
                Okanagan is 1500 feet above sea level.For those who love adventure, Hogenakkal Falls is a paradise. 
                The most popular activity is taking a coracle ride, which is a round boat made of bamboo and tanned buffalo hide.
                 The boatmen expertly manoeuvre the coracles through the rapids, giving you a thrilling experience as you navigate the swirling waters
            </p>
            <p>
                Okkenakkal Falls is one of the best waterfalls in Tamil Nadu.
                Okkenakal Falls is also known as the 'Niagara of India'.
                It is not a single waterfall but a collection of many waterfalls which is a sight to behold.
                Tourists are allowed to bathe from 8 am to 5 pm.
                Okkenakal Falls is also a tourist's paradise.
            </p>
            <p>
                If the idea of ​​relaxing in the middle of a roaring waterfall and listening to its soothing roar piques your interest,
                You must visit Okanagan.
            </p>
        </div>
        <div className={NormalCss.place4}>
            <img src={Rameshwaram} alt="MOUNTAIN"/>
            <h1>RAMESHWARAM</h1>
            <p>
                Rameswaram is located in the "Gulf of Mannar Biosphere Reserves" marine area and is relatively small in area.
                Midway between India and Sri Lanka its clean sea air, less crowded temples & The holy ponds, this famous "island city" is a center of attraction for travelers from all over the world.
                One of the Char Dhams of India and a place of interest for Hindu devotees, Rameswaram is a place to add to your travel bucket list.
            </p>
            <p>
                Gracing the coast of India, the city of Rameswaram is not only a pilgrimage destination but also a hub for various adventure sports.
                Home to numerous beaches, the city of Rameswaram is an ideal place to indulge in water sports like kayaking, jet skiing, stand up board, windsurfing, snorkeling, etc.
                Coral Reef Observation, and Trampoline, Mini Wheel, Dora-Dora, Water Ball and many other floor games.
            </p>
            
        </div>
        <div className={NormalCss.about}>
            <h1>NOTE:</h1>
            <p>
                I don't know if the above mentioned information is 100 percent true.
                Attempting this is at your own discretion.
                Company will not be responsible for this.
            </p>
        </div>
 
    </section>
    </>
    );
};
 
export default Normal;