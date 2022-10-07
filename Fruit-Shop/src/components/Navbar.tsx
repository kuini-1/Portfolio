import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

interface NavbarProps {
    
}

export function Navbar(props: React.PropsWithChildren<NavbarProps>): JSX.Element {
    const states = useSelector( (state: any) => state.layout );

    return (
        <div className="fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 supports-backdrop-blur:bg-white/95 h-20">
            <div className="w-full h-full bg-stone-800 grid grid-flow-col items-stretch border-b border-1 border-white/10 text-white/80">
                <Link to="/">
                    <div className="flex flex-row space-x-3 border-r border-1 border-white/10 justify-center my-auto items-center h-full">
                        <FontAwesomeIcon className="text-lg text-pink-400" icon={solid('store')} />
                        <span className="text-lg font-bold cursor-pointer text-pink-400">Catalog</span>
                    </div>
                </Link>
                <Link to="/about">
                    <span className="text-lg font-bold cursor-pointer flex justify-center my-auto items-center h-full">About Us</span>
                </Link>
                <Link to="/contact">
                    <span className="text-lg font-bold cursor-pointer flex justify-center my-auto items-center h-full">Contact</span>
                </Link>
                <Link to="/checkout">
                    <div className="flex flex-row space-x-3 border-l border-1 border-white/10 justify-center my-auto items-center h-full">
                        <FontAwesomeIcon className="text-lg text-pink-400" icon={solid('cart-shopping')} />
                        <span className="text-lg font-bold cursor-pointer text-pink-400">Checkout</span>
                        <span className="text-lg font-bold cursor-pointer text-pink-400">{ states.products.length }</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}