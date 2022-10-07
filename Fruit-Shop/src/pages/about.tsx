import React from 'react';
import { Navbar } from "../components/Navbar"



const AboutPage = () => {
    return (
        <div className="text-white bg-stone-900 min-h-screen duration-500 pt-24 overflow-x-hidden relative">
            
            <Navbar />
            
            <div className="items-center w-2/4 mx-auto mt-10">
                <span className="text-4xl font-bold">About Us</span>
                <br />
                <span className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
        </div>
    );
}


export { AboutPage }
    