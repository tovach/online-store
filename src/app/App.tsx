import {FC} from "react";
import './index.scss'
import {withProviders} from "app/providers";
import {Routing} from "pages/Routing";

const App: FC = () => {
    return (
        <Routing/>
    )
}

export default withProviders(App);
