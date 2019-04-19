import React from "react";
import save from "app/functions/save";

const style = {
  marginLeft: 10,
  backgroundColor: "green",
  color: "#d4d4d4"
};

const Save = () => (
  <div>
    <button style={style} onClick={save}>
      SAVE
    </button>
  </div>
);

export default Save;
