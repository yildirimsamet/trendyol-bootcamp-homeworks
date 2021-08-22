<template>
    <header class="header">
        <img class="logo" src="../../assets/logo.png" />
    </header>
</template>
<script>
    export default {
        name :"Header"
    }
</script>
<style scoped>
.header {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo{
    max-width:200px;
}
</style>