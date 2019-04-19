import state from "app/state";

export default () => {
  state.get("entries").push({
    title: "",
    description: "",
    id: Date.now(),
    user: state.getUser()
  });
  state.set("entries", state.get("entries"));
};
