<template>
  <!-- VIEW DE MAPA -->
  <div>
    <div class="mx-3 container allWindow card">
      <!-- TITULO Y DESCRIPCION -->
      <div id="tituloDescripcion">
        <h1 class="title titleDecoration is-4 pt-3 mb-3">{{ this.$store.state.datosMapa.title }}</h1>
        <p class="has-text-white has-text-weight-light is-italic p-1">
          {{ this.$store.state.datosMapa.description }}
        </p>
      </div>

      <!-- MAPA , FLECHAS Y BOTON -->
      <div class="columns is-vcentered is-mobile">
        <!-- ARROW izquierda -->
        <div class="column is-one-fifth ml-4">
          <!-- boton dehabilitado  -->
          <button v-if="this.$store.state.contadorMapa <= 0" disabled class="p-2">
            <i class="fa-2x fas fa-angle-double-left"></i>
          </button>

          <!-- boton funcionando!  -->
          <button
            v-if="this.$store.state.contadorMapa > 0"
            @click="this.$store.state.contadorMapa --"
            class="p-2"
          >
            <i class="fa-2x fas fa-angle-double-left"></i>
          </button>
        </div>
        <!-- end ARROW izquierda -->

        <!-- Mapa y Boton -->
        <div class="column p-0 mt-5 pb-3">
          <div class="mx-4 helperimgMapas" :class="[imgMapa]"></div>

          <div class="columns is-mobile">
            <div class="column">
              <button 
              @click="cambiarVista(false)" 
              class="button is-success has-text-black mt-5 p-5 ml-5">Ver Enemigos</button>
            </div>
            <div><p class="has-text-white pt-6">{{this.$store.state.contadorMapa + 1}} / 4</p></div>
          </div>
          

        </div>

        <!-- ARROW derecha -->
        <div class="column column is-one-fifth is-vcentered p-0">
          <!-- boton deshabilitado -->
          <button v-if="this.$store.state.contadorMapa >= 3" disabled class="p-2">
            <i class="fa-2x fas fa-angle-double-right"></i>
          </button>

          <!-- boton funcionando!  -->
          <button
            v-if="this.$store.state.contadorMapa < 3"
            @click=" this.$store.state.contadorMapa ++"
            class="p-2">
           <!-- emitimos a traves del methods al padre un 'mas', para que el padre cambie el contador -->
           <!-- 1 ejecutamos metodo con un dato -->
            <i class="fa-2x fas fa-angle-double-right"></i>
          </button>
        </div>
        <!-- end ARROW derecha -->
      </div>
      <!-- end MAPA , FLECHAS Y BOTON -->
    </div>
    <!-- end container  -->
  </div>
</template>

<script>
export default {
  name: "mapasAHMareasTenebrosasComponente",
  data(){
    return{
      imgMapa: null,
    }
  },
  mounted(){
    if (this.$store.state.contadorMapa == 0) {this.imgMapa = "imgMapa5"}
    else if (this.$store.state.contadorMapa == 1) {this.imgMapa = "imgMapa6"}
    else if (this.$store.state.contadorMapa == 2) {this.imgMapa = "imgMapa7"}
    else if (this.$store.state.contadorMapa == 3) {this.imgMapa = "imgMapa8"}
  },
  updated(){

    if (this.$store.state.contadorMapa == 0) {
        this.$store.state.datosMapa.title = "Tiranos de la desolaci??n";
        this.$store.state.datosMapa.description =
          "En las profundidades submarinas del Arredice del Diablo, los tiranos de Y??hanthlei gobiernan las mareas tenebrosas mientras sue??an con transcender ses vetustas formas mortales. Se agitan bajo las aguas y env??an a sus profundos para que corrompan el mundo de la superficie.";
        this.imgMapa = "imgMapa5"
        this.$store.state.datosMapa.BGMapa = "BGGameGeneralMapa1"
      } else if (this.$store.state.contadorMapa == 1) {
        this.$store.state.datosMapa.title = "La l??mpara Mortecina";
        this.$store.state.datosMapa.description =
          "En el brumoso pueblo de Kingsport, la clase alta prospera en el seno de una nueva sociedad conocida como el Club de la L??mpara. En callejones y barrios bajos, muchas personas que hab??an desaparecido regresan despojados de sus recuerdos, como meras sombras de lo que fueron.";
        this.imgMapa = "imgMapa6"
        this.$store.state.datosMapa.BGMapa = "BGGameGeneralMapa2"
      } else if (this.$store.state.contadorMapa == 2) {
        this.$store.state.datosMapa.title = "La progenie de Ithaqua";
        this.$store.state.datosMapa.description =
          "Ithaqua, el que camina en el viento, acecha en el g??lido norte. Es el viento helado que cala hasta el alma, el hielo voras que aprisiona a los incautos. Olvidado y solitario, Ithaqua propaga si influencia coo la cruel esteranza de engendrar una progenie terrible, un nuevo v??stago capaz de venzer a los mism??simos dioses arquet??picos.";
        this.imgMapa = "imgMapa7";
        this.$store.state.datosMapa.BGMapa = "BGGameGeneralMapa3"
      } else if (this.$store.state.contadorMapa == 3) {
        this.$store.state.datosMapa.title = "Sue??os de R??lyeh";
        this.$store.state.datosMapa.description =
          "La fresca brisa oto??al arrastra consigo una melod??a sobrenatural, pr??cticamente imperceptible para al mente despierta. En sue??os, visit??is una fant??stica ciudad submarina y os deleit??is en la gloria de una entidad cicl??pea que no alcanz??is a ver.";
        this.imgMapa = "imgMapa8";
        this.$store.state.datosMapa.BGMapa = "BGGameGeneralMapa4"
      }
  },
  methods: {

    cambiarVista(ValueCambiarVista){
      this.$emit('cambiarVistaHijo', ValueCambiarVista)
    } // end cambiaVista
  }, // end methods
}
</script>

<style>
/* MAPAS */
.helperimgMapas{
  width: 181px;
  height: 263px;
}
.imgMapa5 {background-image: url(../../assets/img/Games/AHMareasTenebrosas/1imgMapas/mapa1MareasTenebrosas.png);}
.imgMapa6 {background-image: url(../../assets/img/Games/AHMareasTenebrosas/1imgMapas/mapa2MareasTenebrosas.png);}
.imgMapa7 {background-image: url(../../assets/img/Games/AHMareasTenebrosas/1imgMapas/mapa3MareasTenebrosas.png);}
.imgMapa8 {background-image: url(../../assets/img/Games/AHMareasTenebrosas/1imgMapas/mapa4MareasTenebrosas.png);}
</style>