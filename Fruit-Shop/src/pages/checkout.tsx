import React from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from "../components/Navbar"
import { removeFromCart, I_Product, updateQuantityCart } from '../redux/slices/layout.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands, regular } from '@fortawesome/fontawesome-svg-core/import.macro'


const CheckoutPage = () => {
    const dispatch = useDispatch();
    const states = useSelector( (state: any) => state.layout );
    let totalPrice = 0;
    

    return (
        <div className="text-white bg-stone-900 min-h-screen duration-500 pt-24 overflow-x-hidden relative select-none">
            
            <Navbar />
                 
            <div className="grid grid-cols-4 px-10 mt-10">
                <div className="col-span-2">
                    <h1 className="text-4xl font-bold">Shopping Cart</h1>
                    <div className="grid grid-cols-4 mt-10">
                        <span className="text-lg text-white/60 col-span-2 font-bold">Product</span>
                        <span className="text-lg text-white/60 font-bold">Quantity</span>
                        <span className="text-lg text-white/60 font-bold">Total Price</span>
                    </div>

                    <hr className="border-stone-800 my-5" />

                    <div className="space-y-5">
                    {
                        states.products.length !== 0 ?
                            states.products.map((item: I_Product, index: number) =>
                            {
                                totalPrice += item.price * item.quantity;
                                return (
                                    <div key={ index } className="grid grid-cols-4 items-center">
                                        <div className="flex flex-row items-center space-x-5 col-span-2">
                                            <img loading="eager" width="150" height="auto" className="w-32 h-32 bg-slate-400/10 rounded-lg" src={ item.img } alt="" />
                                            <span className="text-white font-bold">{ item.name }</span>
                                        </div>
                                        <div className="flex flex-row space-x-5 items-center">
                                            {
                                                item.quantity === 1 ?
                                                    <FontAwesomeIcon className="text-white/30 font-bold text-xl p-2 bg-slate-400/10 rounded-xl" icon={solid('minus')} />
                                                :
                                                    <FontAwesomeIcon className="text-white font-bold text-xl cursor-pointer p-2 bg-slate-400/10 rounded-xl" onClick={ () => item.quantity > 1 ? dispatch(updateQuantityCart({id: item.id, quantity: item.quantity - 1})) : 0 } icon={solid('minus')} />
                                            }
                                            <span className="text-white font-bold text-3xl cursor-default">{ item.quantity }</span>
                                            {
                                                item.quantity === item.maxQuantity ?
                                                    <FontAwesomeIcon className="text-white/30 font-bold text-xl p-2 bg-slate-400/10 rounded-xl" icon={solid('plus')} />
                                                :
                                                    <FontAwesomeIcon className="text-white font-bold text-xl cursor-pointer p-2 bg-slate-400/10 rounded-xl" onClick={ () => item.quantity < item.maxQuantity ? dispatch(updateQuantityCart({id: item.id, quantity: item.quantity + 1})) : 0 } icon={solid('plus')} />
                                            }
                                        </div>
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="flex flex-row items-center">
                                                <FontAwesomeIcon className="text-white font-bold text-2xl" icon={solid('baht-sign')} />
                                                <span className="text-white font-bold text-2xl">{ (item.price * item.quantity).toFixed(2) }</span>
                                            </div>
                                            <FontAwesomeIcon className="text-white font-bold text-2xl cursor-pointer" onClick={ () => [dispatch(removeFromCart(item.id)), totalPrice -= item.price] } icon={solid('xmark')} />
                                        </div>
                                        
                                    </div>
                                );
                                
                            })
                        :
                            <span className="text-white text-2xl flex justify-center">- Nothing in cart -</span>
                    }
                        
                    </div>

                    <hr className="border-stone-800 my-5" />

                    <div className="grid grid-cols-2 grid-rows-2 items-center">
                        <Link className="flex flex-row space-x-3 items-center row-start-2 self-end" to="/">
                            <FontAwesomeIcon className="text-white font-bold text-2xl" icon={solid('chevron-left')} />
                            <span className="text-white font-bold text-2xl">Continue Shopping</span>
                        </Link>
                        <div className="items-center space-y-5 row-span-2">
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-white/30 font-bold text-2xl">Subtotal</span>
                                <div className="flex flex-row items-center">
                                    <FontAwesomeIcon className="text-white font-bold text-2xl" icon={solid('baht-sign')} />
                                    <span className="text-white font-bold text-2xl">{ totalPrice.toFixed(2) }</span>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-white/30 font-bold text-xl">Shipping</span>
                                <span className="text-white font-bold text-2xl">Free</span>
                            </div>
                            <hr className="border-stone-800 my-5" />
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-white font-bold text-2xl">Total</span>
                                <div className="flex flex-row items-center">
                                    <FontAwesomeIcon className="text-white font-bold text-2xl" icon={solid('baht-sign')} />
                                    <span className="text-white font-bold text-2xl">{ totalPrice.toFixed(2) }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-400/10 p-5 col-start-4 rounded-lg self-start">
                    <h1 className="text-4xl font-bold">Payment Info</h1>
                    <br />
                    <span className="text-white/30 text-xl">Payment Method:</span>
                    <div className="flex flex-row items-center space-x-5 mt-5">
                        <FontAwesomeIcon className="text-pink-400 font-bold text-xl cursor-pointer" icon={solid('circle-check')} />
                        <div className="space-x-2 items-center">
                            <FontAwesomeIcon className="text-white font-bold text-xl" icon={solid('credit-card')} />
                            <span className="text-white text-xl">Credit Card</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-5 mt-3">
                        <FontAwesomeIcon className="text-white font-bold text-xl cursor-pointer" icon={regular('circle')} />
                        <div className="space-x-2 items-center">
                            <FontAwesomeIcon className="text-white font-bold text-xl" icon={brands('paypal')} />
                            <span className="text-white text-xl">Paypal</span>
                        </div>
                    </div>
                    <br /><br />
                    <span className="text-white/30 text-xl">Name On Card:</span>
                    <input className="text-white text-xl outline-none border-b border-1 focus:border-0 border-white rounded p-2 bg-transparent focus:bg-slate-400/5 w-full" type="text" placeholder="Enter name" />
                    <br /><br />
                    <span className="text-white/30 text-xl">Card Number:</span>
                    <input className="text-white text-xl outline-none border-b border-1 focus:border-0 border-white rounded p-2 bg-transparent focus:bg-slate-400/5 w-full" type="number" placeholder="Enter card number" />
                    <br /><br />
                    <div className="grid grid-cols-3 items-center">
                        <div>
                            <span className="text-white/30 text-xl">Month:</span>
                            <input className="text-white text-xl outline-none border-b border-1 focus:border-0 border-white rounded p-2 bg-transparent focus:bg-slate-400/5 w-24" type="number" maxLength={2} placeholder="MM" />
                        </div>
                        <div>
                            <span className="text-white/30 text-xl">Year:</span>
                            <input className="text-white text-xl outline-none border-b border-1 focus:border-0 border-white rounded p-2 bg-transparent focus:bg-slate-400/5 w-24" type="number" max={2} placeholder="YY" />
                        </div>
                        <div>
                            <span className="text-white/30 text-xl">CVC:</span>
                            <input className="text-white text-xl outline-none border-b border-1 focus:border-0 border-white rounded p-2 bg-transparent focus:bg-slate-400/5 w-24" type="number" max={3} placeholder="CVC" />
                        </div>
                    </div>
                    <br />
                    <button className="bg-pink-400 text-white font-bold text-2xl w-full p-5 rounded-lg">PAY</button>
                </div>
            </div>
        </div>
    );
}


export { CheckoutPage }
    