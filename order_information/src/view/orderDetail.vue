<template>
  <appHeader></appHeader>
  <div class="orders__box">
    <table>
      <thead>
        <th>id</th>
        <th>masa</th>
        <th>xidmetci</th>
        <th>status</th>
        <th>mebleg</th>
        <th>sonlanma tarixi</th>
        <th>etrafli</th>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order">
          <td>{{ order.id }}</td>
          <td>{{ order.masa }}</td>
          <td>{{ order.xidmetci }}</td>
          <td>{{ order.status }}</td>
          <td>{{ order.mebleg }}</td>
          <td>{{ order.tarix }}</td>
          <td><router-link :to="{ name: 'OrderDetail' }">bax</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderDetail: [],
    };
  },
};
</script>
