import createHistory from 'history/createHashHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';

export const history = createHistory();

export const middleware = routerMiddleware(history);

export const reducer = routerReducer;
