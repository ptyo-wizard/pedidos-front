import React from "react";
import { Link } from "react-router-dom";
import "./CardList.css";

function CardList({
  sell_store,
  creation_date,
  shipping_method,
  external_order_number,
}) {
  return (
    <div className="card">
      <Link className="link-row" to={`/details/${external_order_number}`}>
        <div className="label">Almacen:</div>
        <div className="content">{sell_store}</div>
      </Link>
      <Link className="link-row" to={`/details/${external_order_number}`}>
        <div className="label">fecha de creacion:</div>
        <div className="content">{creation_date}</div>
      </Link>
      <Link className="link-row" to={`/details/${external_order_number}`}>
        <div className="label">Metodo de envio:</div>
        <div className="content">{shipping_method}</div>
      </Link>
      <Link className="link-row" to={`/details/${external_order_number}`}>
        <div className="label">Numerop de orden:</div>
        <div className="content">{external_order_number}</div>
      </Link>
    </div>
  );
}

export default CardList;
