<template>
  <appHeader></appHeader>
  <div class="select__orders">
    <div class="select__orders--box">
      <h1>mehsul secin</h1>
      <select id="eats" v-model="this.$store.state.product">
        <option
          :value="product.name"
          v-for="product in this.$store.state.products"
          :key="product"
        >
          {{ product.name }}
        </option>
      </select>
      <input
        class="eat__count"
        type="text"
        placeholder="miqdar qeyd edin"
        @keydown.enter="getCount"
        v-model.number="this.$store.state.count"
      />
      <span>Qiymet:{{ this.$store.state.price }} AZN</span>
      <div class="send__box">
        <router-link :to="{ name: 'AddOrders' }" class="back">geri</router-link>
        <button class="send__box--link" @click="getOrders">elave et</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    this.$appAxios.get("/products").then((product_response) => {
      console.log(product_response);
      this.$store.state.products = product_response.data;
    });
  },
  computed: { ...mapGetters({ setInfo: "_setInfo" }) },
  methods: {
    getCount() {
      if (this.$store.state.product !== null) {
        this.$appAxios
          .get(`/products?name=${this.$store.state.product}`)
          .then((count_response) => {
            console.log("test", count_response.data[0].price);
            if (
              (this.$store.state.count != null) &
              (typeof this.$store.state.count == "number")
            ) {
              this.$store.state.price =
                Math.round(
                  count_response.data[0].price * this.$store.state.count * 100
                ) / 100;
            } else {
              alert("eded daxil edin!");
            }
          });
      } else {
        alert("mehsul secin");
      }
    },
    getOrders() {
      if (this.$store.state.price != null) {
        this.$appAxios.post("/orders/1", this.setInfo);
        this.$router.push({ name: "Orders" });
        this.$store.state.table = null;
        this.$store.state.servant = null;
        this.$store.state.product = null;
        this.$store.state.count = null;
        this.$store.state.price = null;
      } else {
        alert("enter ile mehsul sayini daxil edin");
      }
    },
  },
};
</script>
