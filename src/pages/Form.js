import "../App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { allInputs } from "../static/dataForm";

import Card from "../components/form/CardForm";
import DropDown from "../components/dropdown/DropDown";
import Products from "../components/products/Products";

import { postSellOrder } from "../redux/actions/fetchSellOrder.actions";

const schema = yup.object().shape({
  sell_store: yup.string().required("Digite nombre tienda"),
  external_order_number: yup
    .string()
    .required("Digite numero de orden")
    .max(10),
  buyer_full_name: yup.string().required("Ingrese su cliente"),
  buyer_phone_number: yup.string().required("Ingrese telefono"),
  buyer_email: yup.string().required("Ingrese email"),
  shipping_address: yup.string().required("Ingrese direccion de envio"),
  shipping_city: yup.string().required("Ingrese ciudad de envio"),
  shipping_region: yup.string().required("Ingrese region de envio"),
  shipping_country: yup.string().required("Ingrese pais de envio"),
});

function Form() {
  const dispatch = useDispatch();
  const shippingMethods = useSelector(
    (state) => state.sellOrdersListReducer.shipping_methods
  );
  const [select, setSelect] = useState("1");
  const [products, setProducts] = useState([]);
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, event) => {
    if (select) {
      const temp = {
        sell_store: data.sell_store,
        creation_date: "",
        order_info: {
          external_order_number: data.external_order_number,
          buyer_full_name: data.buyer_full_name,
          buyer_phone_number: data.buyer_phone_number,
          buyer_email: data.buyer_email,
        },
        shipping_info: {
          shipping_address: data.shipping_address,
          shipping_city: data.shipping_city,
          shipping_region: data.shipping_region,
          shipping_country: data.shipping_country,
          shipping_method: select,
        },

        line_items: products,
      };
      dispatch(postSellOrder(temp));
      //event.target.reset();
      setProducts([]);
      console.log("enviando datos ", temp);
    }
  };
  return (
    <div className="container">
      <div className="title">Crear orden de venta</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <Card data={allInputs} register={register} errors={errors} />
            <DropDown options={shippingMethods} setOptions={setSelect} />
          </div>
          <div className="col">
            <Products products={products} setProducts={setProducts} />
          </div>
        </div>
        <button className="form-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
