import axios from "axios";

export const FETCH_SELL_ORDER_REQUEST = "FETCH_SELL_ORDERS_REQUEST";
export const FETCH_SELL_ORDER_SUCCES = "FETCH_SELL_ORDERS_SUCCES";
export const FETCH_SELL_ORDER_FAILURE = "FETCH_SELL_ORDERS_FAILURE";

export const POST_SELL_ORDER_SUCCES = "POST_SELL_ORDERS_SUCCES";
export const POST_SELL_ORDER_FAILURE = "POST_SELL_ORDERS_FAILURE";

export const fetchSellOrderRequest = () => {
  return {
    type: FETCH_SELL_ORDER_REQUEST,
  };
};

export const fetchSellOrderSucces = (data) => {
  return {
    type: FETCH_SELL_ORDER_SUCCES,
    payload: data,
  };
};

export const fetchSellOrderFailure = (error) => {
  return {
    type: FETCH_SELL_ORDER_FAILURE,
    payload: error,
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

export const fetchSellOrder = (param) => {
  return (dispatch) => {
    dispatch(fetchSellOrderRequest());
    //console.log("url ", process.env.REACT_APP_API);
    axios
      //.get(process.env.REACT_APP_API + param)
      .get("http://165.232.142.240:3002/api/sellorder/init")
      .then((response) => {
        dispatch(fetchSellOrderSucces(response.data)); //.buffer
      })
      .catch((error) => {
        console.log("no hay datos");
        dispatch(fetchSellOrderFailure("No hay datos"));
      });
  };
};

export const postSellOrder = (data) => {
  return (dispatch) => {
    axios

      //.get(process.env.REACT_APP_API + param)
      .post("http://165.232.142.240:3002/api/sellorder/createsell", data)
      .then((response) => {
        console.log("datos recibidos ", response.data);
        if (response.data.result === null)
          dispatch(postSellOrderFailure("No hay datos"));
        else dispatch(postSellOrderSucces(response.data.result)); //[]//temp
      })
      .catch((error) => {
        console.log("no hay datos");
        dispatch(postSellOrderFailure("No hay datos"));
      });
  };
};

//export default fetchSellOrder;
