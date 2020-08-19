<template>
  <div id="app">
    <main>
      <Header></Header>
      <div class="wrapper">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        name: "App",
        components: {
            Header: Header
        },
        props: {
            info: {
                type: Object
            }
        }
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
/*  html, body, #app {
    height: 100%;
  }*/
</style>

