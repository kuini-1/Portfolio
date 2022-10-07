import React from 'react';
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from "../components/Navbar"
import { ProductManager } from "../modules/ProductManager"
import { addToCart } from '../redux/slices/layout.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


const ProductPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const products = ProductManager.getProducts();
    const productId: string = params.productId || "";
    const product = ProductManager.getProduct(productId === "" ? products.slice(-1).pop()?.id : parseInt(productId, 10));
    const [ quantity, setQuantity ] = React.useState(1)
    
    return (
        <div className="text-white bg-stone-900 min-h-screen duration-500 pt-24 overflow-x-hidden relative select-none">
            
            <Navbar />
                 
            <div className="grid grid-cols-2 items-center w-2/4 mx-auto py-5">
                <img loading="eager" width="150" height="auto" className="w-[400px] h-[400px] bg-slate-400/10 rounded-lg" src={ product?.img } alt="" />
                <div className="bg-slate-400/10 p-5 rounded-lg h-full grid grid-flow-row">
                    <h1 className="text-white text-4xl font-bold">{ product?.name }</h1>
                    <div className="flex flex-row space-x-5 items-center self-start">
                        <span className="text-white/30 text-xl">Sold:</span>
                        <span className="text-white text-xl">{ product?.sold }</span>
                    </div>

                    {
                        product?.discount === 0 ?
                            <div className="flex flex-row items-center">
                                <FontAwesomeIcon className="text-pink-400 font-bold text-3xl" icon={solid('baht-sign')} />
                                <span className="text-pink-400 font-bold text-3xl">{ product?.price.toFixed(2) }</span>
                            </div>
                        :
                            <div className="flex flex-row space-x-5 items-center">
                                <div className="flex flex-row items-center">
                                    <FontAwesomeIcon className="text-white/30 font-bold text-lg" icon={solid('baht-sign')} />
                                    <span className="text-white/30 font-bold text-lg line-through">{ product?.price.toFixed(2) }</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <FontAwesomeIcon className="text-pink-400 font-bold text-3xl" icon={solid('baht-sign')} />
                                    <span className="text-pink-400 font-bold text-3xl">{ (((product?.price ? product?.price : 0) / 100) * (100 - (product?.discount ? product?.discount : 0))).toFixed(2) }</span>
                                </div>
                                <span className="text-white text-sm py-1 px-2 rounded-lg bg-red-700">{ product?.discount }% OFF</span>
                            </div>
                    }
                    
                    <div className="flex flex-row space-x-8 items-center">
                        <span className="text-white/30 text-xl">Shipping</span>
                        <div className="flex flex-row space-x-2 items-center">
                            <FontAwesomeIcon className="text-pink-400 font-bold text-xl" icon={solid('truck')} />
                            <span className="text-white text-xl">Free Shipping</span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5 items-center self-end">
                        <span className="text-white/30 text-xl">Quantity</span>
                        <div className="flex flex-row space-x-5 items-center">
                            {
                                quantity === 1 ?
                                    <FontAwesomeIcon className="text-white/30 font-bold text-xl p-2 bg-slate-400/10 rounded-xl" icon={solid('minus')} />
                                :
                                    <FontAwesomeIcon className="text-white font-bold text-xl cursor-pointer p-2 bg-slate-400/10 rounded-xl" onClick={ () => quantity > 1 ? setQuantity(quantity - 1) : 0 } icon={solid('minus')} />
                            }
                            <span className="text-white font-bold text-3xl cursor-default">{ quantity }</span>
                            {
                                quantity === product?.quantity ?
                                    <FontAwesomeIcon className="text-white/30 font-bold text-xl p-2 bg-slate-400/10 rounded-xl" icon={solid('plus')} />
                                :
                                    <FontAwesomeIcon className="text-white font-bold text-xl cursor-pointer p-2 bg-slate-400/10 rounded-xl" onClick={ () => quantity < (product?.quantity !== undefined ? product?.quantity : 1) ? setQuantity(quantity + 1) : 0 } icon={solid('plus')} />
                            }
                        </div>
                        <span className="text-white/30 text-lg">{ product?.quantity } availible</span>
                    </div>
                    <button className="bg-pink-400 text-white font-bold text-2xl w-full p-5 rounded-lg self-end" onClick={ () => dispatch(addToCart({ id: product?.id, name: product?.name, quantity: quantity, maxQuantity: product?.quantity, price: product?.discount !== 0 ? ((product?.price ? product?.price : 0) / 100) * (100 - (product?.discount ? product?.discount : 0)) : product.price, img: product?.img })) }>Add to cart</button>
                </div>
            </div>

            <div className="grid grid-cols-1 w-2/4 mx-auto py-5">
                <Link className="flex flex-row space-x-3 items-center " to="/">
                    <FontAwesomeIcon className="text-white font-bold text-2xl" icon={solid('chevron-left')} />
                    <span className="text-white font-bold text-2xl">Back to Catalog</span>
                </Link>
            </div>
        </div>
    );
}


export { ProductPage }
    