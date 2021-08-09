import {
  FETCH_SELL_ORDER_FAILURE,
  FETCH_SELL_ORDER_REQUEST,
  FETCH_SELL_ORDER_SUCCES,
  POST_SELL_ORDER_FAILURE,
  POST_SELL_ORDER_SUCCES,
} from "../actions/fetchSellOrder.actions";
// import {
//   POST_SELL_ORDER_FAILURE,
//   POST_SELL_ORDER_SUCCES,
// } from "../actions/postSellOrder.actions";

const initialState = {
  loading: false,
  list: [],
  error: false,
  shipping_methods: [],
};

const SellOrderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SELL_ORDER_REQUEST:
      return {
        ...state,
        loading: false,
      };
    case FETCH_SELL_ORDER_SUCCES:
      return {
        loading: true,
        list: action.payload.buffer,
        error: "",
        shipping_methods: action.payload.methods,
      };
    case FETCH_SELL_ORDER_FAILURE:
      return {
        loading: false,
        list: [],
        error: action.payload,
        shipping_methods: [],
      };

    case POST_SELL_ORDER_SUCCES:
      return {
        loading: true,
        list: [...state.list, action.payload],
        error: "",
        shipping_methods: state.shipping_methods,
      };
    case POST_SELL_ORDER_FAILURE:
      return {
        loading: false,
        list: state.list,
        error: action.payload,
        shipping_methods: state.shipping_methods,
      };

    default:
      return state;
  }
};

export default SellOrderListReducer;
