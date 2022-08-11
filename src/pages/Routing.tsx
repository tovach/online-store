import {Route, Routes} from "react-router-dom";
import {Layout} from "app/components/layout/Layout";
import {Home} from "pages/home/Home";
import {ContactUs} from "pages/contactUs/ContactUs";
import {Categories} from "pages/categories/Categories";

const Routing = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/contact-us' element={<ContactUs/>}/>
            </Route>
        </Routes>
    )
}

export {Routing}
