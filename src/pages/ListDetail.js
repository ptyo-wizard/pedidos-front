import "../App.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import OrderInfo from "../components/detail/OrderInfo";
import ShippingInfo from "../components/detail/ShippingInfo";
import PromisesInfo from "../components/detail/PromisesInfo";
import LineItems from "../components/detail/LineItems";

function ListDetail() {
  const data = useSelector((state) => state.sellOrdersListReducer);
  const [buffer, setBuffer] = useState([]);
  const { id } = useParams();

  const searchElement = () => {
    const temp = data.list.filter(
      (item) => item.order_info.external_order_number === id
    );
    setBuffer(temp);
  };

  useEffect(() => {
    searchElement();
  }, []);

  return (
    <div>
      {buffer.map((item, i) => {
        return (
          <div key={`sdw${i}`} className="row">
            <OrderInfo item={item} />
            <ShippingInfo item={item} />
            <PromisesInfo c item={item} />
            <LineItems item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default ListDetail;
