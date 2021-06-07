import React from "react";

export default React.forwardRef(function MyInput(props, ref) {
  return (
    <div>
      <p>MyInput</p>
      <input ref={ref} />
    </div>
  );
});
