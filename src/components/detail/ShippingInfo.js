import React from "react";
import Detail from "./Detail";

function ShippingInfo({ item }) {
  return (
    <div className="col">
      <div className="title">Datos de envio: </div>
      <Detail
        title="Direccion de envio"
        data={item.shipping_info.shipping_address}
      />
      <Detail title="Ciudad de envio" data={item.shipping_info.shipping_city} />
      <Detail
        title="Region de envio"
        data={item.shipping_info.shipping_region}
      />
      <Detail
        title="Pais de envio"
        data={item.shipping_info.shipping_country}
      />
      <Detail
        title="Metodo de envio"
        data={item.shipping_info.shipping_method}
      />
    </div>
  );
}

export default ShippingInfo;
