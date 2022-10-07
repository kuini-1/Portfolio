import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CatalogPage } from "../pages/catalog";
import { CheckoutPage } from "../pages/checkout";
import { ProductPage } from "../pages/product";
import { AboutPage } from "../pages/about";
import { ContactPage } from "../pages/contact";
import { store } from "../redux/store/store";
import { ScrollToTop } from "../modules/ScrollToTop";

const Router = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<CatalogPage />} />
                        <Route path="/product" element={<ProductPage />} >
                            <Route path=":productId" element={<ProductPage />} />
                        </Route>
                        <Route path="/checkout" element={<CheckoutPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    )
}

export { Router }