<template>
  <appHeader></appHeader>
  <div class="orders__box">
    <table>
      <thead>
        <th>id</th>
        <th>masa</th>
        <th>sifaris</th>
        <th>miqdar</th>
        <th>xidmetci</th>
        <th>mebleg</th>
        <th>sifaris tarixi</th>
        <th>legv et</th>
      </thead>
      <tbody>
        <tr v-for="order in this.$store.state.orders" :key="-order">
          <td>{{ order.id }}</td>
          <td>{{ order.table }}</td>
          <td>{{ order.product[0].name }}</td>
          <td>{{ order.product[0].count }}</td>
          <td>{{ order.servant }}</td>
          <td>{{ order.product[0].price }}Azn</td>
          <td>{{ order.date }}</td>
          <td><button @click="deleteOrder(order.id)">sil</button></td>
        </tr>
      </tbody>
      <tfoot>
        <td>
          cemi mebleg: <br />
          <span>{{ this.$store.state.allPrice }}Azn</span>
        </td>
      </tfoot>
    </table>
  </div>
</template>
<script>
export default {
  created() {
    this.$appAxios.get("/orders").then((orders_response) => {
      console.log(orders_response.data);
      this.$store.state.orders = orders_response.data;
      let sum = 0;
      orders_response.data.forEach((item) => {
        sum += item.product[0].price;
      });
      sum = Math.round(sum * 100) / 100;
      this.$store.state.allPrice = sum;
    });
  },
  methods: {
    deleteOrder(id) {
      this.$appAxios.delete(`/orders/${id}`).then(() => {
        this.$appAxios.get("/orders").then((new_response) => {
          this.$store.state.orders = new_response.data;
          let sum = 0;
          new_response.data.forEach((item) => {
            sum += item.product[0].price;
          });
          sum = Math.round(sum * 100) / 100;
          this.$store.state.allPrice = sum;
        });
      });
    },
  },
};
</script>
