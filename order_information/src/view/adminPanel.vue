<template>
  <appHeader></appHeader>
  <div class="menu">
    <form action="" class="menu__form">
      <label for="product">yeni mehsul</label><br />
      <input
        type="text"
        id="product"
        placeholder="mehsul daxil edin"
        v-model="this.$store.state.newProduct"
      /><br />
      <label for="price">mebleg elave edin</label><br />
      <input
        type="text"
        id="price"
        placeholder="mebleg"
        v-model="this.$store.state.newPrice"
      />
      <button @click="postNewProduct">Gonder</button>
    </form>
    <form action="" class="servant__form">
      <label for="product">Yeni xidmetci</label><br />
      <input
        type="text"
        id="product"
        placeholder="xidmetci daxil edin"
        v-model="this.$store.state.newServant"
      /><br />
      <button @click="postNewServant">Gonder</button>
    </form>
  </div>
  <div class="info__box">
    <table class="products__table">
      <th>id</th>
      <th>mehsullar</th>
      <th>legv et</th>
      <tr v-for="product in this.$store.state.products" :key="product">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td><button @click="deleteProduct(product.id)">sil</button></td>
      </tr>
    </table>
    <table class="products__servant">
      <th>id</th>
      <th>xidmetci</th>
      <th>legv et</th>
      <tr v-for="servant in this.$store.state.servants" :key="servant">
        <td>{{ servant.id }}</td>
        <td>{{ servant.name }}</td>
        <td><button @click="deleteServant(servant.id)">sil</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$appAxios.get("/products").then((products_response) => {
      this.$store.state.products = products_response.data;
    });
    this.$appAxios.get("/servants").then((servants_response) => {
      this.$store.state.servants = servants_response.data;
    });
  },
  methods: {
    postNewProduct() {
      if (
        (this.$store.state.newProduct != null) &
        (this.$store.state.newPrice != null)
      ) {
        this.$appAxios
          .post("/products", this.newProduct)
          .then((newProduct_response) => {
            console.log(newProduct_response);
          });
        this.$appAxios.get("/products").then((new_response) => {
          this.$store.state.products = new_response.data;
        });
        this.$store.state.newProduct = null;
        this.$store.state.newPrice = null;
      } else {
        alert("mehsul ve mebleg daxil edin");
      }
    },
    postNewServant() {
      if (this.$store.state.newServant != null) {
        this.$appAxios
          .post("/servants", this.newServant)
          .then((newProduct_response) => {
            console.log(newProduct_response);
          });
        this.$appAxios.get("/servants").then((new_response) => {
          this.$store.state.servants = new_response.data;
        });
        this.$store.state.newServant = null;
      } else {
        alert("xidmetci daxil edin");
      }
    },
    deleteProduct(id) {
      this.$appAxios.delete(`products/${id}`).then(() => {
        this.$appAxios.get("/products").then((new_response) => {
          this.$store.state.products = new_response.data;
        });
      });
    },
    deleteServant(id) {
      this.$appAxios.delete(`servants/${id}`).then(() => {
        this.$appAxios.get("/servants").then((new_response) => {
          this.$store.state.servants = new_response.data;
        });
      });
    },
  },
  computed: {
    ...mapGetters({
      newProduct: "_setNewProduct",
      newServant: "_setNewServant",
    }),
  },
};
</script>
