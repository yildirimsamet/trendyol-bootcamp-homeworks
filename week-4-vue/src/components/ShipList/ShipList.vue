<template>
  <div>
    <div class="header">
      <input type="text" placeholder="Search by name" v-model="search" />
      <button @click="handleSearch">Search</button>
      
    </div>
    <div class="cardsWrapper">
      <StarshipCard
        v-for="(ship, index) in starships"
        :key="index"
        :ship="ship"
      />
    </div>
  </div>
</template>
<script>
import StarshipCard from "../StarshipCard/StarshipCard.vue";
import axios from "axios";
export default {
  name: "ShipList",
  components: { StarshipCard },
  data() {
    return {
      search: "",
      starships: []
    };
  },
  methods: {
    handleSearch: function() {
      axios
        .get(`https://swapi.dev/api/starships?search=${this.search}`)
        .then(res => {
          this.starships = [...res.data.results];
        });
    }
  },
  mounted() {
    axios.get(`https://swapi.dev/api/starships`).then(res => {
      this.starships = [...res.data.results];
    });
  }
};
</script>
<style>
.cardsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 25px;
}
.header {
  background: black;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.header input,
.header button {
  padding: 10px 20px;
  border-radius: 5px;
}

</style>
