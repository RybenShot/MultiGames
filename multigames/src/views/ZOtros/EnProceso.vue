<template>
<div id="BGEnProceso">
  <!-- HERO -->
  <router-link to="/">
    <div class="hero-body columns is-mobile p-4 m-0">
      <p class="f-x2 column is-one-fifth p-0"></p>
      <img id="imgTitleAH" class="column p-0" src="@/assets/img/ZZOtros/TituloArkhamHorrorEDITADO.png" alt=""/>
      <p class="column is-one-fifth p-0"></p>
    </div>
  </router-link>
  <div class="hero">
    <h1 class="title is-2 px-2 has-text-centered has-text-danger" v-if="this.$store.state.lenguaje == 'español'">Pagina en proceso</h1>
    <h1 class="title is-2 px-2 has-text-centered has-text-danger" v-if="this.$store.state.lenguaje == 'ingles'">Page in progress</h1>
    <section class="hero is-halfheight ">
      <div class="hero-body">
        <button @click="goBack" class="button is-fullwidth">Huir despavorido</button>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'Pagina en proceso',

  methods:{
  goBack() {
      this.$router.go(-1);
    },
  }
}

</script>

<style scoped>
#BGEnProceso {
  background-image: url(@/assets/img/ZZOtros/BGEnProceso.gif);
  min-height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>