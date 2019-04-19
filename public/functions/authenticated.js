import state from "app/state";

export default () => state.getUser() !== "anonymous";
