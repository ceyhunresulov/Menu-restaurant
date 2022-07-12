<template>
  <appHeader></appHeader>
  <div class="add__orders">
    <div class="add__orders--table">
      <label for="table">Masa</label>
      <select id="table" v-model="this.$store.state.table">
        <option
          :value="table.name"
          v-for="table in this.$store.state.tables"
          :key="table"
        >
          {{ table.name }}
        </option>
      </select>
    </div>
    <div class="add__orders--servant">
      <label for="servant">Xidmetci</label>
      <select id="servant" v-model="this.$store.state.servant">
        <option
          :value="servant.name"
          v-for="servant in this.$store.state.servants"
          :key="servant"
        >
          {{ servant.name }}
        </option>
      </select>
    </div>
    <button class="create__order" @click="checkInfo">sifaris yarat</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$appAxios.get("/tables").then((tables_response) => {
      console.log(tables_response);
      this.$store.state.tables = tables_response.data;
    });
    this.$appAxios.get("/servants").then((servants_response) => {
      console.log("servants", servants_response);
      this.$store.state.servants = servants_response.data;
    });
  },
  methods: {
    checkInfo() {
      if (
        (this.$store.state.table != null) &
        (this.$store.state.servant != null)
      ) {
        this.$router.push({ name: "CreateOrders" });
      } else {
        alert("masa ve xidmetci secin.");
      }
    },
  },
};
</script>
