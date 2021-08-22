<template>
    <router-link to="/">
        <button class="backToHome">{{"<"}}</button>
    </router-link>
</template>
<script>
export default {
    name:"BackToHome"
}
</script>
<style scoped>
.backToHome{
    position:absolute;
    left:25px;
    top:145px;
    background:black;
    border-radius:50%;
    color:white;
    width:45px;
    height:45px;
    cursor:pointer;
}
</style>