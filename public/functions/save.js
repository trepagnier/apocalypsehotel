import postData from "app/functions/postData";
import state from "app/state";

export default () => postData("/save", state.get());
