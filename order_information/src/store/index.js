import { createStore } from "vuex";

export default createStore({
  state: {
    table: null,
    tables: null,
    servant: null,
    product: null,
    newProduct: null,
    newServant: null,
    newPrice: null,
    price: null,
    count: null,
    status: "sonlanmayib",
    orders: null,
    allPrice: null,
    products: null,
  },
  getters: {
    _setInfo(state) {
      const setInfo = {
        table: state.table,
        servant: state.servant,
        date: `${new Date().getDate()}:${
          new Date().getMonth() + 1
        }:${new Date().getFullYear()}--${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
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
    _setNewProduct(state) {
      let newProduct = {
        name: state.newProduct,
        price: state.newPrice,
      };
      return newProduct;
    },
    _setNewServant(state) {
      let newServant = {
        name: state.newServant,
      };
      return newServant;
    },
  },
});
