import React from 'react';
import MenuLoggedOut from './MenuLoggedOut';
import Welcome from "./Welcome";
import WelcomeBottom from "./WelcomeBottom";




function HomePage(props) {
    return (
     <>
     
    <Welcome />
    <MenuLoggedOut />
    <WelcomeBottom />
    </>
    );
}

export default HomePage;
