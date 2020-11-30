import { combineReducers } from 'redux';
import FieldsReducer from './fields_reducer';

export default combineReducers({
  questionnaire: FieldsReducer,
});
