<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="easy-comments">
    <EasyComments
      :attrNameConfig=attrNameConfig
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
      attrNameConfig: {idAttrName: "id", textAttrName:"texto"}
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}

.easy-comments{
    width: 80%;
    margin: 0 auto;
}
</style>
