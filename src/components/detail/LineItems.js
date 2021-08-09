import React from "react";
import Detail from "./Detail";

function LineItems({ item }) {
  return (
    <div className="col">
      <div className="title">Productos</div>
      {item.line_items.map((product, i) => {
        return (
          <div key={`pro$i`}>
            <Detail title="Nombre producto " data={product.product_name} />
            <Detail title="Cantidad producto " data={product.product_qty} />
            <Detail title="Peso producto " data={product.product_weight} />
          </div>
        );
      })}
    </div>
  );
}

export default LineItems;
