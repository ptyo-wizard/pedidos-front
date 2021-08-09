import axios from "axios";

export const POST_SELL_ORDER_REQUEST = "POST_SELL_ORDERS_REQUEST";
export const POST_SELL_ORDER_SUCCES = "POST_SELL_ORDERS_SUCCES";
export const POST_SELL_ORDER_FAILURE = "POST_SELL_ORDERS_FAILURE";

export const postSellOrderRequest = () => {
  return {
    type: POST_SELL_ORDER_REQUEST,
  };
};

export const postSellOrderSucces = (data) => {
  return {
    type: POST_SELL_ORDER_SUCCES,
    payload: data,
  };
};

export const postSellOrderFailure = (error) => {
  return {
    type: POST_SELL_ORDER_FAILURE,
    payload: error,
  };
};

export const postSellOrder = (data) => {
  return (dispatch) => {
    dispatch(postSellOrderRequest());

    axios
      //.get(process.env.REACT_APP_API + param)
      .post("http://localhost:3001/api/sellorder/createsell", data)
      .then((response) => {
        dispatch(postSellOrderSucces(response.data.temp)); //[]
      })
      .catch((error) => {
        console.log("no hay datos");
        dispatch(postSellOrderFailure("No hay datos"));
      });
  };
};

//export default fetchSellOrder;
