const redux = require("redux");
// console.log(redux);

// State
const initState = {
  num: 0,
  name: "Borhan",
};

// Reducer
const rootReducer = (state = initState, action) => {
  return state;
};

// Create Store
const store = redux.createStore(rootReducer);

// Dispatching Actio
store.dispatch({
  type: "INC_NUM",
});

store.dispatch({
  type: "INC_NUM",
  value: 34,
});

console.log(store.getState());
