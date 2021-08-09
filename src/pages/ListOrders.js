import "../App.css";
import React, { useEffect } from "react";
import CardList from "../components/card/CardList";
import { useSelector, useDispatch } from "react-redux";
import { fetchSellOrder } from "../redux/actions/fetchSellOrder.actions";

const buffer = [
  {
    sell_store: "Pesi",
    creation_date: "2021-03-01",
    order_info: {
      external_order_number: "54556",
      buyer_full_name: "carolina rodriguez",
      buyer_phone_number: "313548963",
      buyer_email: "carolina@mipespi.com",
    },
    shipping_info: {
      shipping_address: "cra 45 mz 41",
      shipping_city: "mocoa",
      shipping_region: "putumayo",
      shipping_country: "colombia",
      shipping_method: "3",
    },
    promises_dates: {
      pack_promise_min: "",
      pack_promise_max: "",
      ship_promise_min: "",
      ship_pickup_promise_min: "",
      ready_pickup_promise_max: "",
    },
    line_items: [],
  },
  {
    sell_store: "Pesi",
    creation_date: "2021-03-01",
    order_info: {
      external_order_number: "54556",
      buyer_full_name: "carolina rodriguez",
      buyer_phone_number: "313548963",
      buyer_email: "carolina@mipespi.com",
    },
    shipping_info: {
      shipping_address: "cra 45 mz 41",
      shipping_city: "mocoa",
      shipping_region: "putumayo",
      shipping_country: "colombia",
      shipping_method: "3",
    },
    promises_dates: {
      pack_promise_min: "",
      pack_promise_max: "",
      ship_promise_min: "",
      ship_pickup_promise_min: "",
      ready_pickup_promise_max: "",
    },
    line_items: [],
  },
];

function ListOrders() {
  const data = useSelector((state) => state.sellOrdersListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(initSellOrder("init"));
    if (data.list.length === 0) dispatch(fetchSellOrder("init"));
  }, []);
  console.log("rdux data", data);
  return (
    <div className="container">
      <div className="title">Ordenes de venta</div>
      {data.list.map((item, i) => {
        return (
          <CardList
            key={`dje${i}`}
            sell_store={item.sell_store}
            creation_date={item.creation_date}
            shipping_method={item.shipping_info.shipping_method}
            external_order_number={item.order_info.external_order_number}
          />
        );
      })}
    </div>
  );
}

export default ListOrders;
