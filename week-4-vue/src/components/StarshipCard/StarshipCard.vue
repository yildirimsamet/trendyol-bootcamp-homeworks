<template>
  <div class="shipCard">
    <router-link :to="'/' + ship.url.split('/').reverse()[1]">
      <div>
        <img src="../../assets/starship.png" />
        <div>
          <h3>{{ ship.name }}</h3>
          <p>{{ ship.model }}</p>
          <p>{{ ship.hyperdrive_rating }}</p>
        </div>
      </div>
    </router-link>
    
  </div>
</template>
<script>

export default {
  name: "StarshipCard",
  props: ["ship"],
  
};
</script>
<style scoped>
.shipCard {
  display: flex;
  flex-direction: column;
  transition: 0.6s ease background;
  align-items: center;
  width: 350px;
}
.shipCard a {
  color:orange;
}
.shipCard img {
  width: 100%;
  transition: 0.3s ease transform;
  position:relative;
}
.shipCard:hover {
  background: rgba(0, 0, 0, 0.1);
}
.shipCard:hover img {
    transform:scale(1.3);
    animation: moveShip 3s infinite;
    animation-delay:0.3s;
    z-index:1;
}
@keyframes moveShip {
    0%{
        top:0;
        right:0;
    }
    50%{
        top:550px;
        right:-550px;
    }
    99%{
        transform:scaleX(-1) rotate(-50deg)
    }
    100%{
        top:0;
        right:0
    }
}

</style>
