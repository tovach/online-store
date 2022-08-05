import compose from 'compose-function';
import {withRouter} from "app/providers/withRouter";
import {withState} from "app/providers/withState";


export const withProviders = compose(withRouter, withState);
