<template>
    <div>
      <Header/>
    <ShipList/>
    </div>
</template>

<script>
import axios from "axios";
import ShipList from "../components/ShipList/ShipList.vue";
import Header from "../components/Header/Header.vue";
export default {
  name: "Home",
  components: {ShipList,Header}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
