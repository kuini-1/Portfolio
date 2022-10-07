import React from 'react';
import { Navbar } from "../components/Navbar"


const ContactPage = () => {
    return (
        <div className="text-white bg-stone-900 min-h-screen duration-500 pt-24 overflow-x-hidden relative">
            
            <Navbar />
            
            <div className="items-center w-1/4 mx-auto mt-10">
                <span className="text-4xl font-bold">Contact Us</span>
                <form className="grid grid-flow-rows mt-12" action="">
                    <div className="flex flex-row justify-between space-x-5">
                        <div className="grid grid-flow-rows">
                            <label className="text-lg" htmlFor="firstName">First name</label>
                            <input className="text-stone-800 p-3 rounded-lg outline-none" type="text" name="firstName" placeholder="First name" />
                        </div>
                        <div className="grid grid-flow-rows">
                            <label className="text-lg" htmlFor="lastName">Last name</label>
                            <input className="text-stone-800 p-3 rounded-lg outline-none" type="text" name="lastName" placeholder="Last name" />
                        </div>
                    </div>
                    <br />
                    <div className="grid grid-flow-rows">
                        <label className="text-lg" htmlFor="email">Email</label>
                        <input className="text-stone-800 p-3 rounded-lg outline-none" type="text" name="email" placeholder="Email" />
                    </div>
                    <br />
                    <div className="grid grid-flow-rows">
                        <label className="text-lg">Message</label>
                        <textarea className="text-stone-800 p-3 rounded-lg outline-none" rows={5} />
                    </div>
                    <br />
                    <button className="bg-pink-400 text-white font-bold text-2xl w-full px-5 py-3 rounded-lg self-end">Send Message</button>
                </form>
            </div>
        </div>
    );
}


export { ContactPage }
    