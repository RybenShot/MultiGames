<template>
  <div class="mt-5 mx-6">
    <div class="has-text-centered has-text-white">
      <div class="columns is-mobile">
        <div class="column p-0 py-1" id="barraDerechaAbajo" >
          <p>Votos de Usuarios</p>
          <p>{{ this.$store.state.datosMapa.votosUsuariosMapa }} de 5</p>
        </div>
        <div class="column p-0 py-1" >
          <p>Duracion</p>
          <p>{{ this.$store.state.datosMapa.ducacionMapa }} min</p>
        </div>
      </div>

      <div class="columns is-mobile" >
        <div class="column p-0 py-1">
          <p>Caja necesaria</p>
          <p>{{ this.$store.state.datosMapa.expansionMapa }}</p>
        </div>
        <div class="column p-0 py-1" id="barraIzquierdaArriba">
          <p>Dificultad</p>
          <p>{{ this.$store.state.datosMapa.dificultadMapa }} de 5</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Especificaciones de mapas"
}
</script>

<style scoped>
#barraDerechaAbajo{
  border-right: solid 2px;
  border-bottom: solid 2px
}

#barraIzquierdaArriba{
  border-left: solid 2px;
  border-top: solid 2px
}

p{
  color: #fff; /* Color del texto */
  padding: 1px;
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.733);
}
</style>s