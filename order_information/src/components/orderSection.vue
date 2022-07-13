<template>
  <section id="orders">
    <h1 id="orders__title">Menu</h1>
    <div class="orders__info">
      <strong class="orders__info--count">yemekler</strong>
      <strong class="orders__info--profit">qiymetler</strong>
    </div>
    <ul class="orders__list">
      <li
        class="orders__item"
        v-for="product in this.$store.state.products"
        :key="product"
      >
        <span>{{ product.name }}</span> <span>{{ product.price }}Azn</span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  created() {
    this.$appAxios.get("/products").then((products_response) => {
      console.log("productsss", products_response);
      this.$store.state.products = products_response.data;
    });
  },
};
</script>
