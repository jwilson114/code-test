import {generateID} from 'utils/helpers';

import {
  CREATE_FIELD,
  UPDATE_FIELD,
  DESTROY_FIELD,
  CREATE_CHOICE,
  UPDATE_CHOICE,
  DESTROY_CHOICE,
  IMPORT_DATA
} from 'actions/constants';

const initialState = {
  fields: [],
}


const generateChoice = () => {
  return {
    id: generateID(),
    answer: '',
  }
}

const generateField = (type) => {
  const field = {
    type: type,
    id: generateID(),
    question: '',
    answer: ''
  };

  if(type === "text"){
    field.long = false;
  }

  if(type === "choice"){
    field.multi = false;
    field.choices = [generateChoice()];
  }
  return field;
}


const feildsReducer = (state = initialState, action) => {
	switch(action.type){
		case CREATE_FIELD:
      return {
        ...state,
        fields: [...state.fields, generateField(action.payload)]
      };
    case UPDATE_FIELD:
      return {
        ...state,
        fields: state.fields.map(
          (field) => field.id === action.payload.id ? {...field, [action.payload.type]: action.payload.value} : field
        )
      };
    case DESTROY_FIELD:
      return {
        ...state,
        fields: state.fields.filter(field => field.id !== action.payload)
      };
    case CREATE_CHOICE:
      return {
        ...state,
        fields: state.fields.map(
          (field) => field.id === action.payload ? {...field, choices: field.choices.concat(generateChoice())} : field
        )
      };
    case UPDATE_CHOICE:
      return {
        ...state,
        fields: state.fields.map(
          (field) => field.id === action.payload.fieldId ? {...field, choices: field.choices.map(
            (choice, index) => {
              return choice.id === action.payload.id ? {...field.choices[index], [action.payload.type]: action.payload.value } : choice
            }
          )} : field
        )
      };
    case DESTROY_CHOICE:
      return {
        ...state,
        fields: state.fields.map(
          (field) => field.id === action.payload.fieldId ? {...field, choices: field.choices.filter(choice => choice.id !== action.payload.id)} : field
        )
      };
    case IMPORT_DATA:
      return {
        ...state,
        fields: action.payload
      };


		default:
			return state;
	}
}


export default feildsReducer;
