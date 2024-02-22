const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("Current State => ", currentState);
  console.log("Action => ", action);
  next(action);
  console.log("Update State => ", store.getState());
};

export default logger;
