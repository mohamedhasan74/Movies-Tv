import React from "react";
import "./Loading.css";
function Loading() {
  return (
    <div className=" loading  position-fixed top-0 start-0 bottom-0 end-0 d-flex align-items-center justify-content-center">
      <span className="loader">L &nbsp; ading</span>
    </div>
  );
}

export default Loading;
