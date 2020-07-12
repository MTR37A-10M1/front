<template>
  <div class="hello">
    <kendo-chart
      v-if="fallas"
      :title="title"
      :legend="legend"
      :tooltip="tooltip"
      :series="series"
      :theme="'material'"
    ></kendo-chart>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: "Report",
  data() {
    return {
      pendientes: [],
      resueltos: [],
      fallas: 0,
      title: {
        text: "Reporte de Fallas"
      },
      legend: {
        position: "top"
      },
      tooltip: {
        visible: true,
        format: "${0:N}"
      },
      series: [
        {
          type: "pie",
          data: [
            {
              category: "Pendiente",
              value: 1
            },
            {
              category: "Resuelto",
              value: 1
            }
          ],
          labels: {
            visible: true,
            template: "#: category #"
          }
        }
      ]
    };
  },
  mounted() {
    const URI = "https://mtr37a-10m1.azurewebsites.net";
    const t = this;
    axios.get(URI + "/api/Falla/all").then(function(response) {
      response.data.body.map(r => {
        if (r.idEstado == 2) t.resueltos.push(r);
        else t.pendientes.push(r);
      });
      t.series[0].data[0].value = t.resueltos.length;
      t.series[0].data[1].value = t.pendientes.length;
      t.fallas = t.resueltos.length + t.pendientes.length;
    });
  }
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
