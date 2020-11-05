import { createStore } from 'redux'

const initialState = {
  allBMIs: [],
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_BMI') {
    const newList = [...state.allBMIs, action.payload];
    return {
      allBMIs: newList
    }; 
  } else if (action.type === 'REMOVE_BMI') {
    const newList = state.allBMIs.filter((bmi) => {
      return bmi.name !== action.payload.name
    });
    return {
      allBMIs: newList
    };
  }

  return state;
  
}

const store = createStore(reducer);

export default store;