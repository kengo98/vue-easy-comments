<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div>
    <EasyComments
      :config=config
    ></EasyComments>
  </div>
</template>

<script>
import EasyComments from './components/EasyComments.vue';

export default {
  name: 'App',
  components: {
    EasyComments
  },
  data(){
    return{
      config: {idName: "id", commentName:"texto"}
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
  margin-top: 60px;
}
</style>
