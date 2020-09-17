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


