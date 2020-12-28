import {createStore} from 'redux';
import reducers from './reducer';

export const myStore = createStore(reducers);