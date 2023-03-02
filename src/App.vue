<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <div class="easy-comments">
    <EasyComments
      :attrNameConfig=attrNameConfig
      :pluginConfig="pluginConfig"
      :apiConfig="apiConfig"
      :textConfig = "textConfig"
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
      attrNameConfig: {
        idAttrName: "id",
        textAttrName:"text", 
        userNameAttrName: "userName",
        userImgAttrName: "userPicture",
        commentDateAttrName: "createdAt"
      },
      pluginConfig: {useAPI: true},
      // data: {
      //   comments : [
      //           {id: 1, texto: "esto es un comentario"},
      //           {id: 2, texto: "esto es otro comentario"},
      //           {id: 3, texto: "commeeeeeeentario"}
      //   ]
      // },
      apiConfig:{
        baseURL: "https://6400eee70a2a1afebee39027.mockapi.io/api/v1",
        endpoint: "/comments",
        headers: {
            'Content-Type': 'application/json'
        }
      },
      textConfig:{
        buttonText: "Comentar",
        reply: "Responder",
        commentCount: "COMENTARIO",
        commentCountMany: "COMENTARIOS",
        newComment: "NUEVO COMENTARIO"
      }
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
