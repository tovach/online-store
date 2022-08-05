import React from "react";
import {Provider} from "react-redux";
import {store} from "store/store";

export const withState = (component: () => React.ReactNode) => () => (
    <Provider store={store}>
      {component()}
    </Provider>
);
