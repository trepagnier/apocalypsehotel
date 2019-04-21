import PubSub from "pubsub-js";

// Single source of truth for all stateful data
let state = {
  coords: [29.9511, -90.0715],
  title: "_apocalypsehotel",
  locationSummary: {
    title: "",
    description: ""
  }
};
let user = "anonymous";

const get = prop => {
  if (prop) {
    return state[prop];
  }
  return state;
};
const set = (prop, val) => {
  state[prop] = val;
  PubSub.publish("updateState");
};

const setUser = u => {
  user = u;
  PubSub.publish("updateState");
};

const getUser = () => user;

const setAll = stateObj => {
  state = stateObj;
  PubSub.publish("updateState");
};

const extend = obj => {
  setAll({ ...state, ...obj });
};

export default {
  get,
  set,
  setUser,
  getUser,
  setAll,
  extend
};
