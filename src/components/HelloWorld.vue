<template>
  <div class="hello">
    <h1>Bienvenidos a</h1>

    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <router-link to="Reportes">Reportes</router-link>
    </div>

    <!-- <button v-on:click="greet()">Reportes</button> -->
  </div>
</template>

<script>
// const axios = require("axios");
export default {
  name: "HelloWorld",
  data() {
    return {
      pendientes: [],
      resueltos: [],
      fallas: 0,
    };
  },
  mounted() {},
  methods: {
    greet: function() {
      alert("Hello ");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
