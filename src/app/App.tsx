import './index.scss'
import {withProviders} from "app/providers";
import {Routing} from "pages/Routing";

const App = () => {
    return (
        <Routing/>
    )
}

export default withProviders(App);
