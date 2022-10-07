import React from 'react';
import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { ProductManager, I_Product } from "../modules/ProductManager"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useDispatch, useSelector } from 'react-redux'
import { E_SortFilter, setActiveButton } from '../redux/slices/layout.slice';


const CatalogPage = () => {
    const products = ProductManager.getProducts();
    const dispatch = useDispatch();
    const states = useSelector( (state: any) => state.layout );
    const [ sortPrice, setSortPrice ] = React.useState("0")

    return (
        <div className="text-white bg-stone-900 min-h-screen duration-500 pt-24 overflow-x-hidden relative">
            
            <Navbar />
            
            <div className="flex flex-row space-x-5 bg-slate-400/10 p-5 rounded w-2/4 items-center mx-auto">
                <span>Sort by</span>
                <button className={`outline-none border-none p-1 w-32 rounded ${states.activeButton === E_SortFilter.Relevance ? `bg-pink-400 text-white` : `bg-white text-black`}`} onClick={ () => dispatch(setActiveButton(E_SortFilter.Relevance)) }>Relevance</button>
                <button className={`outline-none border-none p-1 w-32 rounded ${states.activeButton === E_SortFilter.Discount ? `bg-pink-400 text-white` : `bg-white text-black`}`} onClick={ () => dispatch(setActiveButton(E_SortFilter.Discount)) }>Discount</button>
                <button className={`outline-none border-none p-1 w-32 rounded ${states.activeButton === E_SortFilter.TopSales ? `bg-pink-400 text-white` : `bg-white text-black`}`} onClick={ () => dispatch(setActiveButton(E_SortFilter.TopSales)) }>Top Sales</button>
                <select id="price" className="outline-none border-none bg-white text-black py-1 px-4 rounded" onChange={ (e) => setSortPrice(e.target.value) }>
                    <option value="0">Price: Low to High</option>
                    <option value="1">Price: High to Low</option>
                </select>
            </div>

            <div className="grid grid-cols-5 gap-5 p-5 rounded  items-center mx-auto">
                {
                    products.sort((a, b) => {
                        if (sortPrice === "0") return ((a.discount !== 0 ? ((a.price ? a.price : 0) / 100) * (100 - (a.discount ? a.discount : 0)) : a.price) < (b.discount !== 0 ? ((b.price ? b.price : 0) / 100) * (100 - (b.discount ? b.discount : 0)) : b.price) ? -1 : 1);
                        else return ((a.discount !== 0 ? ((a.price ? a.price : 0) / 100) * (100 - (a.discount ? a.discount : 0)) : a.price) > (b.discount !== 0 ? ((b.price ? b.price : 0) / 100) * (100 - (b.discount ? b.discount : 0)) : b.price) ? -1 : 1);
                    })
                    .sort((a, b) => { 
                        if (states.activeButton === E_SortFilter.TopSales) return a.sold > b.sold ? -1 : 1;
                        else return 1;
                    })
                    .filter((item: I_Product) => { 
                        if (states.activeButton === E_SortFilter.Discount) return item.discount > 0;
                        else return item;
                    })
                    .map((item: I_Product, index: number) =>
                        <Link key={ index } to={ "product/" + item.id.toString() }>
                            <div className="h-80 bg-slate-400/10 rounded-lg items-center flex flex-col">
                                <img loading="eager" width="150" height="auto" className="rounded-lg w-auto h-32 mx-auto grow" src={ item.img } alt="" />
                                <span className="text-white font-bold text-xl cursor-default">{ item.name }</span>
                                {
                                    item.discount === 0 ?
                                        <div className="flex flex-row items-center">
                                            <FontAwesomeIcon className="text-pink-400 font-bold text-2xl" icon={solid('baht-sign')} />
                                            <span className="text-pink-400 font-bold text-2xl">{ item.price.toFixed(2) }</span>
                                        </div>
                                    :
                                        <div className="flex flex-row space-x-5 items-center">
                                            <div className="flex flex-row items-center">
                                                <FontAwesomeIcon className="text-white/30 font-bold text-lg" icon={solid('baht-sign')} />
                                                <span className="text-white/30 font-bold text-lg line-through">{ item.price.toFixed(2) }</span>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <FontAwesomeIcon className="text-pink-400 font-bold text-2xl" icon={solid('baht-sign')} />
                                                <span className="text-pink-400 font-bold text-2xl">{ (((item.price ? item.price : 0) / 100) * (100 - (item.discount ? item.discount : 0))).toFixed(2) }</span>
                                            </div>
                                        </div>
                                }
                                <span className="text-white/30 text-xl cursor-default">Sold { item.sold }</span>
                            </div>
                        </Link>
                        
                    )
                }
            </div>
        </div>
    );
}


export { CatalogPage }
    