<template>
  <div id="app">
    <main>
      <Header></Header>
      <div class="wrapper">
        <div class="container">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
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
        }
    }
</script>

<style>
  .router-link-exact-active {
    position: relative;
  }
  .router-link-exact-active:not(.icon-cart):before {
    /*text-decoration: underline;*/
    content: "";
    position: absolute;
    display: block;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffffff;
  }
  .header_link:hover {
    text-decoration: none;
    /*#F5C700*/
    /*color: #000000;*/
    /*opacity: 0.1;*/
    outline: 2px solid #ffffff;
  }
</style>