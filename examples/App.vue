<template>
  <div id="app">
    <div @click="topath('/')">页面1</div>
    <div @click="topath('/About')">页面2</div>
    <router-view/>
  </div>
</template>
<script>
  export  default  {
      methods:{
          topath(src){
              this.$router.push(src)
          }
      }
  }
</script>
<style lang="scss">
  *{margin: 0;padding: 0}
  html{height: 100%;width: 100%}
  body{height: 100%;width: 100%;overflow: hidden}

#app {
  overflow: auto;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
