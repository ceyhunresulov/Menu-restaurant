<template>
  <section id="orders">
    <h1 id="orders__title">Sifarisler</h1>
    <div class="orders__info">
      <strong class="orders__info--count">Sifarisler: 15</strong>
      <strong class="orders__info--profit">Ümumi Gelir: 40AZN</strong>
    </div>
    <ul class="orders__list">
      <li
        class="orders__item"
        v-for="product in this.$store.state.products"
        :key="product"
      >
        <span>{{ product.name }}</span> <span>{{ product.price }}</span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  created() {
    this.appAxios.get("/products").then((products_response) => {
      console.log("productsss", products_response);
      // this.$store.state.products = products_response.data;
    });
  },
};
</script>
