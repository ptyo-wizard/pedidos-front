import React from "react";
import Detail from "./Detail";

function PromisesInfo({ item }) {
  return (
    <div className="col">
      <div className="title">Tiempos de entrega: </div>
      <Detail
        title="Fecha de entrega minima"
        data={item.promises_dates.pack_promise_min}
      />
      <Detail
        title="Fecha de entrega maxima"
        data={item.promises_dates.pack_promise_max}
      />
      <Detail
        title="Fecha de envio minima"
        data={item.promises_dates.ship_promise_min}
      />
      <Detail
        title="Fecha de envio maxima"
        data={item.promises_dates.ship_promise_max}
      />
      <Detail
        title="envio .."
        data={item.promises_dates.ship_pickup_promise_max}
      />
      <Detail
        title="envio max.."
        data={item.promises_dates.ready_pickup_promise_max}
      />
    </div>
  );
}

export default PromisesInfo;
