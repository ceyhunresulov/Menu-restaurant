import { createStore } from "vuex";

export default createStore({
  state: {
    table: null,
    tables: null,
    servant: null,
    servants: null,
    products: null,
    product: null,
    price: null,
    count: null,
    status: "sonlanmayib",
    orders: null,
    allPrice: null,
  },
  getters: {
    _setInfo(state) {
      const setInfo = {
        table: state.table,
        servant: state.servant,
        date: new Date().getDate(),
        product: [
          {
            name: state.product,
            count: state.count,
            price: state.price,
          },
        ],
      };
      return setInfo;
    },
  },
});
