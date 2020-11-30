import {
  CREATE_FIELD,
  UPDATE_FIELD,
  DESTROY_FIELD,
  CREATE_CHOICE,
  UPDATE_CHOICE,
  DESTROY_CHOICE,
  IMPORT_DATA
} from 'actions/constants';


export const createField = (type) => async (dispatch) => {
  dispatch({
    type: CREATE_FIELD,
    payload: type
  });
}

export const updateField = (type, id, value) => async (dispatch) => {
  dispatch({
    type: UPDATE_FIELD,
    payload: {type, id, value}
  });
}

export const destroyField = (id) => async (dispatch) => {
  dispatch({
    type: DESTROY_FIELD,
    payload: id
  });
}

export const createChoice = (fieldId) => async (dispatch) => {
  dispatch({
    type: CREATE_CHOICE,
    payload: fieldId
  });
}

export const updateChoice = (type, fieldId, id, value) => async (dispatch) => {
  dispatch({
    type: UPDATE_CHOICE,
    payload: {type, fieldId, id, value}
  });
}

export const destroyChoice = (fieldId, id) => async (dispatch) => {
  dispatch({
    type: DESTROY_CHOICE,
    payload: {fieldId, id}
  });
}

export const importData = (data) => async (dispatch) => {
  dispatch({
    type: IMPORT_DATA,
    payload: data
  });
}
