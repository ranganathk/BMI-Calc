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
      return bmi.id !== action.payload.id
    });
    return {
      allBMIs: newList
    };
  } else if (action.type === 'UPDATE_BMI') {
    const {id, name, weight, height} = action.payload;
    const newObj = {id, name, weight, height};
    const index = state.allBMIs.findIndex((bmi) => bmi.id === id);
    const newList = [...state.allBMIs];
    newList[index] = newObj;
    return {
      allBMIs: newList
    }
  }

  return state;
}

const store = createStore(reducer);

export default store;