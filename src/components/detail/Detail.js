import React from "react";

function Detail({ title, data }) {
  return (
    <div>
      <div className="label">{title}:</div>
      <div className="content">{data}</div>
    </div>
  );
}

export default Detail;
