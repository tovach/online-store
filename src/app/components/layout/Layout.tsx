import {Header} from "app/components/common/header/Header";
import {Footer} from "app/components/common/footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export {Layout}
