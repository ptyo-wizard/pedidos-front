import "./Form.css";
import React from "react";

function CardForm({ data, register, errors }) {
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div key={`idn${i}`}>
            <input
              type={item.type}
              name={item.name}
              placeholder={item.label}
              ref={register}
              className="form-control"
            />
            <p className="message">{errors[item.name]?.message}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CardForm;
