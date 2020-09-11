<template>
  <div id="app">
    <main>
      <Header></Header>
      <div class="wrapper">
        <div class="container">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>


          <!-- <h3>ВЫВОД ДАННЫХ</h3>
            -<div>
               {{ allProducts }}
             </div>-->

        </div>
      </div>
    </main>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Header from '@/components/Header'

    export default {
        name: "App",
        components: {
            Header: Header
        },
        mounted () {
            this.$store.dispatch('fetchProducts');
        },
        // computed: mapGetters(['allProducts']),
    }
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  background: url('/fon1.jpg');
}
  #app:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.7;
  }
  main {
    position: relative;
    z-index: 1;
  }
  html, body {
    height: 100%;
  }
  main {
    height: 100%;
    display: flex !important;
    flex-direction: column;
  }
  #header {
    /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 0 0 auto;
  }
  .wrapper {
    /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
    flex: 1 0 auto;
  }
</style>

