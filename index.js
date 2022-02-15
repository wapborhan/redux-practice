const redux = require("redux");
// console.log(redux);

// Reducer
const rootReducer = (state, action) => {
  return state;
};

// Create Store
const store = redux.createStore(rootReducer);
console.log(store);
