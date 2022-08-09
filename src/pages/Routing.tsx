import {Route, Routes} from "react-router-dom";
import {Layout} from "app/components/layout/Layout";
import {Home} from "pages/home/Home";
import {Catalog} from "pages/catalog/Catalog";
import {ContactUs} from "pages/contactUs/ContactUs";

const Routing = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
            </Route>
        </Routes>
    )
}

export {Routing}
