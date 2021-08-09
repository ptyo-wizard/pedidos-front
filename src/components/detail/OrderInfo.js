import "../../App.css";
import React from "react";
import Detail from "./Detail";

function OrderInfo({ item }) {
  return (
    <div className="col">
      <div className="title">Informacion de orden: </div>
      <Detail
        title="Numero de orden"
        data={item.order_info.external_order_number}
      />
      <Detail title="Nombre completo" data={item.order_info.buyer_full_name} />
      <Detail title="Telefono" data={item.order_info.buyer_phone_number} />
      <Detail title="Telefono" data={item.order_info.buyer_phone_number} />
      <Detail title="Email" data={item.order_info.buyer_email} />
    </div>
  );
}

export default OrderInfo;
