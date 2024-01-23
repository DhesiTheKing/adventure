import React from "react";
import HauntedCss from "./styles/haunted.module.css";
import haunted2 from "./styles/vid/haunted_place_2.jpg";
import haunted4 from "./styles/vid/haunted_place_4.jpg";
import haunted3 from "./styles/vid/haunted_place_3.jpg";
import haunted1 from "./styles/vid/haunted_place_1.jpg";
import Navpar from "./navpar";
const Haunted = () => {
    return(
        <>
        <Navpar/>
    <section className={HauntedCss.haunted}>
    <div className={HauntedCss.bctitle}>
            <h1>EXPERIENCE</h1>
        </div>
        <div className={HauntedCss.search}>
            <form>
            <input type="text" autoFocus required ></input>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
            </form>
        </div>
    <div className={HauntedCss.place1}>
            <img src={haunted1}  alt="Demonte Colony"/>
            <h1>DEMONTE COLONY</h1>
            <p>
                Right off St. Mary’s Road in Alwarpet, a bustling locale in Chennai, is a jilted colony with ramshackle houses and shady trees on either side.
                Legend has it that a wealthy Portuguese merchant experienced a demure death after his dismay over the untimely demise of his son and a cursed life with a mentally unstable wife.
            </p> 
            <p>
                His ghost is said to haunt the streets, and there have been incidents where people reportedly witnessed locked doors being opened and closed mysteriously.
                Pet dogs entering the colony have gone missing inexplicably, and the local night guard who was appointed by the colony residents also died.
            </p>
            <p>
                It is believed that he still resides in the same horror house in Chennai and practices his antics persistently.
                 A Tamil movie with the same name was based on the true events of this forlorn colony was released in 2015.
            </p>
        </div>
        <div className={HauntedCss.place2}>
            <img src={haunted2} alt="Fern Hill Hotel"/>
            <h1>OOTY FERN HILL HOTEL</h1>
            <p>
                The hotel was shut for a good time for being home to many paranormal activities, but not anyone knows that what happened in the past that make Fern Hill Hotel a haunting sight. 
                The only thing that people know is it being haunted and a girl committed suicide there. 
                The very first time it surfaced was back at the time when Bollywood movie starring Bipasha Basu “Raaz” was being shot there.
            </p>
            <p>
                One night when Saroj Khan with her troupe retired to the hotel at late night. 
                They couldn’t sleep the entire night as someone was shifting and arranging the furniture on the floor above to them. 
                The troupe got frustrated as they had an early morning shooting. They even tried reaching the receptionist, but the phone was dead. 
                Finally, someone went to the receptionist to complain and the receptionist showed them that there is no floor above theirs.
                This incident sent everyone in frenzy.
            </p>
            <p>
                One more bizarre incident took place with the team of Raaz. When the recording was done, the team heard a girl singing in the background.
                 But she wasn’t there when the shot was being taken.
                You can now experience the eerie feeling of staying at this palace when you are visiting Ooty.
            </p>
        </div>
        <div className={HauntedCss.place3}>
            <img src={haunted3} alt="Dhanushkodi"/>
            <h1>DHANUSHKODI</h1>
            <p>
                when the super cyclone hit the town, Train No. 653 Pamban-Danushkodi Passenger with 100 passengers and five railway staff was moving slowly towards Dhanushkodi 
                train station when a big wave blown away the full tain with 6 cars.
                There was no clue of any of them. The cyclone destroyed everything. 
                The whole town was vanished. After that night, nobody could hear the whistle of a train engine again.
                Government quickly labelled the town as ‘not fit for human habitation’.
                However, today only a small number of fisher families live here in their thatched huts.
            </p>
            <p>
                Today, even after more than 50 years, you are not allowed to visit Dhanushkodi in night.
                People say that you can still hear the screams of the locals died that night.
                Some people say that they have seen the station master of the destroyed train station walking around with a lamp and heard the voices of prayer in the Church. 
            </p>

        </div>
        <div className={HauntedCss.place4}>
            <img src={haunted4} alt="Sathyamangalam Wildlife Sanctuary"/>
            <h1>SATHYAMANGALAM</h1>
            <p>
                National Highway 209 (NH 209) passes through Sathyamangalam wildlife sanctuary to Karnataka. 
                After the death of the scandalously famous Veerappan with 30 years of smuggling, kidnapping, even murder cases in the Sathyamangalam forest,
                people found strange and superstitious activities in that area. 
            </p>
            <p>
                The Sathyamangalam Wildlife Sanctuary in Tamil Nadu has a spine-chilling stretch on the national highway.
                Legends say that this road, once ruled by the notorious bandit Veerappan until his death, is a haunting place.
                Travellers share creepy tales of floating lights and distant screams along this route. 
                It is widely believed to be the most haunted road in Tamil Nadu, with many attributing the eerie occurrences to the spirit of Veerappan.
            </p>
            <p>
                Driving on the forest-covered road always gives us a spooky feeling.
                Still, Truck drivers, passers-by, travelers, or localities have witnessed screams, running footsteps,
                walking sound effects, floating fire lights, sudden pass of structured white light in between the road, and it continues to haunt the complete pathway.
            </p>
            
        </div>
        <div className={HauntedCss.about}>
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
 
export default Haunted;