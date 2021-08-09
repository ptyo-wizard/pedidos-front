import "../form/Form.css";
import "./Product.css";
import "../icon/icon.css";
import React, { useState } from "react";
import { lineItems } from "../../static/dataForm";
import Global from "../icon/Global";
import IconDel from "../icon/IconDel";

function Products({ products, setProducts }) {
  const [dataInput, setDataInput] = useState({
    product_name: "",
    product_qty: "",
    product_weight: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataInput({
      ...dataInput,
      [name]: value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    //console.log("+++++++ ", dataInput.product_name);
    if (
      dataInput.product_name.length === 0 ||
      dataInput.product_qty.length === 0 ||
      dataInput.product_weight.length === 0
    )
      return null;
    if (isNaN(parseInt(dataInput.product_qty))) return null;
    if (isNaN(parseInt(dataInput.product_weight))) return null;

    setProducts([
      ...products,
      {
        id: products.length,
        product_name: dataInput.product_name,
        product_qty: dataInput.product_qty,
        product_weight: dataInput.product_weight,
      },
    ]);

    setDataInput({
      product_name: "",
      product_qty: "",
      product_weight: "",
    });

    //console.log("global ", globalId);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    //
    const id = event.target.id;
    if (id !== "") {
      console.log("id de elemento a borrar ", id);
      const temp = products.filter((item) => {
        return item.id !== parseInt(id);
      });
      console.log("nuevos ", temp);
      if (temp.length < products.length) setProducts(temp);
    }
  };

  return (
    <div>
      {lineItems.map((item, i) => {
        return (
          <div key={`ldb${i}`}>
            <input
              name={item.name}
              placeholder={item.label}
              value={dataInput[item.name]}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        );
      })}
      <button className="product-button" onClick={handleClick}>
        crear nuevo
      </button>
      {products.length > 0 && (
        <div className="product-ctn">
          {products.map((item, i) => {
            return (
              <div key={`dje${i}`} className="product-row">
                <div className="product-col">{item.product_name}</div>
                <div className="product-col">{item.product_qty}</div>
                <div className="product-col">{item.product_weight}</div>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="product-col product-del"
                >
                  <IconDel id={item.id} className="logo-delete" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
