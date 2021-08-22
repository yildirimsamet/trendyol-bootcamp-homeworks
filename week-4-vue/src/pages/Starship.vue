<template>
  <div>
    <Loading v-if="loading"/>
    <div v-else>
      <Header/>

      <div>
        <h1>
          {{ starship.name }}
        </h1>
        <img src="../assets/starship.png" />
        <p><strong>Model:</strong> {{ starship.model }}</p>
        <p><strong>Hyper Drive:</strong>{{ starship.hyperdrive_rating }}</p>
        <p><strong>Passengers:</strong>{{ starship.passengers}}</p>
        <p><strong>Max Atmosphering Speed:</strong>{{ starship.max_atmosphering_speed }}</p>
        <p><strong>Manufacturer:</strong>{{ starship.manufacturer }}</p>
        <p><strong>Crew:</strong>{{ starship.crew }}</p>
        <p><strong>Cargo Capacity:</strong>{{ starship.cargo_capacity }}</p>
        <BackToHome/>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import BackToHome from '../components/BackToHome/BackToHome.vue'
import Loading from '../components/Loading/Loading.vue'
import Header from '../components/Header/Header.vue'
export default {
  name: "Starship",
  components:{BackToHome,Loading,Header},
  data() {
    return {
      loading: true,
      starship: {}
    };
  },
  created() {
      this.loading=true
    axios
      .get(`https://swapi.dev/api/starships/${this.$route.params.id}`)
      .then(res => {
          this.starship = res.data;
          console.log(res.data)
      })
      .finally(()=>this.loading=false)
  }
};
</script>
<style></style>
