import { combineReducers } from 'redux';
import auth from './auth/reducer';
import toast from './toast/reducer';
import dragon from './dragons/reducer';

export default combineReducers({ auth, toast, dragon });
