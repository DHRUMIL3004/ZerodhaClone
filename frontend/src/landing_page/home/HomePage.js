import React from 'react';
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Eduction from "./Education";
import OpenAccount from "../OpenAccount";


function HomePage() {
    return ( 
        <div>
            
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Eduction></Eduction>
            <OpenAccount></OpenAccount>
      


        </div>
     );
}

export default HomePage;